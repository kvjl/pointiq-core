import { supabase } from "./supabaseClient";
declare const chrome: any;

function getExtensionRedirectURL() {
  if (typeof chrome !== "undefined" && chrome.identity?.getRedirectURL) {
    return chrome.identity.getRedirectURL(); // -> https://<ID>.chromiumapp.org/
  }
  throw new Error(
    "chrome.identity unavailable: run inside extension popup/options"
  );
}

export async function startGoogleLogin(): Promise<string> {
  const redirectUri = getExtensionRedirectURL();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectUri,
      skipBrowserRedirect: true, // critical for extensions
      queryParams: { access_type: "offline", prompt: "consent" }, // optional refresh token
    },
  });
  if (error) throw error;
  const authUrl = data?.url;
  if (!authUrl) throw new Error("No auth URL from Supabase");

  return new Promise<string>((resolve, reject) => {
    chrome.identity.launchWebAuthFlow(
      { url: authUrl, interactive: true },
      (url: any) => {
        if (chrome.runtime.lastError)
          return reject(new Error(chrome.runtime.lastError.message));
        if (!url) return reject(new Error("No redirect URL returned"));
        resolve(url); // e.g. https://<ID>.chromiumapp.org/?code=...&state=...
      }
    );
  });
}

export async function finishGoogleLogin(redirectedTo: string) {
  const code = new URL(redirectedTo).searchParams.get("code");
  if (!code) throw new Error("No auth code found in redirect");
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) throw error; // session established
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
