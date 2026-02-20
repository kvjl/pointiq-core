# PointIQ Core

Privacy-first credit card decision engine built as a Chrome extension (WXT + React).

PointIQ recommends the best credit card to use on a given website — without syncing financial data or tracking spending.

---

## 📦 Version

Current version: **0.11.0**

---

## 🚀 Implemented

- Wallet view
- CardItem component abstraction
- Icon component separation
- Tab-based layout (Wallet / Smart Pick)
- Typed components (TypeScript)
- Clean feature-based architecture

---

## 🛠 In Progress

- State-driven wallet
- Local persistence (chrome.storage)
- Add / Remove cards
- SmartPick recommendation engine

---

## 📊 Current Status

- UI prototype
- No authentication
- Recommendation logic in development
- No backend dependency

---

## 🧪 Setup

This project is built with **WXT (Web Extension Toolkit)**, React, and TypeScript.

All required dependencies — including WXT — are installed via `npm`.

### Install & Run

```bash
npm install
npm run dev

Running npm run dev launches WXT in development mode and opens a fresh Chrome instance with the extension loaded.
