# 🐉 Kingdom of Mugloar – Bigbank Front-End Assignment

A small RPG-inspired browser game built as a technical assignment for Bigbank.  
The game combines dragons, bureaucracy, and decision-making under pressure — all wrapped in a modern Vue 3 + TailwindCSS setup.

---

## 🧱 Tech Stack

- **Vue 3 (Composition API)**
- **Pinia** – state management
- **Vue Router** – page navigation
- **TailwindCSS v4** – utility-first styling
- **Vite** – lightning-fast development build tool
- **TypeScript** – strict types and DX
- **AOS** – animations on scroll
- **Prettier** – formatting

---

## 📂 Project Structure

```
src/
├── api/ # Game API wrapper (MugloarAPI class)
├── assets/ # Images (e.g., landing page art)
├── components/ # Reusable UI components (Toasts, Sidebar, Header, etc.)
├── icons/ # SVG/inline icon components
├── stores/ # Pinia stores (game + UI state)
├── styles/ # Tailwind theme + global resets
├── types/ # TypeScript interfaces for API/game
├── utils/ # Utility logic (e.g., ROT13 decoding)
├── views/ # Actual views: Landing, Missions, Store, Layout wrapper
```
---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/iremlopsum/bigbank-test.git
cd bigbank-test
```
### 2. Install dependencies

```bash
yarn install
```

### 3. Start the development server

```bash
yarn dev
```
---

## 🎮 Game Flow

- LandingView: Start a new game session (/)
- MissionsView: Choose and solve quests (/missions)
- StoreView: Buy items from the shop (/store)
- LayoutView: Wraps all protected pages with nav + header
- GameStore: Holds session data (gold, lives, level, etc.)
- UIStore: Manages global UI state (toasts, modals, sidebar)

---

## ✅ Features Implemented

- 🎨 Fully responsive UI (desktop & mobile)
- 🧭 Sidebar navigation with active state
- 🎁 Global toast notifications
- ⚔️ Encrypted missions (Base64 + ROT13 decoding)
- 🛍 In-game shop with buying logic and constraints
- 💀 Death modal trigger when lives reach 0
- 💾 Global game state with clean reset logic

## 📎 Notes

- No game state is persisted across reloads (by design)
- All game actions handled via Mugloar API

---

## 👤 Author

Kristjan Vool
Made with ☕ and 🐉 in Estonia
