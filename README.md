# 🍿 Netflix Clone

A high-performance, responsive Netflix clone built with **React**, **Vite**, and **Tailwind CSS 4**. This project mimics the Netflix user experience, featuring authentication, movie browsing, and a seamless video player interface.

---

## 🚀 Features

- **🔐 Secure Authentication**: User sign-up, login, and logout powered by Firebase Auth.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile viewing.
- **🎬 Dynamic Content**: Real-time movie data fetching and categorized sections (Trending, Popular, etc.).
- **📽️ Video Player**: Dedicated player page for watching trailers and content.
- **✨ Premium UI/UX**: Smooth transitions, loading animations, and dark mode by default.
- **🔔 Toast Notifications**: Interactive alerts for auth states and errors using React Toastify.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Backend / Database**: [Firebase](https://firebase.google.com/) (Auth & Firestore)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bhupesh-Dewangan/Netflix-Clone.git
   cd Netflix-Clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   Edit `src/firebase.js` and replace the `firebaseConfig` with your own credentials from the [Firebase Console](https://console.firebase.google.com/).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── assets/          # Static assets (images, fonts)
├── Components/      # Reusable UI components (Navbar, Footer, etc.)
├── Data/            # Static data and configurations
├── Pages/           # Application pages (Home, Login, Dashboard, etc.)
├── firebase.js      # Firebase configuration and auth service
├── App.jsx          # Root component and Routing
└── main.jsx         # Entry point
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

Developed with ❤️ by [Bhupesh Dewangan](https://github.com/Bhupesh-Dewangan)