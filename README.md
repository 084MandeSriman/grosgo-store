# GRASGO - Fresh Grocery Store 🛒

A modern, aesthetic e-commerce grocery platform built with React, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Stunning Landing Page** - Dark theme with 3D animations, particle effects, and interactive elements
- **Enhanced Homepage** - Light theme with custom SVG illustrations and smooth animations
- **Complete Shopping Flow** - Products → Details → Cart → Checkout
- **Advanced Navbar** - Location selector, offers banner, wishlist, and account features
- **Custom Illustrations** - Hand-crafted SVG graphics for vegetables, fruits, and delivery
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Vite** - Lightning-fast build tool
- **Lucide React** - Beautiful icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🎯 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Enhanced navbar with location & offers
│   ├── Footer.tsx              # Professional footer
│   └── illustrations/          # Custom SVG illustrations
│       ├── VegetableBasket.tsx
│       ├── DeliveryTruck.tsx
│       └── FreshFruits.tsx
├── pages/
│   ├── LandingPage.tsx         # Dark themed entrance page
│   ├── HomePage.tsx            # Main shopping page
│   ├── ProductsPage.tsx        # Product listing
│   ├── ProductDetailPage.tsx   # Single product view
│   ├── CartPage.tsx            # Shopping cart
│   └── CheckoutPage.tsx        # Order completion
├── App.tsx                      # Main app with routing
└── index.css                    # Global styles

```

## 🎨 Color Palette

- **Primary**: Emerald (#10B981) & Teal (#14B8A6)
- **Dark Theme**: Navy (#0A0E27, #0F172A)
- **Light Theme**: White (#FFFFFF) with emerald accents
- **Accent**: Orange (#F97316) for CTAs

## 🔧 Key Components

### Landing Page
- 3D tilt effect with mouse tracking
- Particle field with 80+ animated stars
- Flying shopping carts
- Floating vegetables with glow effects
- Interactive main card with gradient borders

### Homepage
- Custom SVG illustrations
- Location-based delivery
- Offers banner
- Category showcase
- Feature highlights
- Product grid

### Shopping Features
- Add to cart with animations
- Quantity management
- Cart totals with delivery fees
- Multi-step checkout
- Order summary

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎭 Animation Features

- Framer Motion for smooth transitions
- Staggered entrance animations
- Hover scale effects
- Particle systems
- 3D transformations
- Gradient animations

## 🛠️ Customization

### Update Colors
Edit `src/index.css` and `tailwind.config.js`

### Add Products
Modify product data in `src/pages/ProductsPage.tsx`

### Change Illustrations
Create new SVG components in `src/components/illustrations/`

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ by the GRASGO team
