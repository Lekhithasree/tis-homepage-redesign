import { motion } from 'framer-motion'

const stats = [
  {
    number: '22',
    suffix: 'Acres',
    label: 'Expansive Campus',
  },
  {
    number: '16+',
    suffix: 'Sports',
    label: 'Sporting Activities',
  },
  {
    number: '24×7',
    suffix: '',
    label: 'Medical Assistance',
  },
  {
    number: '6:1',
    suffix: '',
    label: 'Student–Teacher Ratio',
  },
]

function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-item"
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div className="stat-value">
              {stat.number}
              {stat.suffix && (
                <span className="stat-suffix">{stat.suffix}</span>
              )}
            </div>

            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats