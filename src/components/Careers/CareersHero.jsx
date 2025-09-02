import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HeroSection } from './styles'

const CareersHero = () => {
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
          <h1 className="hero-title">加入我们</h1>
          <p className="hero-subtitle">
            在第三代家族企业中开启您的职业新篇章<br />
            我们寻找有激情、有专业能力的人才加入天骏石化大家庭
          </p>
        </motion.div>
      </div>
    </HeroSection>
  )
}

export default CareersHero
