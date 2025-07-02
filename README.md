# ClimaZen – Dynamic Weather App 🌦️

**ClimaZen** is a responsive, React based weather application that fetches real‑time weather data from the **OpenWeatherMap API** and delivers an interactive experience. The app displays weather details (temperature, humidity, wind speed, etc.) for any city or country entered by the user, and it dynamically changes its background video based on the current weather conditions (rain, clear, cloudy, snow, or thunderstorm). 

👉 **Live Demo**: [https://weather-app-two-olive-16.vercel.app](https://climazen-weather.vercel.app)

---

## ⚡ Features
- 🌍 **Search any city or country** for current weather
- 🎥 **Dynamic video background** matching the weather
- ⛅ Placeholder background while video loads
- 💻 Fully **responsive design** built with **Tailwind CSS**
- ⚡ Smooth fade‑in/out video transitions
- 🔥 Powered by the **OpenWeatherMap API**

---

## 🛠️ Tech Stack
- **Framework**: React + Vite
- **Styles**: Tailwind CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **API**: OpenWeatherMap
- **Video Handling**: HTML5 Video (`onCanPlayThrough`)
- **Build Tool**: Vite
- **Deployment**: Vercel

---

## ⚡ Getting Started

### ✅ Prerequisites
- Node.js (v18 or later)
- NPM or Yarn
- An [OpenWeatherMap API Key](https://openweathermap.org/api)

### 📥 Installation
```bash
git clone https://github.com/<your-username>/climazen.git
cd climazen
npm install
```


### 🔑 Configure Environment Variable
Create an .env file in the root directory and add your API key:
```bash
VITE_API_KEY=your_openweathermap_api_key_here
```

### ⚡ Usage
Run the app:
```bash
npm run dev
```

### 👥 Contributing
Contributions, bug reports, and feature requests are welcome!
Open an issue or create a pull request to help make ClimaZen better.

### 📄 License
This project is licensed under the MIT License.
