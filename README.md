# Tulas International School (TIS) - Homepage Redesign

A modern, responsive, and animated redesign of the Tulas International School homepage.

This project was created as part of a Frontend Developer assessment. The goal was to improve the existing TIS homepage with a cleaner visual design, smooth animations, responsive layouts, and interactive user experiences while retaining the school's core identity and important content.

---

## 🚀 Live Demo

- **Live URL:** https://tis-homepage-redesign-eight-virid.vercel.app
- **GitHub Repository:** https://github.com/Lekhithasree/tis-homepage-redesign

---

## 🛠️ Tech Stack

- React.js
- Vite
- CSS
- Framer Motion
- Lucide React
- Git & GitHub
- Vercel

---

## ✨ Standout Features

### 1. Scroll-Triggered Animations

Homepage sections and cards animate smoothly into view as the user scrolls.

This was implemented using Framer Motion's `whileInView` functionality.

### 2. Scroll Progress Bar

A smooth progress indicator is fixed at the top of the browser and shows how far the user has scrolled through the homepage.

It uses Framer Motion's `useScroll` and `useSpring` hooks.

### 3. Custom Cursor

A custom circular cursor follows the mouse on desktop devices.

The cursor reacts when hovering over links and buttons and is automatically hidden on touch devices.

### 4. Responsive Navigation

The navigation bar adapts to different screen sizes.

On smaller screens, the desktop navigation changes into a mobile menu controlled using React `useState`.

---

## 📄 Homepage Sections

The redesigned homepage includes:

- Responsive Navbar
- Hero Section
- About TIS
- School Statistics
- TIS Experience
- Campus & Student Life
- Testimonials
- Admissions CTA
- Footer

---

## 📊 TIS Highlights

The homepage highlights important school information such as:

- 22-acre campus
- 16+ sporting activities
- 24×7 medical assistance
- 6:1 student-teacher ratio

---

## 📁 Project Structure

```text
src/
├── assets/
│   └── campus-hero.jpg
│
├── components/
│   ├── CustomCursor.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── ScrollProgress.jsx
│
├── sections/
│   ├── About.jsx
│   ├── Admissions.jsx
│   ├── Campus.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Stats.jsx
│   └── Testimonials.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## 🧩 Component Architecture

The project is separated into reusable components and homepage sections to keep the code clean and easy to maintain.

- `components/` contains reusable UI elements such as the Navbar, Footer, Custom Cursor, and Scroll Progress Bar.
- `sections/` contains individual homepage sections such as Hero, About, Campus, Testimonials, and Admissions.
- `assets/` contains images used by the website.
- `App.jsx` combines all components and sections into the final single-page homepage.

This structure makes it easier to update individual sections without affecting the rest of the application.

---

## 📦 Getting Started Locally

### 1. Clone the repository

```bash
git clone YOUR-GITHUB-REPOSITORY-URL
```

### 2. Navigate into the project

```bash
cd tis-homepage-redesign
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

in your browser.

---

## 🧪 Production Build

To create a production build:

```bash
npm run build
```

To check the project for linting issues:

```bash
npm run lint
```

Both commands were successfully tested before deployment.

---

## 📱 Responsive Testing

The homepage was tested at multiple screen sizes:

- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px+

The navigation, cards, text, buttons, sections, and footer adapt to different screen sizes without horizontal overflow.

The custom cursor is also automatically disabled on touch devices.

---

## 🎨 Design Approach

The redesign uses a green and gold visual direction inspired by the identity of Tulas International School.

The design focuses on:

- Clear content hierarchy
- Large visual Hero section
- Simple navigation
- Strong admissions call-to-actions
- School-focused imagery
- Smooth but subtle animations
- Clean card layouts
- Mobile responsiveness
- Easy-to-read content

The goal was to create a modern school website without making the interface overly complicated.

---

## 🏫 Brand Identity Retained

The redesign retains the core identity of Tulas International School.

The project keeps school-focused content, important statistics, admissions messaging, and selected official school imagery while presenting them in a more modern visual layout.

The redesign focuses on improving presentation and user experience while keeping the TIS identity recognizable.

Official website:

https://tis.edu.in/

---

## ♿ Accessibility & User Experience

The project includes:

- Semantic HTML structure
- Accessible navigation controls
- `aria-label` support for the mobile navigation button
- Touch-friendly interactive elements
- Custom cursor disabled on touch devices
- Responsive layouts
- Clear visual contrast
- Smooth scrolling
- Readable typography

---

## ⚡ Animation & Interaction

Animations were intentionally kept simple and lightweight so they support the user experience without slowing down page navigation.

Implemented interactions include:

- Hero entrance animation
- Scroll-triggered section reveals
- Staggered card animations
- Hover effects
- Custom cursor interaction
- Smooth scroll progress indicator
- Mobile menu interaction

---

## ✅ Quality Checks

Before deployment, the project was verified using:

```bash
npm run build
```

and:

```bash
npm run lint
```

Both commands completed successfully without errors.

The project was also manually checked for:

- Mobile responsiveness
- Tablet responsiveness
- Desktop layout
- Navigation functionality
- Animation behavior
- Broken layouts
- Horizontal overflow

---

## 🌐 Deployment

The application is deployed using Vercel.

The GitHub repository is connected to Vercel so new commits pushed to the main branch can trigger a new deployment.

---

## ✅ Assessment Requirements Completed

- [x] React-based implementation
- [x] Single-page homepage redesign
- [x] Responsive desktop layout
- [x] Responsive tablet layout
- [x] Responsive mobile layout
- [x] Scroll-triggered reveal animations
- [x] Scroll progress indicator
- [x] Custom cursor
- [x] Responsive mobile navigation
- [x] Reusable React components
- [x] Semantic page structure
- [x] Successful production build
- [x] ESLint validation
- [x] Public GitHub repository
- [x] Vercel deployment

---

## 👩‍💻 live Demo and GitHub links

https://tis-homepage-redesign-eight-virid.vercel.app

https://github.com/Lekhithasree/tis-homepage-redesign