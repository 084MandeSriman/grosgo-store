import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27] min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8"
        >
          <h1 className="text-4xl font-bold text-emerald-400 mb-6">About Grosgo</h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Welcome to Grosgo Store – your one-stop destination for fresh groceries,
            organic vegetables, juicy fruits, and daily essentials delivered to your
            doorstep.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-3">🌿 Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To provide fresh, high-quality groceries at affordable prices while
            ensuring a seamless and fast online shopping experience.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-3">🚚 Fast Delivery</h2>
          <p className="text-gray-300 leading-relaxed">
            We ensure same-day delivery with carefully packed products to maintain
            freshness and quality.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-3">💚 Why Choose Us?</h2>

          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Farm fresh vegetables & fruits</li>
            <li>Best price guarantee</li>
            <li>Easy & secure checkout</li>
            <li>Fast home delivery</li>
            <li>24/7 customer support</li>
          </ul>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}