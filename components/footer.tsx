"use client"

import { motion } from "framer-motion"

const footerLinks = {
  Programs: ["Strength", "Mobility", "Nutrition", "Mindfulness"],
  Company: ["About", "Team", "Careers", "Press"],
  Resources: ["Blog", "Recipes", "Guides", "FAQ"],
  Legal: ["Privacy", "Terms", "Cookies"],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left - Brand */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl tracking-tight"
            >
              Kinetic
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-background/60 max-w-sm leading-relaxed"
            >
              A holistic approach to fitness, nutrition, and mindful living. 
              Move better, live better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex gap-4"
            >
              {["Instagram", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {social}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-sm text-background/40 uppercase tracking-wider mb-4">
                  {category}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-background/70 hover:text-background transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-background/40">
            © 2026 Kinetic. All rights reserved.
          </p>
          <p className="text-sm text-background/40">
            Move with intention.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
