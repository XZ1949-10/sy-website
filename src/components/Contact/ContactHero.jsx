import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ContactHeroWrapper } from './styles'

const ContactHero = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <ContactHeroWrapper ref={heroRef}>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">联系我们</h1>
          <p className="hero-subtitle">
            专业的石化产品供应商，为您提供全方位的服务支持
          </p>
        </motion.div>
      </div>
    </ContactHeroWrapper>
  )
}

export default ContactHero
