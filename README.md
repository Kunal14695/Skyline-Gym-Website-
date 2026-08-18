# 🏋️ Skyline Fitness Gym — Premium Fitness Website

> **Elevate Your Limits.** A modern, conversion-oriented, multi-page fitness gym website built with semantic HTML5, Vanilla CSS (design tokens & custom properties), and Vanilla JavaScript (ES6+). Inspired by leading fitness brands with a dark luxury aesthetic.

[![GitHub Pages](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=github)](https://kunal14695.github.io/Skyline-Gym-Website-/)
[![Responsive](https://img.shields.io/badge/Responsive-Mobile_%7C_Tablet_%7C_Desktop-brightgreen?style=for-the-badge)](https://kunal14695.github.io/Skyline-Gym-Website-/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](#license)

---

## 🌐 Live Demo

Visit the live website on any device:  
👉 **[https://kunal14695.github.io/Skyline-Gym-Website-/](https://kunal14695.github.io/Skyline-Gym-Website-/)**

---

## ✨ Features & Sections

1. **Sticky Glass-morphism Navigation**
   - Clean brand logo with responsive navigation links.
   - Smooth background blur & color transition on scroll.
   - Mobile hamburger menu drawer with smooth slide-in animations.
   - "Join Now" prominent CTA button.

2. **Dynamic Hero Section**
   - High-impact visual background with subtle parallax effect.
   - Animated number counters for live stats (**3 Locations**, **50+ Classes/Week**, **5000+ Active Members**).
   - Dual Call-to-Action buttons ("Start Free Trial" & "View Membership Plans").

3. **Our Legacy (About)**
   - Brand history and mission statement.
   - 4-card feature highlights (24/7 Access, Personal Training, Nutrition Guidance, Community).

4. **Our Programs**
   - 6 specialized workout program cards with hover-to-reveal details:
     - **Strength Training** (Free weights, power racks)
     - **Group Fitness** (HIIT, Yoga, Zumba, Spin)
     - **Personal Training** (1-on-1 coaching)
     - **CrossFit Zone** (Functional training & WODs)
     - **Cardio Studio** (Treadmills, rowers, bikes)
     - **Corporate Wellness** (Team wellness plans)

5. **Interactive Weekly Class Timetable**
   - 6-day interactive day switcher (Monday – Saturday).
   - Detailed timetable with class name, trainer, duration, and difficulty level badges.
   - Touch-friendly horizontal swipe for mobile screens.

6. **Expert Trainers Section**
   - Horizontal swipeable trainer showcase with certifications (ACE, NASM, CSCS, RYT, ISSA), bios, and social links.

7. **Membership Pricing Plans**
   - 3-tier membership structure (**Basic**, **Pro - Most Popular**, and **Elite**).
   - Clear feature checklists and custom highlight styling.

8. **Testimonial Carousel**
   - Auto-playing member transformation reviews with pause-on-hover.
   - Interactive dot indicators, next/prev arrow controls, and touch swipe gestures.

9. **Masonry Gallery & Lightbox**
   - Multi-column image showcase.
   - Fullscreen modal lightbox with keyboard (`Esc`) and backdrop dismiss.

10. **Fitness Blog Previews**
    - Highlighting training, nutrition, and lifestyle articles with metadata and read-more links.

11. **Contact & Location**
    - Interactive inquiry form with validation and instant feedback.
    - Operating hours, address, direct phone/email, and interactive map placeholder.

12. **Multi-Column Footer**
    - Quick navigation links, program directory, social links, and working newsletter subscription form.

---

## 🎨 Design Tokens & Palette

| Token | Color | Usage |
|---|---|---|
| `--color-primary` | `hsl(210, 100%, 50%)` | Electric Blue — CTAs, Highlights, Accents |
| `--color-primary-dark` | `hsl(210, 100%, 38%)` | Primary button hover states |
| `--color-accent` | `hsl(45, 100%, 55%)` | Gold / Amber — Badges, Star ratings |
| `--color-dark` | `hsl(220, 20%, 8%)` | Main dark background |
| `--color-dark-alt` | `hsl(220, 18%, 12%)` | Card & alternate section backgrounds |
| `--color-surface` | `hsl(220, 14%, 16%)` | Elevated surface components |
| `--font-heading` | `'Bebas Neue', sans-serif` | Bold athletic headings |
| `--font-body` | `'Inter', sans-serif` | Clean, highly legible body typography |

---

## 📱 Cross-Device Responsiveness

- **Small Phones (320px – 360px)**: Compact layouts, scaled typography, touch targets (44px+).
- **Standard & Large Phones (375px – 480px)**: 1-column layouts, always-visible touch cards, no iOS input auto-zoom (`16px` base font size).
- **Tablets (768px – 1024px)**: 2-column balanced grids, optimized drawer menu.
- **Desktop & Large Displays (1200px – 1440px+)**: Multi-column grids, fixed desktop navigation, subtle parallax scroll.

---

## 📂 Project Structure

```
Skyline-Gym-Website-/
├── index.html              # Main semantic HTML5 markup
├── css/
│   └── styles.css          # Design system, components & responsive queries (1900+ lines)
├── js/
│   └── main.js             # Interactions, sliders, lightbox, form handlers, counters
├── assets/
│   └── images/
│       ├── logo.png              # Skyline Gym brand logo
│       ├── hero_gym.jpg          # Hero background
│       ├── about_gym.jpg         # About section photography
│       ├── program_strength.jpg  # Strength training
│       ├── program_group.jpg     # Group fitness
│       ├── program_personal.jpg  # Personal training
│       ├── program_crossfit.jpg  # CrossFit & functional zone
│       └── gallery_interior.jpg  # Gym interior & cardio studio
└── README.md               # Documentation
```

---

## 🚀 Getting Started

No node modules, build steps, or package managers required. Simply clone and open:

```bash
# Clone the repository
git clone https://github.com/Kunal14695/Skyline-Gym-Website-.git

# Open the project folder
cd Skyline-Gym-Website-

# Open index.html in your default browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).