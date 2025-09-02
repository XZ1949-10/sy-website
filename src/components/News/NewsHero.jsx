import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StyledNewsHero } from './styles'

const NewsHero = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 })

  return (
    <StyledNewsHero>
      <section className="hero-section" ref={heroRef}>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">新闻与见解</h1>
            <p className="hero-subtitle">
              了解天骏石化最新动态，获取行业专业见解和市场分析
            </p>
          </motion.div>
        </div>
      </section>
    </StyledNewsHero>
  )
}

export default NewsHero