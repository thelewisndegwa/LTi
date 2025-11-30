# LT

A single-page React site built with Vite + React, showcasing your love story together.

## Features

- ✨ Beautiful, romantic design with soft colors and smooth animations
- 📱 Fully responsive and mobile-first
- 🌓 Light/Dark theme toggle
- 🖼️ Photo gallery with modal view
- 💌 Love notes section
- ⏱️ Timeline of your story together
- 🎯 Smooth scrolling navigation

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images:
   - Place your hero image at: `public/images/hero.jpg`
   - Add gallery photos to: `public/images/gallery/` (photo1.jpg, photo2.jpg, etc.)
   - Update the photo paths in `src/data.js` if needed

3. Customize your content:
   - Edit `src/data.js` to update story events, photos, and notes
   - Modify component content in `src/components/` as desired

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
├── public/
│   └── images/
│       ├── hero.jpg (your hero image)
│       └── gallery/ (your gallery photos)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── StoryTimeline.jsx
│   │   ├── Gallery.jsx
│   │   ├── PhotoModal.jsx
│   │   └── Notes.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── data.js (your story data)
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- **Colors**: Edit CSS variables in `src/index.css` (`:root` and `.app.dark`)
- **Content**: Edit `src/data.js` for story events, photos, and notes
- **Styling**: Modify `src/App.css` for component styles

## Tech Stack

- React 18
- Vite 5
- Plain CSS (no frameworks)

Enjoy building your romantic page! 💛

