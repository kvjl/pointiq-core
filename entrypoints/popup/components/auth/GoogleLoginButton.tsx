import { startGoogleLogin, finishGoogleLogin } from "@/auth";

export function GoogleLoginButton() {
  async function handleLogin() {
    try {
      const redirectedTo = await startGoogleLogin();
      await finishGoogleLogin(redirectedTo);
      // App will re-render once onAuthStateChange fires
    } catch (e) {
      console.error("Google login failed:", e);
      alert((e as Error).message);
    }
  }

  return (
    <button
      onClick={handleLogin}
      className="w-full rounded bg-black px-3 py-2 text-white"
    >
      Continue with Google
    </button>
  );
}
