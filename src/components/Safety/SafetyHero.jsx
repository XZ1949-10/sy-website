import React from 'react'
import { Button } from 'antd'
import { PhoneOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HeroSection } from './styles'

const SafetyHero = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 })

  return (
    <HeroSection className="hero-section" ref={heroRef}>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">安全与合规</h1>
          <p className="hero-subtitle">
            严格遵守法规标准，建立完善的HSE管理体系<br />
            确保每一滴燃油的安全品质
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Button type="primary" size="large" className="btn-warning" style={{ marginRight: '1rem' }}>
              <PhoneOutlined /> 24小时应急热线：400-XXX-XXXX
            </Button>
          </div>
        </motion.div>
      </div>
    </HeroSection>
  )
}

export default SafetyHero
