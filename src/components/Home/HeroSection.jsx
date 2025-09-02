/**
 * HeroSection组件 - 首页英雄区域（轮播图）
 */
import React from 'react'
import { Button, Carousel } from 'antd'
import { 
  SafetyOutlined, 
  TruckOutlined, 
  CheckCircleOutlined,
  PhoneOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { StyledHeroSection } from './styles'

const HeroSection = ({ 
  heroSlides = [], 
  onQuickQuote, 
  onOrderTracking 
}) => {
  return (
    <StyledHeroSection>
      <section className="hero-section">
        <Carousel autoplay effect="fade" dots={false} autoplaySpeed={8000}>
          {heroSlides.map((slide, index) => (
            <div key={index}>
              <div 
                className="hero-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <motion.div 
                  className="hero-content"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <div className="hero-features">
                    <div className="feature-item">
                      <SafetyOutlined />
                      <span>家族企业</span>
                    </div>
                    <div className="feature-item">
                      <TruckOutlined />
                      <span>当日配送</span>
                    </div>
                    <div className="feature-item">
                      <CheckCircleOutlined />
                      <span>持证经营</span>
                    </div>
                  </div>
                  <div className="hero-cta">
                    <Button 
                      type="primary" 
                      size="large" 
                      className="btn-primary"
                      onClick={onQuickQuote}
                    >
                      立即询价
                    </Button>
                    <Button 
                      size="large" 
                      className="btn-secondary" 
                      ghost
                      onClick={onOrderTracking}
                    >
                      <PhoneOutlined /> 追踪订单
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </StyledHeroSection>
  )
}

export default HeroSection