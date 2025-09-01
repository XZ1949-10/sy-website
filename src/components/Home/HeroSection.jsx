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
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  .hero-section {
    height: 100vh;
    position: relative;
    overflow: hidden;
    
    .ant-carousel {
      height: 100%;
      
      .slick-slide {
        height: 100vh;
        
        > div {
          height: 100%;
        }
      }
    }
    
    .hero-slide {
      height: 100vh;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
      
      .hero-content {
        text-align: center;
        color: white;
        z-index: 2;
        position: relative;
        max-width: 900px;
        padding: 0 var(--spacing-lg);
        
        .hero-title {
          font-size: var(--font-size-6xl);
          font-weight: 700;
          margin-bottom: var(--spacing-xl);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          line-height: 1.2;
          
          @media (max-width: 576px) {
            font-size: var(--font-size-3xl);
            margin-bottom: var(--spacing-lg);
          }
          
          @media (max-width: 768px) {
            font-size: var(--font-size-4xl);
          }
        }
        
        .hero-subtitle {
          font-size: var(--font-size-xl);
          margin-bottom: var(--spacing-2xl);
          opacity: 0.95;
          line-height: 1.6;
          
          @media (max-width: 576px) {
            font-size: var(--font-size-base);
            margin-bottom: var(--spacing-lg);
          }
          
          @media (max-width: 768px) {
            font-size: var(--font-size-lg);
          }
        }
        
        .hero-features {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-2xl);
          
          .feature-item {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            font-size: var(--font-size-base);
            opacity: 0.9;
          }
          
          @media (max-width: 576px) {
            flex-direction: column;
            gap: var(--spacing-sm);
            
            .feature-item {
              font-size: var(--font-size-sm);
            }
          }
          
          @media (max-width: 768px) {
            flex-direction: column;
            gap: var(--spacing-md);
          }
        }
        
        .hero-cta {
          display: flex;
          justify-content: center;
          gap: var(--spacing-lg);
          
          .ant-btn {
            height: 55px;
            padding: 0 var(--spacing-2xl);
            font-size: var(--font-size-lg);
            font-weight: 600;
            border-radius: var(--border-radius-xl);
            
            @media (max-width: 768px) {
              padding: 0 var(--spacing-xl);
              font-size: var(--font-size-base);
            }
          }
          
          @media (max-width: 576px) {
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-md);
            
            .ant-btn {
              width: 100%;
              max-width: 280px;
              height: 48px;
              padding: 0 var(--spacing-lg);
              font-size: var(--font-size-base);
            }
          }
          
          @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }
  }
`

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