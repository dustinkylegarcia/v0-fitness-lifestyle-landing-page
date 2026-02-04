"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function Movement() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef(null)
  const isInView = useInView(imageRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  return (
    <section
      id="movement"
      ref={containerRef}
      className="relative bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Full-width image section */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
          <Image
            src="/images/movement.jpg"
            alt="Person running through forest trail"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/40" />
        </motion.div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-6"
          >
            <span className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70">
              Movement
            </span>
            <h2 className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground tracking-tight">
              Find Your Flow
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Content panel */}
      <div className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "Strength",
                description:
                  "Build functional strength through compound movements that translate to everyday life.",
              },
              {
                title: "Mobility",
                description:
                  "Unlock your body's full range of motion with guided flexibility and mobility work.",
              },
              {
                title: "Endurance",
                description:
                  "Develop cardiovascular health through varied, sustainable training protocols.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group"
              >
                <span className="text-sm text-primary-foreground/50 tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-serif text-3xl md:text-4xl text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-primary-foreground/70 leading-relaxed">
                  {item.description}
                </p>
                <motion.div
                  className="mt-6 h-px bg-primary-foreground/20 origin-left"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
