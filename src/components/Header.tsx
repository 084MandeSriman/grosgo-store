import { ShoppingCart, Search, User, Menu, Heart } from 'lucide-react'
import { useApp } from '../App'

export default function Header() {
  const { setCurrentPage, cart } = useApp()

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-3">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 3.2M17 13l1.6 3.2M9 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                GRASGO
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Fresh & Fast</p>
            </div>
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for fresh vegetables, fruits, groceries..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-300 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium">Wishlist</span>
            </button>

            <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
              <User className="w-5 h-5 text-gray-700" />
              <span className="text-sm font-medium">Account</span>
            </button>

            <button
              onClick={() => setCurrentPage('cart')}
              className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="sm:hidden p-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-300 focus:outline-none transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
