"use client"

import React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export function CTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section id="join" className="py-32 md:py-48 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
        >
          Start Your Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] tracking-tight text-balance"
        >
          Ready to transform your{" "}
          <span className="italic text-primary">lifestyle</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Join our community and get exclusive access to programs, nutrition 
          guides, and a supportive network of wellness enthusiasts.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          {!submitted ? (
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-muted border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Get Started
              </motion.button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 px-8 bg-secondary/50 rounded-2xl inline-block"
            >
              <p className="text-foreground font-medium">
                Welcome to the movement!
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Check your inbox for next steps.
              </p>
            </motion.div>
          )}
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-sm text-muted-foreground"
        >
          Free to join. Cancel anytime. No spam, ever.
        </motion.p>
      </div>
    </section>
  )
}
