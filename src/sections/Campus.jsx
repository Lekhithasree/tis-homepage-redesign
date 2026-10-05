import { motion } from 'framer-motion'
import {
  Building2,
  Trophy,
  Palette,
  HeartPulse,
} from 'lucide-react'

const campusItems = [
  {
    icon: Building2,
    title: 'Campus Living',
    text: 'A welcoming residential environment designed to help students learn, connect and grow together.',
  },
  {
    icon: Trophy,
    title: 'Sports',
    text: 'Students participate in a wide range of sports that encourage teamwork, discipline and confidence.',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    text: 'Creative activities give students opportunities to express ideas, discover talents and build confidence.',
  },
  {
    icon: HeartPulse,
    title: 'Student Wellness',
    text: 'Student wellbeing is supported through a safe environment, guidance and round-the-clock assistance.',
  },
]

function Campus() {
  return (
    <section className="campus-section" id="campus">
      <div className="campus-container">

        <motion.div
          className="campus-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Life at TIS</p>

          <h2>
            Discover a Campus
            <span> Built for Growth</span>
          </h2>

          <p>
            Life at TIS goes beyond academics. Students experience a balanced
            environment that combines learning, sports, creativity and
            personal development.
          </p>
        </motion.div>

        <div className="campus-grid">
          {campusItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                className="campus-card"
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="campus-card-number">
                  0{index + 1}
                </div>

                <div className="campus-card-icon">
                  <Icon size={30} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className="campus-arrow">→</span>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Campus