
# Maintenance & Error Pages — Professional UI Demo

This repository is a compact, professional demo of two public-facing pages commonly used during outages: a polished Maintenance page and an Error 503 page. It uses React + Vite and demonstrates modern UI patterns: clean typography, accessible components, smooth animations, and responsive layouts.

Key features
- Full-screen, centered layouts with a dark gradient backdrop and neon accents
- 5-second loader before main content
- Live countdown initialized to 5 years with Years/Days/Hours/Minutes/Seconds
- Error 503 page with animated warning icon and action buttons (Try Again / Go Home)
- Mode toggle (persisted in localStorage) to switch quickly between Maintenance and Error
- Google Font (Poppins), responsive styles, and subtle animations and glow effects

Behavior notes
- Typing-triggered Error feedback: typing any key will show a brief Error modal (enabled by default). This is intended as a demo/feedback mechanism. If you want it disabled or only active inside an input, tell me and I'll change it.

Quick start

Install dependencies:

```bash
npm install
```

Start dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Open the address Vite prints (default http://localhost:5173).

Notes
- Toggle between modes using the pill control at top-right. The selection is saved to localStorage.
- If you need exact calendar-year accuracy for the 5-year countdown (including leap days), I can update the countdown calculation to use date math that preserves actual anniversaries.

# Server-