# Real IB - Elite IB Tutoring

A modern Next.js website for Real IB tutoring services. Features a marketing site with tutor profiles and an integrated booking system.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules with design tokens
- **API**: Next.js API Routes

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Landing page (/)
│   ├── home/
│   │   ├── layout.tsx       # Home layout with Header/Footer
│   │   └── page.tsx         # Main marketing page (/home)
│   ├── book/
│   │   ├── layout.tsx       # Booking layout
│   │   └── page.tsx         # Booking form (/book)
│   ├── tutors/
│   │   ├── layout.tsx       # Tutors layout
│   │   ├── leon/page.tsx    # Leon's profile
│   │   ├── william/page.tsx # William's profile
│   │   └── patrick/page.tsx # Patrick's profile
│   └── api/
│       ├── slots/route.ts   # GET available slots
│       └── bookings/route.ts # POST new booking
├── components/
│   ├── Header.tsx           # Shared navigation header
│   ├── Header.module.css
│   ├── Footer.tsx           # Shared footer
│   └── Footer.module.css
├── lib/
│   ├── storage.ts           # File-based data storage
│   └── email.ts             # Email notification utility
├── styles/
│   ├── tokens.css           # Design tokens (colors, spacing, etc.)
│   └── globals.css          # Global styles and CSS reset
└── types/
    └── index.ts             # TypeScript type definitions
public/
└── images/                   # Static images
data/                         # Booking data (auto-created, git-ignored)
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Features

### Marketing Site

- **Landing Page** (`/`): Animated entry page with logo
- **Home Page** (`/home`): Main marketing content with:
  - Hero section with animated background images
  - Value proposition cards
  - Tutor profiles with scores
  - Subject specializations grid
  - Pricing options (Casual tutoring & Term Accelerator)
  - Contact CTA

### Tutor Profiles

Individual pages for each tutor at `/tutors/[name]`:
- `/tutors/leon` - Leon Titmuss
- `/tutors/william` - William Hardy
- `/tutors/patrick` - Patrick Jones

### Booking System

- Subject selection
- Day preference with availability
- Time slot selection (capacity-managed)
- Student details form
- Booking confirmation

### API Endpoints

- `GET /api/slots` - Returns available time slots
- `POST /api/bookings` - Creates a new booking

## Design System

The site uses CSS custom properties (design tokens) defined in `src/styles/tokens.css`:

### Colors
- `--color-bg-primary`: White background
- `--color-bg-secondary`: Light gray background
- `--color-text-primary`: Black text
- `--color-text-secondary`: Gray text
- `--color-border`: Border color

### Typography
- `--font-sans`: Helvetica Neue, sans-serif
- `--font-mono`: Courier New, monospace
- Font sizes from `--font-size-xs` to `--font-size-5xl`

### Spacing
- Scale from `--space-1` (4px) to `--space-32` (128px)

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`)
- ARIA labels and roles
- Visible focus states
- Proper heading hierarchy
- Image alt text
- Keyboard navigation support

## Deployment

The app can be deployed to:

- **Vercel** (recommended): `npx vercel`
- **Netlify**: `npm run build` then deploy `.next` folder
- **Docker**: Create a Dockerfile with Next.js standalone output

### Environment Variables

For email notifications, configure:

```env
BOOKING_EMAIL=your-inbox@example.com
EMAIL_FROM=bookings@realib.com.au
```

See `src/lib/email.ts` for email service integration instructions.

## Development

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## License

Private - All rights reserved.

---

Built with ❤️ by the Real IB team