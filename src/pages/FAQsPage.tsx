import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Simply browse our products, add items to your cart, and proceed to checkout. You can pay online or via cash on delivery."
  },
  {
    question: "What are your delivery charges?",
    answer: "Delivery is free for orders above ₹500. For orders below ₹500, a nominal fee of ₹30 applies."
  },
  {
    question: "How long does delivery take?",
    answer: "We deliver within 30-60 minutes in most areas. You can choose a preferred time slot during checkout."
  },
  {
    question: "What if I receive damaged or incorrect items?",
    answer: "Please contact our support within 24 hours, and we'll arrange a replacement or refund."
  },
  {
    question: "Do you offer returns?",
    answer: "Due to the perishable nature of groceries, we do not accept returns. However, we offer replacements for damaged items."
  },
  {
    question: "Can I modify my order after placing it?",
    answer: "You can modify your order within 5 minutes of placing it by contacting customer support."
  }
]

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
          <h1 className="text-4xl font-bold text-emerald-400 mb-6">Frequently Asked Questions</h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Find answers to common questions about ordering, delivery, and more.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-emerald-400/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <span className="text-emerald-400 text-xl">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}