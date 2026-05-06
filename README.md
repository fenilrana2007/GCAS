# GCAS Form Fill-Up Service Website

A premium, single-page React website for a "GCAS Form Fill-Up Service" featuring a modern, high-end UI/UX design with 3D elements and smooth animations.

## 🚀 Technologies Used

- **React (Vite)** - Fast frontend development
- **Tailwind CSS** - Modern styling with custom glassmorphism and neon effects
- **Framer Motion** - Smooth scroll-triggered animations and transitions
- **Three.js / React Three Fiber** - Immersive 3D starfield background
- **Lenis** - High-performance smooth scrolling
- **Lucide React** - Premium icon set

## ✨ Features

- **3D Animated Background**: Interactive particle starfield.
- **Glassmorphism Design**: High-end translucent UI components.
- **Responsive Layout**: Optimized for all devices (Mobile to Desktop).
- **Smooth Scrolling**: Professional scroll behavior using Lenis.
- **Animated Navbar**: Sticky glassmorphic navigation.
- **Google Form Integration**: Direct embedding and external link support.
- **WhatsApp Integration**: Floating button and CTA for direct contact.
- **SEO Optimized**: Semantic HTML and meta tags included.

## 📦 Installation & Setup

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### 2. Install Dependencies
Run the following command in the project root:
```bash
npm install
```

### 3. Run the Project
Start the development server:
```bash
npm run dev
```

### 4. Build for Production
Create an optimized production build:
```bash
npm run build
```

## 🛠 Project Structure

- `src/components`: Reusable UI components (Navbar, Footer, ThreeBackground).
- `src/sections`: Main page sections (Hero, Services, Process, Pricing, Apply, Contact).
- `src/utils`: Helper functions (cn utility for tailwind class merging).
- `src/index.css`: Global styles, typography, and custom CSS effects.

## 🔗 Customization

- **Google Form**: Update the `formUrl` in `src/sections/Apply.jsx`.
- **WhatsApp**: Update the phone number in `src/sections/Hero.jsx`, `src/App.jsx`, and `src/components/Footer.jsx`.
- **Location**: Update the Google Map embed URL in `src/sections/Contact.jsx`.

---
Developed with ❤️ for GCAS Service.
