import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    const handleMouseOver = (event) => {
      const interactiveElement = event.target.closest(
        'a, button'
      )

      setHovering(Boolean(interactiveElement))
    }

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <motion.div
      className={`custom-cursor ${hovering ? 'cursor-hover' : ''}`}
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: hovering ? 1.6 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 35,
        mass: 0.2,
      }}
    />
  )
}

export default CustomCursor