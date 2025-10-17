# 🌦️ Weather Forecast

A bilingual (English/Persian) weather forecast web application built with **React 19** and **Vite**.  
It displays detailed weather information for the selected city, organized into three sections:

- **Current Weather** — real-time temperature, humidity, wind, etc.
- **Monthly Weather** — yearly overview aggregated by month.
- **Two-Week Forecast** — 14-day outlook.

---

## 🚀 Features

- Bilingual: **English / Persian** (uses `react-i18next`)
- Automatic **RTL / LTR** direction switching based on language
- **Light / Dark** theme toggle (MUI theming)
- Interactive charts with `@mui/x-charts`
- Fast development using **Vite** and React 19
- State management: **Zustand**
- Forms: **react-hook-form** + **zod** for validation
- Data fetching: **axios** + **@tanstack/react-query**
- Jalali (Shamsi) date support with **moment-jalaali**
- Toast notifications via **react-hot-toast**

---

## 🧰 Tech Stack (see `package.json`)

- React 19, Vite
- MUI v7, TailwindCSS v4
- Zustand, React Query (TanStack)
- axios, date-fns, moment-jalaali
- i18next + react-i18next
- react-hook-form, zod
- motion, react-icons
- ESLint, TypeScript

(Your `package.json` is used as the authoritative source of dependencies.)

---

## ⚙️ Quick Setup (Windows)

1. Clone the repo:

```powershell
git clone https://github.com/<your-username>/weather_forecast.git
cd weather_forecast
```

2. Install dependencies:

```powershell
npm install
```

3. Start dev server:

```powershell
npm run dev
```

4. Open http://localhost:5173 in your browser.

---

## 📂 Project Structure

src/
┣ components/ # Reusable UI components
┣ pages/ # Main page layouts and routes
┣ store/ # Zustand stores
┣ hooks/ # Custom React hooks
┣ utils/ # Helper functions (formatters, converters, etc.)
┣ assets/ # Images, fonts, icons
┣ i18n/ # Translation files and configuration
┣ App.tsx # Root component
┗ main.tsx # Entry point

---

## 🌑 Theming

This project supports both light and dark modes using MUI’s theme system.
Theme preference is stored persistently and automatically applied on reload.

---

## 🌍 Localization

The application supports English and Persian.
Direction (ltr or rtl) switches automatically based on the active language.
