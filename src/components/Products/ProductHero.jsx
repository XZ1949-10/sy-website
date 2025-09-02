import React from 'react'
import { Button } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StyledProductHero } from './styles'

const ProductHero = ({ onQuoteClick }) => {
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 })

  return (
    <StyledProductHero>
      <section className="hero-section" ref={heroRef}>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Everything You Need for 0# Diesel</h1>
            <p className="hero-subtitle">
              优质的0#柴油产品、专业的添加剂包装、完善的润滑油产品线<br />
              以及覆盖全流程的专业服务体系
            </p>
            <Button 
              type="primary" 
              size="large" 
              className="btn-primary"
              onClick={onQuoteClick}
            >
              立即询价
            </Button>
          </motion.div>
        </div>
      </section>
    </StyledProductHero>
  )
}

export default ProductHero
