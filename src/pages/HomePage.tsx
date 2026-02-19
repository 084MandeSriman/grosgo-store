import { ArrowRight, Truck, ShieldCheck, Clock, Leaf, Star, TrendingUp, Sparkles, ShoppingCart, Zap, Award, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useApp } from '../App'

// Animated background particles
const ParticleField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-r from-emerald-300/40 to-teal-300/20 rounded-full blur-sm"
        style={{
          width: Math.random() * 6 + 2 + 'px',
          height: Math.random() * 6 + 2 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 2, 1],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>
)

// Floating vegetable emojis
const FloatingVeggies = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {['🥬', '🍎', '🥕', '🍇', '🥦', '🍅'].map((emoji, i) => (
      <motion.div
        key={i}
        className="absolute text-4xl opacity-10"
        style={{
          left: `${10 + i * 15}%`,
          top: `${20 + (i % 2) * 40}%`,
          filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))'
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, Math.sin(i) * 20, 0],
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          delay: i * 0.5
        }}
      >
        {emoji}
      </motion.div>
    ))}
  </div>
)

export default function HomePage() {
  const { setCurrentPage } = useApp()

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27]">
      <Header />

      {/* Hero Section - Enhanced with dark theme */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <ParticleField />
        <FloatingVeggies />

        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 text-emerald-300 text-sm font-semibold shadow-lg shadow-emerald-500/10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Leaf className="w-4 h-4" />
                <span>100% Fresh & Organic</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>

              <motion.h1
                className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Fresh Groceries
                </span>
                <br />
                <span className="text-white">Delivered Fast</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Get farm-fresh vegetables, fruits, and daily essentials delivered to your doorstep in 30 minutes or less.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  onClick={() => setCurrentPage('products')}
                  className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-emerald-500/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Shopping
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-emerald-400/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 hover:border-emerald-400/50 transition-all shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Offers
                </motion.button>
              </motion.div>

              {/* Stats with enhanced styling */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { value: '10K+', label: 'Products', icon: ShoppingCart },
                  { value: '50K+', label: 'Customers', icon: Award },
                  { value: '4.8★', label: 'Rating', icon: Star }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-4 text-center">
                      <stat.icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-emerald-400">{stat.value}</div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Enhanced Phone Mockup */}
            <motion.div
              className="relative lg:h-[700px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-[4rem] blur-3xl" />

              {/* Phone mockup */}
              <motion.div
                className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[3rem] p-8 shadow-2xl border-8 border-emerald-900/50"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-emerald-900/50 rounded-full" />

                {/* Content */}
                <div className="relative bg-white rounded-[2.5rem] p-6 h-full overflow-hidden">
                  {/* Animated vegetables */}
                  <motion.div
                    className="text-[8rem] absolute"
                    style={{ top: '20%', left: '10%' }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🥕
                  </motion.div>
                  <motion.div
                    className="text-[6rem] absolute"
                    style={{ top: '15%', right: '15%' }}
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  >
                    🍅
                  </motion.div>
                  <motion.div
                    className="text-[5rem] absolute"
                    style={{ bottom: '30%', left: '50%', transform: 'translateX(-50%)' }}
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  >
                    🥬
                  </motion.div>

                  {/* Sparkle effects */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 30}%`
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-emerald-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -left-8 top-1/4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
                animate={{
                  x: [-10, 10, -10],
                  rotate: [-5, 5, -5]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-2xl">50% OFF</span>
              </motion.div>

              <motion.div
                className="absolute -right-8 top-2/3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
                animate={{
                  x: [10, -10, 10],
                  rotate: [5, -5, 5]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <Zap className="w-6 h-6 inline mr-2" />
                <span>Fast Delivery</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features - Dark themed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A0E27] to-[#0F172A] relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(16, 185, 129) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">GRASGO</span>
            </h2>
            <p className="text-xl text-gray-400">Experience the future of grocery shopping</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: '30 Min Delivery', desc: 'Lightning fast delivery', color: 'emerald', gradient: 'from-emerald-500 to-teal-500' },
              { icon: ShieldCheck, title: 'Quality Guaranteed', desc: 'Fresh & certified products', color: 'teal', gradient: 'from-teal-500 to-cyan-500' },
              { icon: Clock, title: '24/7 Service', desc: 'Shop anytime, anywhere', color: 'blue', gradient: 'from-blue-500 to-indigo-500' },
              { icon: Star, title: 'Best Prices', desc: 'Unbeatable offers daily', color: 'amber', gradient: 'from-amber-500 to-orange-500' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                <div className="relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-8 h-full group-hover:border-emerald-400/50 transition-all">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    animate={{
                      boxShadow: [
                        '0 10px 30px rgba(16,185,129,0.3)',
                        '0 20px 40px rgba(16,185,129,0.5)',
                        '0 10px 30px rgba(16,185,129,0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ParticleField />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-400">Explore our wide range of fresh products</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Vegetables', emoji: '🥬', gradient: 'from-green-500 to-emerald-500' },
              { name: 'Fruits', emoji: '🍎', gradient: 'from-red-500 to-pink-500' },
              { name: 'Dairy', emoji: '🥛', gradient: 'from-blue-500 to-cyan-500' },
              { name: 'Bakery', emoji: '🍞', gradient: 'from-amber-500 to-orange-500' },
              { name: 'Snacks', emoji: '🍪', gradient: 'from-purple-500 to-pink-500' },
              { name: 'Beverages', emoji: '🧃', gradient: 'from-indigo-500 to-purple-500' }
            ].map((cat, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentPage('products')}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity`} />
                <div className="relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-3xl p-8 group-hover:bg-white/10 group-hover:border-emerald-400/50 transition-all">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {cat.emoji}
                  </motion.div>
                  <h3 className="font-bold text-white text-lg">{cat.name}</h3>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 rounded-[3rem] p-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: Math.random() * 100 + 50 + 'px',
                    height: Math.random() * 100 + 50 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                  }}
                  animate={{
                    x: [0, Math.random() * 50 - 25, 0],
                    y: [0, Math.random() * 50 - 25, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <TrendingUp className="w-20 h-20 text-white mx-auto mb-8 opacity-90 drop-shadow-lg" />
              </motion.div>

              <h2 className="text-5xl font-bold text-white mb-6">Get 50% Off Your First Order!</h2>
              <p className="text-2xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                Join thousands of happy customers and enjoy fresh groceries at unbeatable prices.
              </p>

              <motion.button
                onClick={() => setCurrentPage('products')}
                className="group relative px-12 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Shop Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
