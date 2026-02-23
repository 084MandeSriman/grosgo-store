import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function BlogPage() {
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
          <h1 className="text-4xl font-bold text-emerald-400 mb-6">Grosgo Blog</h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Stay updated with the latest news, recipes, and tips from the world of fresh groceries.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
              <div className="text-4xl mb-3">🥗</div>
              <h3 className="text-white font-semibold text-lg mb-2">10 Healthy Salad Recipes</h3>
              <p className="text-gray-400 text-sm mb-3">Discover quick and nutritious salads using farm-fresh veggies.</p>
              <button className="text-emerald-400 text-sm hover:underline">Read more →</button>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
              <div className="text-4xl mb-3">🍚</div>
              <h3 className="text-white font-semibold text-lg mb-2">How to Choose the Right Rice</h3>
              <p className="text-gray-400 text-sm mb-3">A guide to different rice varieties and their best uses.</p>
              <button className="text-emerald-400 text-sm hover:underline">Read more →</button>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
              <div className="text-4xl mb-3">🥭</div>
              <h3 className="text-white font-semibold text-lg mb-2">Seasonal Fruits Guide</h3>
              <p className="text-gray-400 text-sm mb-3">What fruits are in season now and how to pick the best.</p>
              <button className="text-emerald-400 text-sm hover:underline">Read more →</button>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
              <div className="text-4xl mb-3">🧄</div>
              <h3 className="text-white font-semibold text-lg mb-2">5 Ways to Use Ginger-Garlic Paste</h3>
              <p className="text-gray-400 text-sm mb-3">Time-saving tips for everyday cooking.</p>
              <button className="text-emerald-400 text-sm hover:underline">Read more →</button>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
              <div className="text-4xl mb-3">🥞</div>
              <h3 className="text-white font-semibold text-lg mb-2">Perfect Dosa Batter Secrets</h3>
              <p className="text-gray-400 text-sm mb-3">Tips to get crispy dosas every time.</p>
              <button className="text-emerald-400 text-sm hover:underline">Read more →</button>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
              <div className="text-4xl mb-3">🌾</div>
              <h3 className="text-white font-semibold text-lg mb-2">Health Benefits of Millets</h3>
              <p className="text-gray-400 text-sm mb-3">Why you should include millets in your diet.</p>
              <button className="text-emerald-400 text-sm hover:underline">Read more →</button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}