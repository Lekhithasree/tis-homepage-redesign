import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function Admissions() {
  return (
    <section className="admissions-section" id="admissions">
      <motion.div
        className="admissions-content"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="admissions-label">
          Admissions
        </p>

        <h2>
          Begin Your
          <span> TIS Journey</span>
        </h2>

        <p>
          Discover a learning environment where students are encouraged
          to grow academically, creatively and personally.
        </p>

        <div className="admissions-actions">
          <a href="#" className="admissions-primary">
            Apply Now
            <ArrowRight size={18} />
          </a>

          <a href="#" className="admissions-secondary">
            Enquire Now
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Admissions