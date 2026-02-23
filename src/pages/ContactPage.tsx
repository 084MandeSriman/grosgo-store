import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold text-emerald-400 mb-6">Contact Us</h1>

          <p className="text-gray-300 mb-8 leading-relaxed">
            We'd love to hear from you! Reach out with any questions, feedback, or just to say hello.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                  <p className="text-gray-300">123 Market Street, Hyderabad, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <p className="text-gray-300">support@grasgo.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 mt-1" />
                  <p className="text-gray-300">Mon-Sat: 9am - 9pm<br />Sunday: 10am - 6pm</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Send a Message</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-emerald-400/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-emerald-400/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-white/5 border border-emerald-400/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400"
                />
                <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}