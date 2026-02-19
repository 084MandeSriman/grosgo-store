import { motion } from 'framer-motion'

export default function VegetableBasket() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Basket */}
      <motion.path
        d="M40 80 L30 140 C30 145 35 150 40 150 L160 150 C165 150 170 145 170 140 L160 80 Z"
        fill="url(#basketGradient)"
        stroke="#8B4513"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      {/* Basket Weave Pattern */}
      <path
        d="M50 90 L150 90 M50 100 L150 100 M50 110 L150 110 M50 120 L150 120 M50 130 L150 130"
        stroke="#654321"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Tomato */}
      <motion.circle
        cx="70"
        cy="70"
        r="15"
        fill="#FF6347"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      />
      <motion.path
        d="M70 58 L68 62 L72 62 Z"
        fill="#228B22"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      />

      {/* Carrot */}
      <motion.g
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <path
          d="M110 95 L105 75 L115 75 Z"
          fill="#FF8C00"
        />
        <path
          d="M108 75 L108 70 M112 75 L112 70 M110 75 L110 68"
          stroke="#228B22"
          strokeWidth="2"
        />
      </motion.g>

      {/* Broccoli */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <circle cx="130" cy="65" r="8" fill="#228B22" />
        <circle cx="138" cy="68" r="7" fill="#228B22" />
        <circle cx="125" cy="72" r="7" fill="#228B22" />
        <path
          d="M130 73 L130 85"
          stroke="#8FBC8F"
          strokeWidth="4"
        />
      </motion.g>

      {/* Bell Pepper */}
      <motion.g
        initial={{ y: -50, rotate: -45, opacity: 0 }}
        animate={{ y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <path
          d="M90 85 L85 90 L85 105 Q85 110 90 110 L100 110 Q105 110 105 105 L105 90 L100 85 Z"
          fill="#FFD700"
        />
        <path
          d="M92 85 L92 80 L98 80 L98 85"
          fill="#228B22"
        />
      </motion.g>

      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.circle
          key={i}
          cx={50 + i * 20}
          cy={60 + Math.sin(i) * 20}
          r="2"
          fill="#FFD700"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3
          }}
        />
      ))}

      {/* Gradients */}
      <defs>
        <linearGradient id="basketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2691E" />
          <stop offset="100%" stopColor="#8B4513" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
