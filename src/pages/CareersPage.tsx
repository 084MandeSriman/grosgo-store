import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function CareersPage() {
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
          <h1 className="text-4xl font-bold text-emerald-400 mb-6">Join the Grosgo Team</h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            We're always looking for passionate individuals to help us deliver fresh groceries to our customers. Check out our open positions below.
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-white/5 rounded-xl border border-emerald-400/20">
              <h3 className="text-white font-semibold text-lg">Delivery Partner</h3>
              <p className="text-gray-400 text-sm mb-2">Full-time / Part-time • Multiple locations</p>
              <p className="text-gray-300 text-sm mb-3">Join our delivery team and ensure fresh groceries reach customers on time.</p>
              <button className="text-emerald-400 text-sm hover:underline">Apply Now →</button>
            </div>

            <div className="p-5 bg-white/5 rounded-xl border border-emerald-400/20">
              <h3 className="text-white font-semibold text-lg">Store Associate</h3>
              <p className="text-gray-400 text-sm mb-2">Full-time • Hyderabad</p>
              <p className="text-gray-300 text-sm mb-3">Help with inventory, packing, and customer service at our main store.</p>
              <button className="text-emerald-400 text-sm hover:underline">Apply Now →</button>
            </div>

            <div className="p-5 bg-white/5 rounded-xl border border-emerald-400/20">
              <h3 className="text-white font-semibold text-lg">Customer Support Executive</h3>
              <p className="text-gray-400 text-sm mb-2">Full-time • Remote</p>
              <p className="text-gray-300 text-sm mb-3">Assist customers with orders, queries, and ensure a smooth shopping experience.</p>
              <button className="text-emerald-400 text-sm hover:underline">Apply Now →</button>
            </div>

            <div className="p-5 bg-white/5 rounded-xl border border-emerald-400/20">
              <h3 className="text-white font-semibold text-lg">Marketing Intern</h3>
              <p className="text-gray-400 text-sm mb-2">Internship • Hyderabad</p>
              <p className="text-gray-300 text-sm mb-3">Support our marketing team with campaigns, social media, and content.</p>
              <button className="text-emerald-400 text-sm hover:underline">Apply Now →</button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}