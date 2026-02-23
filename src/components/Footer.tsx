import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { useApp } from '../App'

export default function Footer() {
  const { setCurrentPage, setCurrentCategory, setTargetSection } = useApp()

  // Quick links navigation
  const handleQuickLink = (link: string) => {
    switch(link) {
      case 'About Us':
        setCurrentPage('about')
        break
      case 'Shop':
        setCurrentPage('products')
        break
      case 'Blog':
        setCurrentPage('blog')
        break
      case 'Contact':
        setCurrentPage('contact')
        break
      case 'FAQs':
        setCurrentPage('faqs')
        break
      case 'Careers':
        setCurrentPage('careers')
        break
      default:
        setCurrentPage('home')
    }
  }

  // Category navigation
  const handleCategory = (category: string) => {
    setCurrentCategory(category)
    setCurrentPage('category')
  }

  // Section navigation (scroll to section on home page)
  const handleSection = (sectionId: string) => {
    setTargetSection(sectionId)
    setCurrentPage('home')
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-3">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 3.2M17 13l1.6 3.2M9 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">GRASGO</h3>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for fresh groceries delivered to your doorstep. Quality products, unbeatable prices.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  onClick={() => window.open('https://example.com', '_blank')}
                  className="w-10 h-10 rounded-xl bg-gray-800 hover:bg-emerald-600 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Shop', 'Blog', 'Contact', 'FAQs', 'Careers'].map(link => (
                <li key={link}>
                  <button
                    onClick={() => handleQuickLink(link)}
                    className="hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Categories</h4>
            <ul className="space-y-3">
              {[
                'New Arrivals',
                'Rice Bag',
                'Vegetables',
                'Idly Dosa Batter Box - Readymade',
                'Indian Fruits',
                'Flours and Pulses'
              ].map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategory(cat)}
                    className="hover:text-emerald-400 transition-colors text-sm"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>123 Market Street, Hyderabad, India</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>support@grasgo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Shop by Section links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">Shop by Section</h4>
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => handleSection('offers-section')}
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              50% Off
            </button>
            <button
              onClick={() => handleSection('best-sellers-section')}
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              Best Sellers
            </button>
            <button
              onClick={() => handleSection('combos-section')}
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              Special Combos
            </button>
            <button
              onClick={() => handleSection('products-section')}
              className="text-sm hover:text-emerald-400 transition-colors"
            >
              All Products
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 GRASGO. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button
              onClick={() => setCurrentPage('home')}
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setCurrentPage('home')}
              className="hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setCurrentPage('home')}
              className="hover:text-emerald-400 transition-colors"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}