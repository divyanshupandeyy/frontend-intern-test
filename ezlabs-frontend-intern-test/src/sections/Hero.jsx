import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50">
      <div className="container py-16 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Build. Ship. Scale.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          We craft modern web experiences with performance, accessibility and delightful UX.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="btn btn-primary">Start a project</a>
          <a href="#features" className="btn btn-outline">Explore features</a>
        </div>
      </div>
    </section>
  )
}
