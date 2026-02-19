import { ArrowLeft, CreditCard, Wallet, Building, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useApp } from '../App'

export default function CheckoutPage() {
  const { setCurrentPage, cart, cartTotal } = useApp()
  const [paymentMethod, setPaymentMethod] = useState('card')

  const deliveryFee = cartTotal >= 500 ? 0 : 40
  const finalTotal = cartTotal + deliveryFee

  return (
    <div>
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setCurrentPage('cart')}
          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Cart</span>
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Delivery Address</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="sm:col-span-2 px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="House No, Building Name"
                  className="sm:col-span-2 px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Road Name, Area, Colony"
                  className="sm:col-span-2 px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: 'card', icon: CreditCard, name: 'Credit/Debit Card' },
                  { id: 'upi', icon: Wallet, name: 'UPI Payment' },
                  { id: 'cod', icon: Building, name: 'Cash on Delivery' }
                ].map(method => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${paymentMethod === method.id
                        ? 'border-emerald-500 bg-emerald-50'
                        : 'border-gray-200 hover:border-emerald-300'
                      }`}
                  >
                    <method.icon className="w-6 h-6 text-gray-700" />
                    <span className="font-medium text-gray-900">{method.name}</span>
                    {paymentMethod === method.id && (
                      <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                    )}
                  </button>
                ))}
              </div>

              {paymentMethod === 'card' && (
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="px-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-emerald-300 outline-none transition-all"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border-2 border-gray-100 p-6 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

              <div className="space-y-3 max-h-60 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{item.image}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm truncate">{item.name}</div>
                      <div className="text-xs text-gray-500">
                        {item.quantity} × ₹{item.price}
                      </div>
                    </div>
                    <div className="font-semibold text-gray-900 text-sm">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-semibold">FREE</span>
                  ) : (
                    <span className="font-semibold">₹{deliveryFee}</span>
                  )}
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold text-gray-900 pt-6 border-t border-gray-200">
                <span>Total</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Place Order
              </button>

              <p className="text-xs text-gray-500 text-center">
                By placing order, you agree to our Terms & Conditions
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
