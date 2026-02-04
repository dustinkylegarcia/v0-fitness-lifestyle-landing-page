"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function Nourish() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="nourish" className="py-32 md:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={ref} className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
          >
            Nourishment
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight text-balance"
          >
            Fuel your body with intention
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Real food, real energy. Our nutrition philosophy centers on whole, 
            unprocessed foods that nourish your body and support your active lifestyle.
          </motion.p>
        </div>

        {/* Image Grid */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] md:row-span-2 overflow-hidden rounded-lg"
          >
            <Image
              src="/images/nutrition.jpg"
              alt="Healthy breakfast spread"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Small images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-secondary"
          >
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl text-secondary-foreground">
                  80/20
                </p>
                <p className="mt-4 text-secondary-foreground/80 text-sm md:text-base">
                  Balance over perfection. Nourish well, enjoy life.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/images/mindfulness.jpg"
              alt="Mindful meditation"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/30 flex items-end p-6 md:p-8">
              <div>
                <p className="text-background font-serif text-2xl md:text-3xl">
                  Mindful Eating
                </p>
                <p className="mt-2 text-background/80 text-sm">
                  Connect with your food and your body
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            "Whole Foods",
            "Seasonal Produce",
            "Mindful Portions",
            "Hydration Focus",
          ].map((item, i) => (
            <div key={item} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center"
              >
                <span className="font-serif text-2xl text-accent-foreground">
                  {i + 1}
                </span>
              </motion.div>
              <p className="mt-4 text-sm text-foreground tracking-wide">
                {item}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
