# SkySync Weather Application 🌦️

<div align="center">

![SkySync Banner](https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=1200&h=400&fit=crop&q=80)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c45e0c00-c0f4-4bd6-b30a-d6eef6e2c4e5/deploy-status)](https://phenomenal-syrniki-57162b.netlify.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[View Demo](https://phenomenal-syrniki-57162b.netlify.app) • [Report Bug](https://github.com/yourusername/skysync/issues) • [Request Feature](https://github.com/yourusername/skysync/issues)

</div>

## 👋 Connect With Me

<div align="center">
  
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mouryas-aiml)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mourya-s-4518b9296)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/mouryagowda.s?mibextid=ZbWKwL)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/Mr_Mourya_Gowda?s=09)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_mourya__gowda_/profilecard/?igsh=dHZ4NzRtdHpzdGE5)
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/mourya_gowda)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/@mouryas_streamline.x?si=tt4mv9rmC3qwb2nh)
[![Snapchat](https://img.shields.io/badge/Snapchat-FFFC00?style=for-the-badge&logo=snapchat&logoColor=black)](https://www.snapchat.com/add/mourya_gowda19?share_id=H_YsOHgpsr0&locale=en-IN)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029VadTKY17oQhXeo0FYy0G)

</div>

## 📞 Contact Me

<div align="center">

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mouryas@outlook.in)
[![Phone](https://img.shields.io/badge/Phone-00C300?style=for-the-badge&logo=phone&logoColor=white)](tel:+918762656329)
[![Location](https://img.shields.io/badge/Location-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)](https://maps.app.goo.gl/Ji8CJKizjRofkxGa6?g_st=ac)

</div>

## ✨ Features

<div align="center">
<img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80" alt="Weather Features" style="border-radius: 10px; margin: 20px 0;">
</div>

🌡️ **Real-Time Weather Data**
- Current temperature and conditions
- "Feels like" temperature
- Detailed weather descriptions

🌍 **Location Services**
- Search any location worldwide
- Automatic location detection
- Detailed location information

📊 **Comprehensive Metrics**
- Wind speed and direction
- Humidity levels
- Air quality index (US EPA standards)

🔐 **User Authentication**
- Secure email/password login
- User registration system
- Profile management

🎨 **Beautiful UI/UX**
- Responsive design
- Dark/light mode support
- Smooth animations
- Real-time updates
- 3D Animated Logo
- Background Weather Videos
- Side Menu with User Profile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Modern web browser

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/skysync.git
```

2. Navigate to project directory
```bash
cd skysync
```

3. Install dependencies
```bash
npm install
```

4. Create `.env` file and add your WeatherAPI key
```env
VITE_WEATHER_API_KEY=your_api_key_here
```

5. Start the development server
```bash
npm run dev
```

## 🏗️ Architecture

<div align="center">

```mermaid
graph TD
    A[App Component] --> B[Authentication]
    A --> C[Weather Service]
    B --> D[Login Form]
    B --> E[Sign Up Form]
    C --> F[Weather Card]
    C --> G[Search Bar]
    F --> H[Weather API]
```

</div>

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── BackgroundVideo.tsx
│   ├── LoginForm.tsx
│   ├── Logo3D.tsx
│   ├── SearchBar.tsx
│   ├── SideMenu.tsx
│   ├── SocialLinks.tsx
│   └── WeatherCard.tsx
├── services/           # API services
│   ├── authService.ts
│   └── weatherApi.ts
├── types/             # TypeScript types
│   ├── auth.ts
│   └── weather.ts
└── App.tsx           # Main application
```

## 🛠️ Built With

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Weather Data**: WeatherAPI
- **Deployment**: Netlify
- **3D Graphics**: Three.js

## 📸 Screenshots

<div align="center">
<img src="https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=400&q=80" width="400" alt="Login Screen" style="border-radius: 10px;">
<img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=400&q=80" width="400" alt="Weather Dashboard" style="border-radius: 10px;">
</div>

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Icons by [Lucide](https://lucide.dev/)
- UI inspiration from various weather apps
- Background images from [Unsplash](https://unsplash.com/)

---

<div align="center">

Made with ❤️ by [Mourya S]

[⬆ Back to top](#skysync-weather-application-)

</div>