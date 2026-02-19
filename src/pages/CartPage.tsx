import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useApp } from '../App'

export default function CartPage() {
  const { setCurrentPage, cart, updateQuantity, removeFromCart, cartTotal } = useApp()

  const deliveryFee = cartTotal > 0 ? (cartTotal >= 500 ? 0 : 40) : 0
  const savings = cart.reduce((sum, item) => {
    const saved = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0
    return sum + saved
  }, 0)
  const finalTotal = cartTotal + deliveryFee

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>

          <div className="text-center py-20">
            <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-lg text-gray-600 mb-8">Add some fresh products to get started!</p>
            <button
              onClick={() => setCurrentPage('products')}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Start Shopping</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setCurrentPage('products')}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Continue Shopping</span>
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border-2 border-gray-100 p-6 hover:border-emerald-200 transition-all"
              >
                <div className="flex gap-6">
                  {/* Image */}
                  <div className="w-28 h-28 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl">{item.image}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.unit}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 rounded-xl p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg hover:bg-white flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-700" />
                        </button>
                        <span className="text-lg font-semibold text-gray-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg hover:bg-white flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                        {item.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">
                            ₹{(item.originalPrice * item.quantity).toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border-2 border-gray-100 p-6 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Order Summary</h2>

              <div className="space-y-3 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span className="font-semibold">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-semibold">FREE</span>
                  ) : (
                    <span className="font-semibold">₹{deliveryFee}</span>
                  )}
                </div>
                {savings > 0 && (
                  <div className="flex justify-between text-emerald-600">
                    <span>You Save</span>
                    <span className="font-semibold">-₹{savings.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>

              {cartTotal < 500 && (
                <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-xl text-sm text-amber-800">
                  Add ₹{(500 - cartTotal).toFixed(2)} more to get FREE delivery!
                </div>
              )}

              <button
                onClick={() => setCurrentPage('checkout')}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span>100% Secure payments</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span>Fresh quality guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span>Easy returns & refunds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
