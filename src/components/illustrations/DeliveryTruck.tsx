import { motion } from 'framer-motion'

export default function DeliveryTruck() {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1, type: 'spring' }}
    >
      {/* Road */}
      <path
        d="M0 150 L200 150"
        stroke="#94A3B8"
        strokeWidth="3"
        strokeDasharray="10 5"
      />

      {/* Truck Body */}
      <motion.g
        animate={{
          y: [0, -3, 0]
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        {/* Main Container */}
        <rect
          x="60"
          y="80"
          width="80"
          height="50"
          fill="url(#truckGradient)"
          stroke="#059669"
          strokeWidth="2"
          rx="5"
        />

        {/* Cab */}
        <path
          d="M140 100 L160 100 L160 130 L140 130 Z"
          fill="url(#cabGradient)"
          stroke="#059669"
          strokeWidth="2"
        />

        {/* Window */}
        <rect
          x="145"
          y="105"
          width="10"
          height="15"
          fill="#E0F2FE"
          stroke="#0891B2"
          strokeWidth="1"
          rx="2"
        />

        {/* Door Line */}
        <line
          x1="140"
          y1="115"
          x2="160"
          y2="115"
          stroke="#047857"
          strokeWidth="1"
        />

        {/* Logo on Side */}
        <circle
          cx="100"
          cy="105"
          r="15"
          fill="white"
          opacity="0.9"
        />
        <text
          x="100"
          y="112"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#10B981"
        >
          G
        </text>
      </motion.g>

      {/* Wheels with Rotation */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ originX: '85px', originY: '140px' }}
      >
        <circle
          cx="85"
          cy="140"
          r="12"
          fill="#1F2937"
        />
        <circle
          cx="85"
          cy="140"
          r="8"
          fill="#374151"
        />
        <circle
          cx="85"
          cy="140"
          r="4"
          fill="#6B7280"
        />
      </motion.g>

      <motion.g
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{ originX: '145px', originY: '140px' }}
      >
        <circle
          cx="145"
          cy="140"
          r="12"
          fill="#1F2937"
        />
        <circle
          cx="145"
          cy="140"
          r="8"
          fill="#374151"
        />
        <circle
          cx="145"
          cy="140"
          r="4"
          fill="#6B7280"
        />
      </motion.g>

      {/* Speed Lines */}
      {[...Array(4)].map((_, i) => (
        <motion.line
          key={i}
          x1="40"
          y1={90 + i * 15}
          x2="50"
          y2={90 + i * 15}
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ opacity: 0, x: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            x: [-10, 0, 10]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1
          }}
        />
      ))}

      {/* Exhaust Puff */}
      <motion.circle
        cx="165"
        cy="125"
        r="5"
        fill="#94A3B8"
        opacity="0.4"
        initial={{ scale: 0, x: 0, y: 0 }}
        animate={{
          scale: [0, 1.5, 2],
          x: [-5, -10, -15],
          y: [-5, -10, -15],
          opacity: [0.4, 0.2, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 0.5
        }}
      />

      {/* Gradients */}
      <defs>
        <linearGradient id="truckGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="cabGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#0D9488" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
