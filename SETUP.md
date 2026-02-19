# GRASGO Setup Guide 🚀

Complete step-by-step guide to get GRASGO running on your machine.

## Prerequisites

Before starting, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)

## Installation Steps

### 1. Extract the Project

```bash
# Navigate to the project folder
cd grasgo-grocery-store
```

### 2. Install Dependencies

```bash
# Using npm
npm install

# OR using yarn
yarn install
```

This will install all required packages:
- React & React DOM
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- Vite

### 3. Start Development Server

```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

The app will open at `http://localhost:5173`

### 4. Build for Production

```bash
# Using npm
npm run build

# OR using yarn
yarn build
```

Build output will be in the `dist/` folder.

## Project Structure Explained

```
grasgo-grocery-store/
│
├── public/                 # Static assets
│
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.tsx           # Navbar with location & offers
│   │   ├── Footer.tsx           # Footer section
│   │   └── illustrations/       # Custom SVG illustrations
│   │       ├── VegetableBasket.tsx
│   │       ├── DeliveryTruck.tsx
│   │       └── FreshFruits.tsx
│   │
│   ├── pages/             # Main application pages
│   │   ├── LandingPage.tsx      # Dark themed entrance
│   │   ├── HomePage.tsx         # Main shopping page
│   │   ├── ProductsPage.tsx     # Product listing
│   │   ├── ProductDetailPage.tsx
│   │   ├── CartPage.tsx
│   │   └── CheckoutPage.tsx
│   │
│   ├── App.tsx            # Main app component with state
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles & CSS variables
│
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite build configuration
```

## Key Features Implementation

### 1. Landing Page
**File**: `src/pages/LandingPage.tsx`

Features:
- Dark theme with particle effects
- 3D tilt interaction
- Animated shopping cart icon
- Floating vegetables
- Glassmorphism navbar

### 2. Homepage
**File**: `src/pages/HomePage.tsx`

Features:
- Light theme with emerald accents
- Enhanced navbar with location
- Custom SVG illustrations
- Category showcase
- Animated features

### 3. Navigation System
**File**: `src/App.tsx`

State management:
- Current page routing
- Selected product tracking
- Shopping cart management
- Cart total calculation

## Customization Guide

### Change Colors

Edit `src/index.css`:

```css
:root {
  --color-primary: 16 185 129;    /* Emerald */
  --color-secondary: 20 184 166;  /* Teal */
}
```

### Update Product Data

Edit `src/pages/ProductsPage.tsx`:

```typescript
const PRODUCTS = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: 45,
    image: '🍅',
    category: 'Vegetables',
    // ... other fields
  },
  // Add more products
]
```

### Modify Navbar Location

Edit `src/components/Header.tsx`:

```typescript
<button className="flex items-center gap-2...">
  <MapPin className="w-4 h-4" />
  <span>Deliver to Your City</span>
</button>
```

### Add New Illustrations

Create new file in `src/components/illustrations/`:

```typescript
export default function MyIllustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Your SVG paths */}
    </svg>
  )
}
```

## Troubleshooting

### Port Already in Use

If port 5173 is busy:

```bash
# Kill the process
npx kill-port 5173

# Or specify a different port
npm run dev -- --port 3000
```

### Build Errors

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure TypeScript version matches:

```bash
npm install typescript@~5.6.0
```

## Performance Tips

1. **Code Splitting**: Pages are already separated for optimal loading
2. **Image Optimization**: Use emoji icons or optimized SVGs
3. **Animation Performance**: Framer Motion uses GPU acceleration
4. **Production Build**: Always build before deployment

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build first
npm run build

# Drag & drop the dist/ folder to Netlify
```

## Environment Variables

Create `.env` file for API keys (if needed):

```env
VITE_API_URL=https://api.example.com
VITE_STRIPE_KEY=your_stripe_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Next Steps

After setup:

1. ✅ Test all pages (landing → home → products → cart → checkout)
2. ✅ Customize colors and branding
3. ✅ Add your product data
4. ✅ Test responsive design on mobile
5. ✅ Build and deploy

---

Need help? Check the README.md or open an issue on GitHub!
