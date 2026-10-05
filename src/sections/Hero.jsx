import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import heroImage from '../assets/campus-hero.jpg'

function Hero() {
  return (
    <section className="hero" id="home">
      <img
        src={heroImage}
        alt="Tulas International School campus"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Tulas International School
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Where Learning
          <span> Shapes the Future</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A nurturing environment where students grow through academics,
          creativity, sports and meaningful experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href="#about" className="hero-primary-button">
            Explore TIS
            <ArrowRight size={18} />
          </a>

          <a href="#admissions" className="hero-secondary-button">
            Admissions
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}

export default Hero