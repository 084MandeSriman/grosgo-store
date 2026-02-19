import { motion } from 'framer-motion'

export default function FreshFruits() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Apple */}
      <motion.g
        initial={{ scale: 0, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
      >
        <ellipse
          cx="60"
          cy="80"
          rx="25"
          ry="28"
          fill="url(#appleGradient)"
        />
        <ellipse
          cx="55"
          cy="75"
          rx="8"
          ry="10"
          fill="#FF4444"
          opacity="0.3"
        />
        <path
          d="M60 55 Q58 50 55 48"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
        />
        <ellipse
          cx="57"
          cy="48"
          rx="4"
          ry="3"
          fill="#228B22"
        />
      </motion.g>

      {/* Orange */}
      <motion.g
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.4, type: 'spring' }}
      >
        <circle
          cx="120"
          cy="75"
          r="22"
          fill="url(#orangeGradient)"
        />
        {/* Orange Texture */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={120 + Math.cos((i * 30 * Math.PI) / 180) * 18}
            cy={75 + Math.sin((i * 30 * Math.PI) / 180) * 18}
            r="1.5"
            fill="#CC6600"
            opacity="0.4"
          />
        ))}
        <circle
          cx="115"
          cy="70"
          r="6"
          fill="#FFB347"
          opacity="0.4"
        />
      </motion.g>

      {/* Banana */}
      <motion.g
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <path
          d="M40 130 Q50 120 70 122 Q90 124 95 135 Q93 145 85 147 Q70 150 55 145 Q35 140 40 130 Z"
          fill="url(#bananaGradient)"
          stroke="#DAA520"
          strokeWidth="1"
        />
        {/* Banana Spots */}
        <ellipse cx="55" cy="135" rx="3" ry="4" fill="#8B7355" opacity="0.3" />
        <ellipse cx="70" cy="130" rx="2" ry="3" fill="#8B7355" opacity="0.3" />
        <ellipse cx="80" cy="138" rx="3" ry="3" fill="#8B7355" opacity="0.3" />
      </motion.g>

      {/* Grapes Cluster */}
      <motion.g
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {/* Stem */}
        <path
          d="M140 115 Q138 110 140 105"
          stroke="#8B4513"
          strokeWidth="2"
          fill="none"
        />

        {/* Grape Berries */}
        {[
          { cx: 140, cy: 120 },
          { cx: 135, cy: 125 },
          { cx: 145, cy: 125 },
          { cx: 132, cy: 132 },
          { cx: 140, cy: 132 },
          { cx: 148, cy: 132 },
          { cx: 136, cy: 139 },
          { cx: 144, cy: 139 }
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r="6"
            fill="url(#grapeGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 + i * 0.05, type: 'spring' }}
          />
        ))}

        {/* Highlights on grapes */}
        <circle cx="138" cy="127" r="2" fill="white" opacity="0.6" />
        <circle cx="142" cy="135" r="1.5" fill="white" opacity="0.6" />
      </motion.g>

      {/* Sparkles/Freshness indicators */}
      {[...Array(8)].map((_, i) => (
        <motion.g key={i}>
          <motion.line
            x1={30 + i * 22}
            y1={40 + Math.sin(i) * 15}
            x2={32 + i * 22}
            y2={42 + Math.sin(i) * 15}
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25
            }}
          />
          <motion.line
            x1={30 + i * 22}
            y1={40 + Math.sin(i) * 15}
            x2={28 + i * 22}
            y2={42 + Math.sin(i) * 15}
            stroke="#FFD700"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25
            }}
          />
        </motion.g>
      ))}

      {/* Gradients */}
      <defs>
        <radialGradient id="appleGradient">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="70%" stopColor="#DC143C" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>

        <radialGradient id="orangeGradient">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="70%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#FF6347" />
        </radialGradient>

        <linearGradient id="bananaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE135" />
          <stop offset="100%" stopColor="#FFC837" />
        </linearGradient>

        <radialGradient id="grapeGradient">
          <stop offset="0%" stopColor="#9370DB" />
          <stop offset="70%" stopColor="#8A2BE2" />
          <stop offset="100%" stopColor="#4B0082" />
        </radialGradient>
      </defs>
    </motion.svg>
  )
}
