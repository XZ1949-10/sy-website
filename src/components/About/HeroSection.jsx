import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const HeroSection = ({ isReducedMotion = false }) => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 })

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: isReducedMotion ? 0 : 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: isReducedMotion ? 0.1 : 0.8 }}
        >
          <h1 className="hero-title">3rd Generation, 1 Promise</h1>
          <p className="hero-subtitle">
            三代传承的家族企业，始终坚持为客户提供安全、可靠、高效的燃油供应服务
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">34</span>
              <span className="stat-label">年行业经验</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">企业客户</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20,000</span>
              <span className="stat-label">m³储量</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection