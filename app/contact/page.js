'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

export default function ContactUs () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showToast, setShowToast] = useState(false)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form Submitted:', formData)

    // Show toast notification
    setShowToast(true)

    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 3000)

    // Clear form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className='mt-10 relative min-h-screen h-[134vh] bg-gradient-to-b from-[#249155] to-[#0ed6d3] flex items-center justify-center text-white'>
      {/* Ocean Background Waves */}
      <div className="absolute inset-0 bg-[url('/lira.jpg')] bg-cover opacity-20"></div>

      <motion.div
        className='relative bg-white/10 p-10 rounded-xl shadow-xl max-w-2xl w-full backdrop-blur-lg border border-white/20'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className='text-4xl font-bold text-center mb-6'>📩 Contact Us</h2>
        <p className='text-center text-white/80 mb-6'>
          Have a question or want to book a session? Fill out the form and we’ll
          get back to you ASAP!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Name Input */}
          <div className='relative'>
            <input
              type='text'
              name='name'
              required
              value={formData.name}
              onChange={handleChange}
              className='w-full px-4 py-3 text-lg bg-white/20 text-white rounded-lg border border-white/30 focus:border-yellow-400 outline-none transition-all  placeholder-gray-300'
              placeholder='Your Name'
            />
          </div>

          {/* Email Input */}
          <div className='relative'>
            <input
              type='email'
              name='email'
              required
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-3 text-lg bg-white/20 text-white rounded-lg border border-white/30 focus:border-yellow-400 outline-none transition-all placeholder-gray-300'
              placeholder='Your Email'
            />
          </div>

          {/* Message Input */}
          <div className='relative'>
            <textarea
              name='message'
              required
              value={formData.message}
              onChange={handleChange}
              className='w-full px-4 py-3 text-lg bg-white/20 text-white rounded-lg border border-white/30 focus:border-yellow-400 outline-none transition-all resize-none placeholder-gray-300'
              placeholder='Your Message'
              rows='4'
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='w-full bg-yellow-400 text-gray-900 font-semibold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all'
          >
            <Send size={20} /> Send Message
          </motion.button>
        </form>

        {/* Contact Info */}
        <div className='mt-10 text-center text-white/80 space-y-4'>
          <p className='flex items-center justify-center gap-2'>
            <Mail size={20} /> admin@breakawaysurf.co.uk
          </p>
          <p className='flex items-center justify-center gap-2'>
            <Phone size={20} /> +44 7415753196
          </p>
          <p className='flex items-center justify-center gap-2'>
            <MapPin size={20} /> Bristol United Kingdom
          </p>
        </div>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className='fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <CheckCircle size={24} />
            Message Sent Successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
