import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Heart, Leaf, Star, Sparkles, TrendingUp, Truck, Shield, Zap, Award, Package } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useApp } from '../App'

// Enhanced Starfield with vegetables
const StarField = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-gradient-to-r from-emerald-200/60 to-teal-200/40 rounded-full"
        style={{
          width: Math.random() * 6 + 2 + 'px',
          height: Math.random() * 6 + 2 + 'px',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
        }}
        animate={{
          opacity: [0.1, 0.9, 0.1],
          scale: [1, 2, 1],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 4 + Math.random() * 8,
          repeat: Infinity,
          delay: Math.random() * 3
        }}
      />
    ))}
    {/* Floating vegetables with trails */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={`veggie-${i}`}
        className="absolute text-4xl opacity-20"
        style={{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))'
        }}
        animate={{
          y: [0, -60, 0],
          x: [0, Math.sin(i * 0.5) * 40, 0],
          rotate: [0, 360],
          opacity: [0.1, 0.5, 0.1],
          scale: [0.8, 1.3, 0.8]
        }}
        transition={{
          duration: 12 + Math.random() * 8,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeInOut"
        }}
      >
        {['🥬', '🍎', '🥕', '🍇', '🥦', '🍅', '🌽', '🥑'][i % 8]}
      </motion.div>
    ))}
    {/* Glowing orbs */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute w-32 h-32 rounded-full"
        style={{
          left: `${i * 20}%`,
          top: `${(i % 2) * 50}%`,
          background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, Math.random() * 100 - 50, 0],
          y: [0, Math.random() * 100 - 50, 0]
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          delay: i * 1.5
        }}
      />
    ))}
  </div>
)

