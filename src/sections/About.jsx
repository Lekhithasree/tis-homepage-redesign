import { motion } from 'framer-motion'

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">About TIS</p>

          <h2>
            Learning Beyond
            <span> the Classroom</span>
          </h2>

          <p className="about-text">
            Tulas International School is a boarding and day school in
            Dehradun focused on academic excellence, holistic development,
            creativity and meaningful learning experiences.
          </p>

          <p className="about-text">
            At TIS, students are encouraged to explore their potential,
            develop strong values and grow into confident individuals
            prepared for the future.
          </p>

          <a href="#campus" className="about-link">
            Discover Life at TIS →
          </a>
        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="about-number">2012</span>
          <p>Established with a vision to create meaningful learning experiences.</p>
        </motion.div>

      </div>
    </section>
  )
}

export default About