import { ArrowLeft, Star, Plus, Minus, Heart, Share2, Truck, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useApp } from '../App'

export default function ProductDetailPage() {
  const { setCurrentPage, selectedProduct, addToCart } = useApp()
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

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setCurrentPage('products')}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Products</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 flex items-center justify-center relative">
            <span className="text-[15rem] animate-pulse">{selectedProduct.image}</span>
            {selectedProduct.discount && (
              <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg">
                {selectedProduct.discount}% OFF
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium mb-3">
                {selectedProduct.category}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h1>
              <p className="text-lg text-gray-600">{selectedProduct.unit}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(selectedProduct.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-gray-300'
                        }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{selectedProduct.rating}</span>
              </div>
              <span className="text-gray-600">({selectedProduct.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-end gap-4 pb-6 border-b border-gray-200">
              <div className="text-5xl font-bold text-gray-900">₹{selectedProduct.price}</div>
              {selectedProduct.originalPrice && (
                <>
                  <div className="text-2xl text-gray-400 line-through mb-2">
                    ₹{selectedProduct.originalPrice}
                  </div>
                  <div className="text-lg text-emerald-600 font-semibold mb-2">
                    Save ₹{selectedProduct.originalPrice - selectedProduct.price}
                  </div>
                </>
              )}
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-xl p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-5 h-5 text-gray-700" />
                  </button>
                  <span className="text-xl font-semibold text-gray-900 w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <Plus className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
                <div className="text-lg text-gray-600">
                  Total: <span className="font-bold text-gray-900">₹{(selectedProduct.price * quantity).toFixed(2)}</span>
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
              <button className="w-14 h-14 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center hover:border-red-300 hover:bg-red-50 transition-all">
                <Heart className="w-6 h-6 text-gray-700" />
              </button>
              <button className="w-14 h-14 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center hover:border-emerald-300 hover:bg-emerald-50 transition-all">
                <Share2 className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-emerald-50 rounded-xl">
                <Truck className="w-8 h-8 text-emerald-600 mb-2" />
                <div className="font-semibold text-gray-900">Fast Delivery</div>
                <div className="text-sm text-gray-600">Delivered in 30 mins</div>
              </div>
              <div className="p-4 bg-teal-50 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-teal-600 mb-2" />
                <div className="font-semibold text-gray-900">Quality Assured</div>
                <div className="text-sm text-gray-600">100% fresh guarantee</div>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details</h3>
              <p className="text-gray-600 leading-relaxed">
                Fresh, hand-picked {selectedProduct.name.toLowerCase()} sourced directly from local farms.
                Rich in nutrients and delivered to maintain maximum freshness. Perfect for your daily cooking needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
