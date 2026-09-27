# Oscar Gegantoni — Minimalist Front-End Developer Portfolio & Resume

A clean, modern, and minimalist web portfolio and resume designed specifically for an entry-level Front-End Developer.

Built with **vanilla web fundamentals**—semantic HTML5, modern CSS with custom properties (CSS variables), and modular vanilla JavaScript. Zero build steps, zero bulky dependencies, and blazing-fast performance.

---

## 🌟 Features

- **Minimalist Aesthetic**: Typography-driven layout with purposeful whitespace and refined micro-interactions.
- **Dark & Light Mode**: Seamless theme switcher that automatically detects your OS preference and remembers your choice in `localStorage`.
- **Project Template Showcase**: Ready-to-customize project cards with tags, key engineering highlights, live demo links, and GitHub repository links.
- **Integrated Resume & Print-Ready PDF**: A structured timeline of certifications, education, and experience. Click the **Print / Save PDF (Ctrl+P)** button to instantly print or export a clean, distraction-free resume document.
- **Fast & Accessible**: Semantic markup (`<header>`, `<main>`, `<section>`, `<article>`), ARIA labels, keyboard focus rings, and high contrast.
- **Zero Build Friction**: Open `index.html` in any browser—no Node.js, Webpack, or npm install required.

---

## 📁 Project Structure

```
Oscar_web/
├── index.html     # Semantic HTML5 layout, project templates, resume, and contact
├── style.css      # Design tokens, responsive grid/flexbox, dark/light themes, print stylesheet
├── script.js      # Theme controller, copy email to clipboard, mobile nav, active scroll spy
└── README.md      # Documentation and customization guide
```

---

## 🚀 How to Run Locally

You don't need any build tools:

1. **Directly in Browser**: Double-click `index.html` to open it in Chrome, Edge, Brave, Firefox, or Safari.
2. **VS Code Live Server**: If using VS Code, right-click `index.html` and select **"Open with Live Server"**.

---

## 🛠️ How to Customize Your Portfolio

### 1. Adding or Modifying Projects
Open `index.html` and look for the `<!-- =================== PROJECT TEMPLATE =================== -->` comments in the `#projects` section.

To add or update a project, edit the fields in each `<article class="project-card">`:
```html
<article class="project-card">
  <div class="project-card-header">
    <span class="project-category">Web Application</span>
    <div class="project-links">
      <a href="YOUR_GITHUB_REPO_URL" target="_blank" class="project-icon-link">...</a>
      <a href="YOUR_LIVE_DEMO_URL" target="_blank" class="project-icon-link">...</a>
    </div>
  </div>
  <h3 class="project-title">
    <a href="YOUR_LIVE_DEMO_URL">Your Project Name</a>
  </h3>
  <p class="project-description">
    Describe what problem this project solves and how it functions.
  </p>
  <div class="project-highlights">
    <strong>Key Learnings:</strong> State management, API integration, etc.
  </div>
  <ul class="project-tags">
    <li class="tag">JavaScript</li>
    <li class="tag">REST API</li>
  </ul>
</article>
```

### 2. Updating Your Contact Details & Links
In `index.html`:
- Replace `oscar.gegantoni@example.com` with your actual email in the Hero, Resume, and Contact sections.
- Replace `github.com/your-username` and `linkedin.com/in/your-username` with your real profile links.

### 3. Updating the Resume / Education
Under the `<section id="resume">` section:
- Modify or add timeline entries inside `<div class="resume-block">`.
- When you click **"Print / Save PDF"**, your browser will automatically generate a clean, one or two-page resume format.

---

## 🌐 Free Deployment Options

### Option 1: GitHub Pages (Recommended for Developers)
1. Initialize a git repository and push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. In your GitHub repository, go to **Settings > Pages**.
3. Under **Branch**, select `main` and root (`/`), then click **Save**.
4. Your website will be live at `https://YOUR_USERNAME.github.io/portfolio/` in under 1 minute!

### Option 2: Vercel or Netlify
- Drag and drop the `Oscar_web` folder into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com) for instant deployment with a free custom URL and SSL certificate.
