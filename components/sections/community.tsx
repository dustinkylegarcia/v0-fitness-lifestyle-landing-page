"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function Community() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

  return (
    <section id="community" ref={containerRef} className="relative overflow-hidden">
      {/* Split layout */}
      <div className="grid md:grid-cols-2 min-h-screen">
        {/* Left - Image */}
        <div className="relative h-[60vh] md:h-auto overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 scale-110">
            <Image
              src="/images/community.jpg"
              alt="Friends working out together"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Right - Content */}
        <div className="bg-muted flex items-center py-24 md:py-0">
          <div className="px-8 md:px-16 lg:px-24 max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground"
            >
              Community
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 font-serif text-4xl md:text-5xl text-foreground leading-[1.1] tracking-tight text-balance"
            >
              Better together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-muted-foreground leading-relaxed"
            >
              Join a community of like-minded individuals committed to living 
              their healthiest lives. From group workouts to shared meal prep, 
              we grow stronger together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 space-y-6"
            >
              {[
                { title: "Group Sessions", desc: "Train with others, push harder" },
                { title: "Local Events", desc: "Outdoor runs, yoga in the park" },
                { title: "Online Support", desc: "24/7 community forum access" },
              ].map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              href="#join"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex mt-10 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Join the Community
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  )
}
