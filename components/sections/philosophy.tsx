"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Philosophy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="philosophy" className="py-32 md:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left - Large Text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
            >
              Our Philosophy
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight text-balance"
            >
              Balance is not something you find. 
              <span className="italic text-primary"> It{"'"}s something you create.</span>
            </motion.h2>
          </div>

          {/* Right - Description */}
          <div className="md:pt-24">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              We believe in the power of intentional movement. Not just exercise, 
              but a mindful practice that connects body and mind. Our approach 
              combines functional fitness, whole nutrition, and restorative practices 
              to help you build a sustainable, healthy lifestyle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {["Functional Movement", "Whole Nutrition", "Rest & Recovery"].map(
                (item, i) => (
                  <span
                    key={item}
                    className="px-5 py-2.5 border border-border rounded-full text-sm text-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { number: "10K+", label: "Active Members" },
            { number: "200+", label: "Expert Trainers" },
            { number: "50+", label: "Programs" },
            { number: "98%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-serif text-4xl md:text-5xl text-foreground">
                {stat.number}
              </p>
              <p className="mt-2 text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
