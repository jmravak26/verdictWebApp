# Verdict Web App

Official website for **Verdict** — a certified assessment and valuation service based in Dalmatia, Croatia. The site presents the company's services, team, and partners, and is available in both Croatian and English.

## 🌐 Live Site

[https://verdictwebapp.web.app](https://verdictwebapp.web.app)

## 📁 Project Structure

```
verdictWebApp/
├── frontend_verdict/         # React frontend (Vite + TypeScript)
│   ├── public/
│   │   ├── documents/        # Downloadable PDFs (e.g. offer document)
│   │   ├── imagesLogo/       # Partner and company logos
│   │   ├── pictures/         # Profile and business card images
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   └── src/
│       ├── components/       # Page sections (Header, Hero, Services, About, Partners, Footer)
│       ├── contexts/         # LanguageContext (i18n - HR/EN)
│       ├── utils/            # Smooth scroll utility
│       ├── App.tsx
│       └── main.tsx
├── .github/workflows/        # GitHub Actions for Firebase deployment
└── README.md
```

## 🛠️ Technology Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Firebase Hosting

## 📄 Page Sections

| Section | Description |
|---|---|
| Header | Fixed navigation with scroll-aware color transition, language switcher (HR/EN), mobile menu |
| Hero | Intro with profile picture, animated name/motto overlay, CTA buttons |
| Services | 5 service cards — vehicle valuation, value difference, damage assessment, machinery, property |
| About | Company info, core values, stats (50+ projects, 5+ years, 100% satisfied) |
| Partners | Current partners (Dekra, Grawe, Uniqa) and previous collaborations (Crosig, Generali, Sava, Triglav, Wiener) |
| Footer | Contact info, quick links, social links, animated heart easter egg, copyright |

## 🌍 Internationalisation

The app supports two languages managed via `LanguageContext`:

- **HR** — Croatian (default)
- **EN** — English

Language is toggled via the EN/HR switcher in the header and applies to all text across the site.

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
cd frontend_verdict
npm install
npm run dev
```

App runs on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 🚀 Deployment

Deployment is automated via **GitHub Actions** and **Firebase Hosting**:

- Push to `main` branch → triggers build and deploy automatically
- Build command: `npm run build`
- Firebase project: `verdictwebapp`
- Workflow config: `.github/workflows/firebase-hosting-merge.yml`

Pull request previews are also generated via `firebase-hosting-pull-request.yml`.