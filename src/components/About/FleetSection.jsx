import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FleetSection = ({ apiFleetStorage = null }) => {
  const { ref: fleetRef, inView: fleetInView } = useInView({ threshold: 0.1 })

  return (
    <section className="fleet-section" ref={fleetRef}>
      <div className="container">
        <motion.div
          className="fleet-header"
          initial={{ opacity: 0, y: 30 }}
          animate={fleetInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="fleet-badge">
            <span className="badge-text">FLEET & STORAGE</span>
          </div>
          <h2 className="fleet-main-title">车队与储存</h2>
          <p className="fleet-main-subtitle">
            专业的运输车队和现代化储存设施，为您提供全方位的物流保障
          </p>
        </motion.div>

        <div className="fleet-grid">
          <motion.div
            className="modern-fleet-card"
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={fleetInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-glow-effect"></div>
            <div className="fleet-icon-wrapper">
              <div className="fleet-icon-bg transport"></div>
              <div className="fleet-icon">🚛</div>
            </div>
            <div className="fleet-content">
              <div className="fleet-number">30+</div>
              <h3 className="fleet-card-title">专业运输车队</h3>
              <div className="fleet-divider"></div>
              <div className="fleet-features">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>5-30吨载重范围</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🛡️</span>
                  <span>危险品运输资质</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📍</span>
                  <span>GPS实时监控</span>
                </div>
              </div>
            </div>
            <div className="card-border-gradient"></div>
          </motion.div>

          <motion.div
            className="modern-fleet-card"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={fleetInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-glow-effect"></div>
            <div className="fleet-icon-wrapper">
              <div className="fleet-icon-bg storage"></div>
              <div className="fleet-icon">🏭</div>
            </div>
            <div className="fleet-content">
              <div className="fleet-number">20,000m³</div>
              <h3 className="fleet-card-title">现代化储存设施</h3>
              <div className="fleet-divider"></div>
              <div className="fleet-features">
                <div className="feature-item">
                  <span className="feature-icon">🏢</span>
                  <span>3个现代化储油库</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🌡️</span>
                  <span>温控储存系统</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🔒</span>
                  <span>安全防护措施</span>
                </div>
              </div>
            </div>
            <div className="card-border-gradient"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FleetSection