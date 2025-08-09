'use client'
import { motion } from 'motion/react';
import React, { useState } from 'react'

export const Social = () => {
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your submission logic here (e.g., send to API or email)
    setSubmitted(true);
  };

  return (
    <motion.div
    initial={{ y:25, opacity: 0, }}
    animate={{ y: 0, opacity: 1, }}
    transition={{ duration: 0.5, ease: 'easeInOut' }}
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900/50 via-black/50 to-purple-800/50 rounded-xl p-8 shadow-2xl">
      <h2 className="text-3xl font-bold text-purple-300 mb-4">Contact Me</h2>
      <p className="text-neutral-400 mb-8 text-center max-w-md">
        Have a question, project, or just want to say hi? Fill out the form below and I'll get back to you!
      </p>
      {submitted ? (
        <div className="text-green-400 text-lg font-semibold">Thank you for reaching out! I'll get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label className="block text-purple-200 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-neutral-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-purple-200 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-neutral-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-purple-200 mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-neutral-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2  px-4 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-bold rounded-lg shadow-md hover:from-purple-700 hover:to-purple-500 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </motion.div>
  )
}
