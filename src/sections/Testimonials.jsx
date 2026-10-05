import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'TIS provides students with a balanced environment where academics, confidence and personal growth develop together.',
    name: 'Parent Perspective',
  },
  {
    quote:
      'The combination of academics, sports and residential life helps students become more independent and responsible.',
    name: 'Parent Perspective',
  },
  {
    quote:
      'Students are encouraged to explore their interests while learning important values, teamwork and discipline.',
    name: 'Parent Perspective',
  },
]

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Community Voices</p>

          <h2>
            What Families
            <span> Value at TIS</span>
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Quote size={34} className="quote-icon" />

              <p className="testimonial-text">
                “{testimonial.quote}”
              </p>

              <p className="testimonial-name">
                {testimonial.name}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials