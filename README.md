# Dunaway Heating & Cooling Website

A fully responsive, production-ready marketing website for Dunaway Heating & Cooling, a local HVAC company serving Harrisville, Mississippi and surrounding areas.

## Features

- **Patriotic Design Theme**: Red, white, and blue color scheme inspired by the American flag
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Single-Page Application**: Smooth scrolling navigation with anchor links
- **Modern UI/UX**: Clean, professional design with subtle animations and hover effects
- **SEO Optimized**: Structured data (JSON-LD) for local business, meta tags, and semantic HTML
- **Accessibility**: WCAG compliant with proper heading hierarchy and color contrast

## Sections

1. **Header & Navigation** - Sticky navigation with mobile menu
2. **Hero Section** - Eye-catching introduction with CTAs
3. **Services Overview** - Comprehensive service offerings with icons
4. **Maintenance Plans** - Tiered service plan options
5. **Why Choose Us** - Trust factors and company values
6. **Service Area** - Geographic coverage information
7. **Project Gallery** - Portfolio of completed work
8. **Testimonials** - Customer reviews and feedback
9. **About Us** - Company story and values
10. **Contact Form** - Multi-field contact form with validation
11. **Footer** - Complete navigation and contact information

## Technology Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Google Fonts**: Montserrat (headings) and Open Sans (body)

## Color Palette

- Primary Navy: `#002b5c`
- Accent Red: `#e31c3d`
- White backgrounds for contrast

## Logo Placeholder

The header currently displays a placeholder logo (letter "D" in a circle). To add your actual logo:
1. Place your logo file in the `/public` folder
2. Update the logo section in `src/components/Header.tsx`
3. Replace the placeholder div with an `<img>` tag pointing to your logo

## Contact Information

- **Phone**: (601) 382-1810
- **Email**: Dunawayhvac@gmail.com
- **Location**: Harrisville, MS
- **Established**: 2015

## Development

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Notes

- All phone and email links are functional (click-to-call, mailto)
- Contact form includes client-side validation
- Smooth scrolling implemented for all navigation
- 24/7 emergency service messaging prominently displayed
