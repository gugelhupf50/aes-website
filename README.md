# American Enterprise Solutions Website

Enterprise-grade OCR and PDF data extraction solutions website built with Next.js 14.

## Features

- **StoryBrand Framework** homepage design
- **Costco-inspired** color scheme (#E31837, #005DAA, #FFFFFF)
- **Protected download** page with GitHub integration
- **Privacy Policy** and **Terms & Conditions** pages
- **Vercel deployment** with auto-deploy from GitHub

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js
- **Deployment**: Vercel
- **Protected Downloads**: GitHub API integration

## Development Phases

1. **Foundation** (Days 1-2): Next.js setup, Tailwind CSS, basic structure
2. **Content** (Days 3-4): StoryBrand homepage, legal pages, components
3. **Authentication** (Days 5-6): NextAuth.js, protected routes, GitHub integration
4. **Deployment** (Day 7): Vercel setup, environment variables, domain connection

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Issue #1: Next.js Project Setup ✅

### Installation
```bash
npm install
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run test suite

### Features Implemented
- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS with Costco color scheme
- ✅ ESLint configuration
- ✅ Jest testing setup
- ✅ Basic app structure with layout and home page

### Testing
```bash
npm test                    # Run all tests
npm test -- issue-1         # Run issue-specific tests
npm run lint               # Code quality check
npm run build              # Production build
```

### Performance
- **First Load JS**: 87.2 kB
- **Build Time**: ~5 seconds
- **Test Coverage**: 100% of acceptance criteria

## Issue #2: Tailwind CSS Configuration ✅

### Features Implemented
- ✅ Tailwind CSS with PostCSS configuration
- ✅ Costco brand colors (#E31837 red, #005DAA blue)
- ✅ Extended color palette with grays
- ✅ Custom utility components (buttons, cards, containers)
- ✅ Responsive design utilities
- ✅ Animations (fade-in, slide-up)
- ✅ Custom shadows and gradients
- ✅ Typography scale for hero and section text

### Available Utilities
```css
/* Colors */
.text-costco-red, .bg-costco-red
.text-costco-blue, .bg-costco-blue

/* Components */
.btn-primary, .btn-secondary, .btn-outline
.card-costco
.container-costco
.text-hero, .text-section

/* Animations */
.animate-fade-in, .animate-slide-up
.hover-lift

/* Gradients */
.bg-costco-gradient
.text-gradient-costco
```

### Testing
```bash
npm test -- issue-2         # Run Tailwind CSS tests
```

## Environment Variables

```
ADMIN_USERNAME=your_admin_username
ADMIN_PASSWORD=your_admin_password
GITHUB_TOKEN=your_github_token
NEXTAUTH_SECRET=your_nextauth_secret
```

## Deployment

This project is configured for automatic deployment to Vercel from GitHub.