import { motion } from 'framer-motion'
import { useApp } from '../App'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowLeft, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CategoryPage() {
  const { currentCategory, setCurrentPage, setSelectedProduct, setRelatedProducts, fullProductList } = useApp()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (fullProductList.length > 0) {
      setLoading(false)
    }
  }, [fullProductList])

  if (!currentCategory) {
    setCurrentPage('home')
    return null
  }

  // Filter products by category
  const categoryProducts = fullProductList.filter(p => p.category === currentCategory)

  // Get 4 random related products from the same category (for when a product is clicked)
  const getRelatedForProduct = (productId: string) => {
    return categoryProducts
      .filter(p => p.id !== productId)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
  }

  // Category description mapping for user's specific categories
  const categoryDescriptions: Record<string, string> = {
    'New Arrivals': 'Discover our latest additions! Fresh from the farms and just arrived. Be the first to try these new products, carefully selected for quality and taste.',
    'Rice Bag': 'Premium quality rice bags from the finest fields. Choose from a variety of rice types – Basmati, Sonamasoori, Sona Masoori, and more – perfect for daily meals and special occasions.',
    'Vegetables': 'Farm-fresh vegetables picked at peak ripeness. From leafy greens to root vegetables, we bring the garden to your kitchen. Naturally grown and packed with nutrients.',
    'Idly Dosa Batter Box - Readymade': 'Traditional South Indian breakfast made easy. Our ready‑made idly and dosa batter is fermented to perfection, ensuring soft idlis and crispy dosas every time. Just open and cook!',
    'Indian Fruits': 'Exotic and seasonal Indian fruits, sourced directly from orchards. Enjoy the sweetness of mangoes, bananas, guavas, and more – rich in flavor and vitamins.',
    'Flours and Pulses': 'Essential flours and pulses for everyday cooking. We offer a wide range of flours (wheat, chickpea, rice) and pulses (toor dal, chana dal, urad dal) that are hygienically processed and packed.',
  }

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27] min-h-screen flex items-center justify-center">
        <div className="text-emerald-400 text-2xl animate-pulse">Loading category...</div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27] min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <button
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </button>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">{currentCategory}</h1>
          <p className="text-gray-300 max-w-3xl">
            {categoryDescriptions[currentCategory] || `Explore our range of ${currentCategory.toLowerCase()} products.`}
          </p>
        </div>

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <p className="text-gray-400 text-center py-12">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                onClick={() => {
                  setSelectedProduct(product)
                  setRelatedProducts(getRelatedForProduct(product.id))
                  setCurrentPage('product-detail')
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-5 hover:bg-white/10 hover:border-emerald-400/40 transition-all cursor-pointer"
              >
                <div className="relative w-full h-40 mb-4 bg-gradient-to-br from-emerald-900/40 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                  <span className="text-6xl filter drop-shadow-lg">{product.image}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-semibold text-white text-lg leading-tight">{product.name}</h3>
                <p className="text-sm text-emerald-400 mt-1">{product.brand || 'GROSGO'}</p>
                <div className="mt-3">
                  <span className="text-white font-bold text-xl">₹{product.price}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      // Add to cart logic – you can integrate your cart here
                      console.log('Add to cart', product.name)
                    }}
                    className="flex-1 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      // Wishlist logic
                      console.log('Add to wishlist', product.name)
                    }}
                    className="py-2 px-3 bg-white/5 border border-emerald-400/20 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-gray-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}