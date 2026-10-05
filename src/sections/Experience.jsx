import { motion } from 'framer-motion'
import { BookOpen, Home, Trophy } from 'lucide-react'

const experiences = [
  {
    icon: BookOpen,
    title: 'Academics',
    text: 'A learning environment designed to encourage curiosity, critical thinking and academic growth.',
  },
  {
    icon: Home,
    title: 'Boarding Life',
    text: 'A supportive residential experience where students learn independence, responsibility and community values.',
  },
  {
    icon: Trophy,
    title: 'Sports & Wellness',
    text: 'Sports and physical activities help students build confidence, teamwork, discipline and healthy habits.',
  },
]

function Experience() {
  return (
    <section className="experience-section" id="academics">
      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="section-label">The TIS Experience</p>

          <h2>
            More Than a School.
            <span> A Place to Grow.</span>
          </h2>

          <p>
            Students experience learning inside and outside the classroom
            through academics, residential life, sports and personal growth.
          </p>
        </motion.div>

        <div className="experience-grid">
          {experiences.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                className="experience-card"
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
              >
                <div className="experience-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <a href="#campus">
                  Explore More →
                </a>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Experience