// Flying cart animation
const FlyingCart = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute"
    initial={{ x: -100, y: 100, opacity: 0 }}
    animate={{
      x: ['0%', '100vw'],
      y: [100, -100, 50, -50, 100],
      opacity: [0, 1, 1, 1, 0],
      rotate: [0, 10, -10, 5, 0]
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      delay: delay,
      ease: "linear"
    }}
    style={{
      left: '-100px',
      top: '30%',
    }}
  >
    <motion.div
      animate={{
        y: [0, -10, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <ShoppingCart className="w-12 h-12 text-emerald-400/40" strokeWidth={1.5} />
      {/* Trail effect */}
      <motion.div
        className="absolute inset-0 blur-xl bg-emerald-400/30"
        animate={{
          opacity: [0.5, 0, 0.5],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity
        }}
      />
    </motion.div>
  </motion.div>
)

// Product showcase carousel
const ProductShowcase = () => {
  const products = [
    { emoji: '🥬', name: 'Fresh Spinach', color: 'from-green-400 to-emerald-500' },
    { emoji: '🍎', name: 'Organic Apples', color: 'from-red-400 to-rose-500' },
    { emoji: '🥕', name: 'Baby Carrots', color: 'from-orange-400 to-amber-500' },
    { emoji: '🍇', name: 'Sweet Grapes', color: 'from-purple-400 to-violet-500' },
    { emoji: '🥦', name: 'Broccoli', color: 'from-emerald-400 to-teal-500' },
    { emoji: '🍅', name: 'Tomatoes', color: 'from-red-500 to-orange-500' }
  ]

  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
      {products.map((product, i) => (
        <motion.div
          key={i}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, x: -10 }}
          className="relative group cursor-pointer"
        >
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}
            animate={{
              boxShadow: [
                '0 10px 30px rgba(16,185,129,0.2)',
                '0 15px 40px rgba(16,185,129,0.4)',
                '0 10px 30px rgba(16,185,129,0.2)'
              ]
            }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
          >
            <span className="text-3xl">{product.emoji}</span>
            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/20"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          {/* Tooltip */}
          <motion.div
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            initial={{ x: 10 }}
            whileHover={{ x: 0 }}
          >
            {product.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default function LandingPage() {
  const { setCurrentPage, cart } = useApp()
  const [isLoaded, setIsLoaded] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17deg", "-17deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17deg", "17deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#0F1B2D] to-[#0A0E27] text-white flex flex-col items-center selection:bg-emerald-500 overflow-hidden relative">
      <StarField />
      <FlyingCart delay={0} />
      <FlyingCart delay={7} />

      {/* Enhanced ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-400/5 rounded-full blur-[180px]" />

      {/* Premium Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50 w-full max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 py-6 backdrop-blur-xl bg-white/5 rounded-b-3xl border-b border-emerald-400/20 shadow-2xl shadow-emerald-500/10">
        <motion.div
          className="flex items-center gap-3 group cursor-pointer"
          whileHover={{ scale: 1.03 }}
          onClick={() => setCurrentPage('landing')}
        >
          <motion.div
            className="relative"
            whileHover={{ rotate: 10, scale: 1.15 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-3 border border-emerald-400/30">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
              GRASGO
            </h1>
            <motion.p
              className="text-[9px] sm:text-[10px] text-emerald-400 uppercase font-black tracking-[0.28em] flex items-center gap-1"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-2 h-2" />
              Fresh & Fast Delivery
              <Zap className="w-2 h-2" />
            </motion.p>
          </div>
        </motion.div>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-bold tracking-wide">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-emerald-400 relative group">
              Shop
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500"
                initial={{ width: '100%' }}
                whileHover={{ width: '100%' }}
              />
            </button>
            <a href="#about" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300" />
            </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 25px 50px rgba(16, 185, 129, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('cart')}
            className="relative px-6 sm:px-8 py-3 sm:py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-sm font-black shadow-2xl shadow-emerald-500/40 cursor-pointer overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
            </span>
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg ring-4 ring-[#0A0E27]"
              >
                {cartCount}
              </motion.span>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center relative w-full px-4 sm:px-6 lg:px-8">
        <ProductShowcase />

        {/* Enhanced glow effects */}
        <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/20 to-teal-500/15 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-emerald-400/25 rounded-full blur-[120px]" />

        <AnimatePresence>
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 60 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              boxShadow: [
                "0 60px 120px rgba(0,0,0,0.9)",
                "0 70px 140px rgba(16,185,129,0.3)",
                "0 60px 120px rgba(0,0,0,0.9)"
              ]
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3,
              boxShadow: { duration: 4, repeat: Infinity }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { x.set(0); y.set(0); }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[520px] aspect-square bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-100 rounded-[2.5rem] shadow-[0_60px_120px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center p-8 sm:p-12 border-b-[20px] border-emerald-200 group overflow-hidden"
          >
            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-emerald-400/30 to-teal-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(16,185,129,0.3), rgba(20,184,166,0.3))",
                  "linear-gradient(135deg, rgba(20,184,166,0.3), rgba(16,185,129,0.3))",
                  "linear-gradient(225deg, rgba(16,185,129,0.3), rgba(20,184,166,0.3))",
                  "linear-gradient(315deg, rgba(20,184,166,0.3), rgba(16,185,129,0.3))"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-[3px] rounded-[2.5rem] bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-100"
              animate={{
                background: [
                  "linear-gradient(135deg, #d1fae5, #ccfbf1, #d1fae5)",
                  "linear-gradient(225deg, #d1fae5, #ccfbf1, #d1fae5)",
                  "linear-gradient(315deg, #d1fae5, #ccfbf1, #d1fae5)",
                  "linear-gradient(45deg, #d1fae5, #ccfbf1, #d1fae5)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Floating particles around the box */}
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-70"
                style={{
                  left: `${5 + (i * 6)}%`,
                  top: `${3 + (i % 2) * 94}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  x: [0, Math.sin(i) * 30, 0],
                  opacity: [0.3, 0.9, 0.3],
                  scale: [0.5, 1.5, 0.5]
                }}
                transition={{
                  duration: 3.5 + (i * 0.4),
                  repeat: Infinity,
                  delay: i * 0.25
                }}
              />
            ))}

            {/* Corner badges */}
            <motion.div
              className="absolute top-10 left-10 flex flex-col items-center text-emerald-800/70 z-10"
              whileHover={{ scale: 1.15, rotate: 8 }}
            >
              <span className="text-[11px] font-black uppercase tracking-widest mb-1.5">Organic</span>
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Leaf className="w-6 h-6 fill-emerald-400/40 text-emerald-600" />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-12 left-12 flex flex-col items-center text-emerald-800/70 z-10"
              whileHover={{ scale: 1.15, rotate: -8 }}
            >
              <span className="text-[11px] font-black uppercase tracking-widest mb-1.5">Fast</span>
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Truck className="w-6 h-6 text-teal-600" />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute top-12 right-12 opacity-30 z-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.3, opacity: 0.7 }}
            >
              <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.8" strokeDasharray="4 4">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5" />
              </svg>
            </motion.div>

            <motion.div
              className="absolute bottom-12 right-12 text-emerald-800/80 italic font-serif text-2xl z-10"
              whileHover={{ scale: 1.15, color: "#065f46" }}
            >
              Fresh
            </motion.div>

            {/* Main rotating cart icon */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, -8, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-10 relative z-10"
              whileHover={{ scale: 1.15 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl relative"
              >
                <ShoppingCart className="w-24 h-24 text-white drop-shadow-2xl" strokeWidth={2} />
                {/* Pulsing rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-emerald-300/50"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-teal-300/50"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(16,185,129,0.6)",
                      "0 0 80px rgba(20,184,166,0.8)",
                      "0 0 40px rgba(16,185,129,0.6)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 to-teal-400/30 blur-3xl rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full" />
            </motion.div>

            {/* Content */}
            <div className="text-center text-emerald-900 z-10 relative">
              <motion.p
                className="text-xs font-black uppercase tracking-[0.35em] mb-3 opacity-80 flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <Sparkles className="w-4 h-4" />
                Grocery Store
                <Sparkles className="w-4 h-4" />
              </motion.p>
              <motion.h2
                className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-emerald-900 to-teal-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
              >
                Fresh & Ready
              </motion.h2>
              <motion.p
                className="text-sm text-emerald-700 mb-10 max-w-sm mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Farm-fresh groceries delivered in 30 minutes. Quality guaranteed, unbeatable prices.
              </motion.p>

              <motion.button
                whileHover={{
                  scale: 1.12,
                  backgroundColor: "#059669",
                  color: "#d1fae5",
                  boxShadow: "0 15px 40px rgba(16, 185, 129, 0.5)"
                }}
                whileTap={{ scale: 0.92 }}
                onClick={() => setCurrentPage('home')}
                className="px-12 py-4 bg-emerald-900/20 border-2 border-emerald-700/50 rounded-2xl text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer relative overflow-hidden group shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Shopping
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* Feature badges */}
              <div className="flex items-center justify-center gap-6 mt-8">
                {[
                  { icon: Shield, text: 'Secure' },
                  { icon: Award, text: 'Quality' },
                  { icon: Zap, text: 'Fast' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-1.5 text-emerald-800/60 text-xs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.1 }}
                    whileHover={{ scale: 1.1, color: '#065f46' }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-bold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <motion.footer
        className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-12 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-40 backdrop-blur-xl bg-white/5 rounded-t-3xl border-t border-emerald-400/20 mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.08, opacity: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <Star className="w-4 h-4 text-emerald-400" />
          </motion.div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Premium Quality Guaranteed</span>
        </motion.div>
        <motion.div
          className="text-[10px] font-bold uppercase tracking-[0.25em]"
          whileHover={{ scale: 1.08, opacity: 0.8 }}
        >
          © 2026 GRASGO LTD.
        </motion.div>
      </motion.footer>
    </div>
  )
}
