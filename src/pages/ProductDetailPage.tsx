import { ArrowLeft, Star, Plus, Minus, Heart, Share2, Truck, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useApp } from '../App'

export default function ProductDetailPage() {
  const { setCurrentPage, selectedProduct, addToCart, relatedProducts, setSelectedProduct, setRelatedProducts, sectionProducts } = useApp()
  const [quantity, setQuantity] = useState(1)

  if (!selectedProduct) {
    setCurrentPage('products')
    return null
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(selectedProduct)
    }
    setCurrentPage('cart')
  }

 const handleRelatedClick = (product: typeof selectedProduct) => {
  if (product) {
    const newRelated = sectionProducts.filter(p => p.id !== product.id).slice(0, 4)
    setSelectedProduct(product)
    setRelatedProducts(newRelated)
    setQuantity(1)
  }
}
  return (
    <div className="bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27] min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setCurrentPage('products')}
          className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Products</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-gradient-to-br from-emerald-900/40 to-gray-800 rounded-3xl p-12 flex items-center justify-center relative border border-emerald-400/20">
            <span className="text-[15rem] filter drop-shadow-lg">{selectedProduct.image}</span>
            {selectedProduct.discount && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg">
                {selectedProduct.discount}% OFF
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6 text-white">
            <div>
              <div className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-lg text-sm font-medium mb-3 border border-emerald-400/30">
                {selectedProduct.category}
              </div>
              <h1 className="text-4xl font-bold text-white mb-2">{selectedProduct.name}</h1>
              <p className="text-lg text-gray-400">{selectedProduct.unit}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(selectedProduct.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-white">{selectedProduct.rating}</span>
              </div>
              <span className="text-gray-400">({selectedProduct.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-4 pb-6 border-b border-gray-700">
              <div className="text-5xl font-bold text-white">₹{selectedProduct.price}</div>
              {selectedProduct.originalPrice && (
                <>
                  <div className="text-2xl text-gray-500 line-through mb-2">₹{selectedProduct.originalPrice}</div>
                  <div className="text-lg text-emerald-400 font-semibold mb-2">
                    Save ₹{selectedProduct.originalPrice - selectedProduct.price}
                  </div>
                </>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-emerald-400/20 rounded-xl p-2 backdrop-blur-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-5 h-5 text-white" />
                  </button>
                  <span className="text-xl font-semibold text-white w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5 text-white" />
                  </button>
                </div>
                <div className="text-lg text-gray-300">
                  Total: <span className="font-bold text-white">₹{(selectedProduct.price * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Add to Cart
              </button>
              <button className="w-14 h-14 bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl flex items-center justify-center hover:border-red-400/40 hover:bg-red-500/10 transition-all">
                <Heart className="w-6 h-6 text-gray-300" />
              </button>
              <button className="w-14 h-14 bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl flex items-center justify-center hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all">
                <Share2 className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-emerald-500/10 border border-emerald-400/20 rounded-xl backdrop-blur-sm">
                <Truck className="w-8 h-8 text-emerald-400 mb-2" />
                <div className="font-semibold text-white">Fast Delivery</div>
                <div className="text-sm text-gray-400">Delivered in 30 mins</div>
              </div>
              <div className="p-4 bg-teal-500/10 border border-teal-400/20 rounded-xl backdrop-blur-sm">
                <ShieldCheck className="w-8 h-8 text-teal-400 mb-2" />
                <div className="font-semibold text-white">Quality Assured</div>
                <div className="text-sm text-gray-400">100% fresh guarantee</div>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-3">Product Details</h3>
              <p className="text-gray-300 leading-relaxed">
                Fresh, hand-picked {selectedProduct.name.toLowerCase()} sourced directly from local farms. Rich in
                nutrients and delivered to maintain maximum freshness. Perfect for your daily cooking needs.
              </p>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => handleRelatedClick(product)}
                  className="group relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-4 hover:bg-white/10 hover:border-emerald-400/40 transition-all cursor-pointer"
                >
                  <div className="relative w-full h-32 mb-3 bg-gradient-to-br from-emerald-900/40 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                    <span className="text-5xl filter drop-shadow-lg">{product.image}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-semibold text-white text-sm leading-tight truncate">{product.name}</h3>
                  <p className="text-xs text-emerald-400 mt-1">GROSGO</p>
                  <div className="mt-2">
                    <span className="text-white font-bold text-base">₹{product.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}