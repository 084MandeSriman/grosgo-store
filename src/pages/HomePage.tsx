import { ArrowRight, Leaf, Sparkles, ShoppingCart, Award, Star, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
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
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
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
          filter: 'drop-shadow(0 0 10px rgba(16, 185, 129, 0.3))',
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, Math.sin(i) * 20, 0],
          rotate: [0, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          delay: i * 0.5,
        }}
      >
        {emoji}
      </motion.div>
    ))}
  </div>
)

export default function HomePage() {
  const {
    setCurrentPage,
    setSelectedProduct,
    setRelatedProducts,
    setSectionProducts,
    fullProductList,
    setCurrentCategory,
    targetSection,
    setTargetSection,
  } = useApp()

  const [loading, setLoading] = useState(true)

  // Scroll to target section when home page loads
  useEffect(() => {
    if (targetSection) {
      const element = document.getElementById(targetSection)
      if (element) {
        const yOffset = -100 // offset for fixed header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
        setTargetSection(null)
      }
    }
  }, [targetSection, setTargetSection])

  // Set loading false once products arrive
  useEffect(() => {
    if (fullProductList.length > 0) {
      setLoading(false)
    }
  }, [fullProductList])

  // Helper to get 4 random related products (excluding current)
  const getRandomRelated = (currentId: string) => {
    return fullProductList
      .filter(p => p.id !== currentId)
      .sort(() => 0.5 - Math.random())
      .slice(0, 4)
  }

  // 🔥 FLAG-BASED FILTERING – NO HARDCODED IDs
  const offerProducts = fullProductList.filter(p => p.is_offer)
  const bestSellers = fullProductList.filter(p => p.is_best_seller)
  const combos = fullProductList.filter(p => p.is_combo)
  const productsList = fullProductList.filter(p => !p.is_offer && !p.is_best_seller && !p.is_combo)

  // Show loading spinner while products are being fetched
  if (loading) {
    return (
      <div className="bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27] min-h-screen flex items-center justify-center">
        <div className="text-emerald-400 text-2xl animate-pulse">Loading fresh groceries...</div>
      </div>
    )
  }

  return (
    <div className="overflow-x-hidden bg-gradient-to-br from-[#0A0E27] via-[#0F172A] to-[#0A0E27]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <ParticleField />
        <FloatingVeggies />
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
                transition={{ delay: 0.2, type: 'spring' }}
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
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
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

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { value: '10K+', label: 'Products', icon: ShoppingCart },
                  { value: '50K+', label: 'Customers', icon: Award },
                  { value: '4.8★', label: 'Rating', icon: Star },
                ].map((stat, i) => (
                  <motion.div key={i} className="relative group" whileHover={{ scale: 1.1 }}>
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

            {/* Right - Phone Mockup */}
            <motion.div
              className="relative lg:h-[700px]"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/20 rounded-[4rem] blur-3xl" />
              <motion.div
                className="relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[3rem] p-8 shadow-2xl border-8 border-emerald-900/50"
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-emerald-900/50 rounded-full" />
                <div className="relative bg-white rounded-[2.5rem] p-6 h-full overflow-hidden">
                  <motion.div
                    className="text-[8rem] absolute"
                    style={{ top: '20%', left: '10%' }}
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, 0],
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
                      rotate: [0, -10, 0],
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
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                  >
                    🥬
                  </motion.div>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 30}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-emerald-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                className="absolute -left-8 top-1/4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
                animate={{
                  x: [-10, 10, -10],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-2xl">50% OFF</span>
              </motion.div>
              <motion.div
                className="absolute -right-8 top-2/3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl"
                animate={{
                  x: [10, -10, 10],
                  rotate: [5, -5, 5],
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

      {/* Categories Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900">
        <ParticleField />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Shop by Category
              </span>
            </h2>
            <p className="text-xl text-gray-400">Farm-fresh selections for every craving</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: 'New Arrivals', emoji: '✨', gradient: 'from-amber-400 to-yellow-400', category: 'New Arrivals' },
              { name: 'Rice Bag', emoji: '🍚', gradient: 'from-emerald-400 to-teal-400', category: 'Rice Bag' },
              { name: 'Vegetables', emoji: '🥬', gradient: 'from-green-400 to-emerald-400', category: 'Vegetables' },
              { name: 'Idly Dosa Batter Box - Readymade', emoji: '🥞', gradient: 'from-purple-400 to-indigo-400', category: 'Idly Dosa Batter Box - Readymade' },
              { name: 'Indian Fruits', emoji: '🥭', gradient: 'from-orange-400 to-red-400', category: 'Indian Fruits' },
              { name: 'Flours and Pulses', emoji: '🌾', gradient: 'from-stone-400 to-yellow-600', category: 'Flours and Pulses' },
            ].map((cat, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setCurrentCategory(cat.category)
                  setCurrentPage('category')
                }}
                className="group relative flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-40 h-40 md:w-44 md:h-44 lg:w-40 lg:h-40 xl:w-44 xl:h-44 mb-4">
                  <div className="absolute inset-0 rounded-full bg-white/5 border-2 border-white/20" />
                  <div className="flex items-center justify-center w-full h-full text-7xl">{cat.emoji}</div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3
                  className="font-semibold text-white text-lg tracking-wide transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${cat.gradient
                      .replace('from-', '')
                      .replace('to-', '')
                      .replace(' ', ', ')})`,
                  }}
                >
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Browse
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* UP TO 50% OFF Section */}
      <section id="offers-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-emerald-400 font-semibold text-lg">LIMITED TIME</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                UP TO <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">50% OFF</span>
              </h2>
              <p className="text-gray-400 mt-2">Fresh arrivals at unbeatable prices</p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="mt-4 sm:mt-0 flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <span>View all</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {offerProducts.map((product, index) => {
              const related = getRandomRelated(product.id)
              return (
                <div
                  key={product.id}
                  onClick={() => {
                    setSectionProducts(offerProducts)
                    setSelectedProduct(product)
                    setRelatedProducts(related)
                    setCurrentPage('product-detail')
                  }}
                  className="cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-5 hover:bg-white/10 hover:border-emerald-400/40 transition-all"
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
                    <button
                      onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log('Choose options for', product.name)
                      }}
                      className="w-full mt-4 py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
                    >
                      Choose options
                    </button>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* BEST SELLERS Section */}
      <section id="best-sellers-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">BEST SELLERS</span>
            </h2>
            <p className="text-xl text-gray-400">Customer favorites, fresh and delicious</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {bestSellers.map((product, index) => {
              const related = getRandomRelated(product.id)
              return (
                <div
                  key={product.id}
                  onClick={() => {
                    setSectionProducts(bestSellers)
                    setSelectedProduct(product)
                    setRelatedProducts(related)
                    setCurrentPage('product-detail')
                  }}
                  className="cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-5 hover:bg-white/10 hover:border-emerald-400/40 transition-all"
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
                    <button
                      onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log('Choose options for', product.name)
                      }}
                      className="w-full mt-4 py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
                    >
                      Choose options
                    </button>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SPECIAL COMBOS Section */}
      <section id="combos-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SPECIAL COMBOS</span>
            </h2>
            <p className="text-xl text-gray-400">Curated packs for every need</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {combos.map((product, index) => {
              const related = getRandomRelated(product.id)
              return (
                <div
                  key={product.id}
                  onClick={() => {
                    setSectionProducts(combos)
                    setSelectedProduct(product)
                    setRelatedProducts(related)
                    setCurrentPage('product-detail')
                  }}
                  className="cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * (index + 1) }}
                    whileHover={{ y: -8 }}
                    className="group bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-400/40 transition-all"
                  >
                    <h3 className="font-bold text-white text-xl mb-2">{product.name}</h3>
                    <p className="text-3xl font-bold text-white mb-4">₹{product.price}</p>
                    <div className="space-y-3 mb-6">
                      {[
                        { emoji: '🥕', name: 'Carrot' },
                        { emoji: '🥔', name: 'Potato' },
                        { emoji: '🧅', name: 'Onion' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-gray-300">
                          <span className="flex items-center gap-2">
                            <span className="text-2xl">{item.emoji}</span> {item.name}
                          </span>
                          <span className="flex items-center gap-2 text-sm">
                            <span className="cursor-pointer text-gray-400 hover:text-white">−</span>
                            <span className="w-6 text-center">0</span>
                            <span className="cursor-pointer text-gray-400 hover:text-white">+</span>
                          </span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log('Add combo', product.name)
                      }}
                      className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-medium transition-colors"
                    >
                      Add Combo
                    </button>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS Section */}
      <section id="products-section" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">PRODUCTS</span>
            </h2>
            <p className="text-xl text-gray-400">Fresh picks for your kitchen</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productsList.map((product, index) => {
              const related = getRandomRelated(product.id)
              return (
                <div
                  key={product.id}
                  onClick={() => {
                    setSectionProducts(productsList)
                    setSelectedProduct(product)
                    setRelatedProducts(related)
                    setCurrentPage('product-detail')
                  }}
                  className="cursor-pointer"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-5 hover:bg-white/10 hover:border-emerald-400/40 transition-all"
                  >
                    {product.discount && (
                      <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        SALE
                      </div>
                    )}
                    <div className="relative w-full h-40 mb-4 bg-gradient-to-br from-emerald-900/40 to-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                      <span className="text-6xl filter drop-shadow-lg">{product.image}</span>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="font-semibold text-white text-lg leading-tight">{product.name}</h3>
                    <p className="text-sm text-emerald-400 mt-1">{product.brand || 'GROSGO'}</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      {product.originalPrice ? (
                        <>
                          <span className="text-white font-bold text-xl">₹{product.price}</span>
                          <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                        </>
                      ) : (
                        <span className="text-white font-bold text-xl">₹{product.price}</span>
                      )}
                    </div>
                    <button
                      onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log('Choose options for', product.name)
                      }}
                      className="w-full mt-4 py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
                    >
                      Choose options
                    </button>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}