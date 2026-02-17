// src/SmartPickView.jsx
// At the very top of your file:
declare const chrome: any;

import { useState, useEffect } from "react";

async function getActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

export default function SmartPickView() {
  const [site, setSite] = useState({ url: "", origin: "", host: "" });

  useEffect(() => {
    getActiveTab().then((tab) => {
      const url = tab?.url ?? "";
      const origin = url ? new URL(url).origin : "";
      const host = origin ? new URL(url).hostname : "";

      setSite({ url, origin, host });
    });
  }, []);

  return (
    <section className="w-full max-w-md space-y-4">
      <div>
        <span className="font-bold">Current Website: </span>
        {site.host}
        {site.host ? (
          <section>
            <div className="mt-2 p-2  rounded bg-gray-50">
              <p>
                <span className="font-medium">URL:</span> {site.url}
              </p>
              <p>
                <span className="font-medium">Origin:</span> {site.origin}
              </p>
              <p>
                <span className="font-medium">Host:</span> {site.host}
              </p>
            </div>
            <button
              className=" px-2 py-1 shadow-lg
                     bg-green-700 text-white text-sm font-medium hover:shadow-xl
                     hover:opacity-90 active:scale-95 transition cursor-pointer"
            >
              Smart Pick
            </button>
          </section>
        ) : (
          <p className="text-gray-500 mt-2">Loading...</p>
        )}
      </div>
      <div></div>
    </section>
  );
}
