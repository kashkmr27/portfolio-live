# Portfolio Website Template

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This template is designed for developers and designers to showcase their work professionally.

## Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive across all devices
- **SEO Optimized**: Built-in SEO features and structured data
- **Fast Performance**: Optimized for speed and performance
- **Accessible**: WCAG compliant accessibility features
- **Animations**: Smooth animations with Framer Motion
- **Contact Integration**: Ready for Calendly integration
- **Trust Badges**: Professional trust indicators
- **Case Studies**: Dedicated case study pages
- **Services Pages**: Individual service detail pages

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: JavaScript (JSX)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel Ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-website/
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── portfolio/
│   │   ├── testimonial/
│   │   └── ...
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   ├── Portfolio/
│   │   │   ├── Skills/
│   │   │   └── ...
│   │   ├── constants/
│   │   ├── about/
│   │   ├── services/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   └── ...
│   └── ...
├── package.json
├── tailwind.config.js
└── README.md
```

## Customization

### 1. Personal Information
Update your personal information in:
- `src/app/layout.jsx` - Meta tags and structured data
- `src/app/components/Hero.jsx` - Hero section content
- `src/app/constants/index.js` - Navigation links

### 2. Colors and Styling
Customize the design system in:
- `src/app/globals.css` - CSS variables and design tokens
- `tailwind.config.js` - Tailwind configuration

### 3. Content
Update content in:
- `src/app/components/` - All component files
- `src/app/about/page.jsx` - About page
- `src/app/services/` - Service pages
- `src/app/case-studies/` - Case study pages

### 4. Images
Replace images in:
- `public/images/` - All image assets
- Update image paths in components

## Key Components

### Header Component
- Responsive navigation
- Mobile menu
- Services dropdown
- Active link highlighting

### Hero Section
- Professional introduction
- Call-to-action buttons
- Floating animations
- Trust indicators

### Trust Badge System
- Professional credibility indicators
- Tooltip explanations
- Modal details
- Grid layout

### Portfolio Section
- Featured projects
- Project cards
- Technology tags
- Links to full portfolio

### Testimonials
- Client testimonials
- Star ratings
- Profile images
- Responsive grid

### Contact Section
- Contact information
- Call-to-action
- Professional presentation

## SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Canonical URLs

## Performance Optimizations

- Next.js Image optimization
- Code splitting
- Lazy loading
- Bundle optimization
- CSS optimization

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## Environment Variables

Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue on GitHub
- Contact: hello@akashbuilds.com

## Credits

- Design System: Custom built
- Icons: Heroicons, Lucide
- Fonts: Poppins (Google Fonts)
- Animations: Framer Motion
