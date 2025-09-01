/**
 * ServicesSection组件 - 专业服务展示区域
 */
import React from 'react'
import { Row, Col, Card, Button, Badge, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const StyledServicesSection = styled.section`
  .services-section {
    padding: var(--spacing-5xl) 0;
    
    .service-card {
      border: none;
      border-radius: var(--border-radius-2xl);
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
      box-shadow: 0 8px 32px rgba(0, 76, 151, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(145deg, transparent 0%, rgba(0, 76, 151, 0.02) 50%, transparent 100%);
        opacity: 0;
        transition: opacity 0.4s ease;
        border-radius: var(--border-radius-2xl);
        z-index: 1;
      }
      
      &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 60px rgba(0, 76, 151, 0.15), 0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        
        &::before {
          opacity: 1;
        }
        
        .service-cover .service-overlay {
          opacity: 1;
        }
      }
      
      .service-cover {
        height: 180px;
        background: linear-gradient(135deg, rgba(0, 76, 151, 0.05) 0%, rgba(255, 255, 255, 0.9) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        .service-icon {
          font-size: 3.5rem;
          color: var(--color-primary);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(0, 76, 151, 0.15);
          transition: all 0.3s ease;
        }
        
        .service-overlay {
          position: absolute;
          top: var(--spacing-md);
          right: var(--spacing-md);
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 2;
        }
      }
      
      .ant-card-body {
        padding: var(--spacing-lg);
        position: relative;
        z-index: 2;
      }
      
      .service-title {
        font-size: var(--font-size-lg);
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: var(--spacing-sm);
      }
      
      .service-content {
        .service-desc {
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-sm);
        }
        
        .service-stats {
          padding: var(--spacing-sm) 0;
          border-top: 1px solid rgba(0, 76, 151, 0.1);
          
          .ant-statistic {
            text-align: center;
            
            .ant-statistic-title {
              font-size: var(--font-size-xs);
              color: var(--color-text-secondary);
              margin-bottom: 4px;
            }
          }
        }
      }
      
      .ant-card-actions {
        background: rgba(248, 250, 252, 0.5);
        border-top: 1px solid rgba(0, 76, 151, 0.08);
        padding: 0 !important;
        margin: 0 !important;
        
        li {
          margin: 0 !important;
          padding: 0 !important;
          border: none !important;
          outline: none !important;
          text-align: center;
          position: relative;
          box-sizing: border-box;
          
          &:not(:last-child) {
            border-right: 1px solid rgba(0, 76, 151, 0.08) !important;
          }
          
          .ant-btn {
            border: none !important;
            background: transparent !important;
            font-weight: 600;
            width: 100% !important;
            height: 100% !important;
            min-height: 48px;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px;
            padding: 12px 16px !important;
            margin: 0 !important;
            position: relative;
            box-sizing: border-box;
            transform: translateZ(0);
            
            .anticon {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              line-height: 1 !important;
              transform: translateX(0) translateY(0);
            }
            
            &:hover {
              background: rgba(0, 76, 151, 0.05) !important;
              transform: translateZ(0) scale(1.02);
            }
            
            &:focus {
              outline: none !important;
              box-shadow: 0 0 0 2px rgba(0, 76, 151, 0.2) !important;
            }
          }
        }
      }
    }
  }
`

const ServicesSection = ({ 
  services = [], 
  onServiceClick 
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <StyledServicesSection>
      <section className="services-section" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">专业服务</h2>
            <p className="section-subtitle">
              专业的0#柴油供应服务，满足不同行业的燃油需求
            </p>
          </motion.div>
          
          <Row gutter={[32, 32]}>
            {services.map((service, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={service.link} onClick={() => onServiceClick?.(service)}>
                    <Card 
                      className="service-card" 
                      hoverable
                      cover={
                        <div className="service-cover">
                          <div className="service-icon">{service.icon}</div>
                          <div className="service-overlay">
                            <Badge 
                              count="专业"  
                              style={{ 
                                backgroundColor: 'rgba(0, 76, 151, 0.9)',
                                color: 'white',
                                fontWeight: 600
                              }} 
                            />
                          </div>
                        </div>
                      }
                      actions={[
                        <Button type="link" className="text-gradient" key="more">
                          了解更多
                        </Button>
                      ]}
                    >
                      <Card.Meta
                        title={<span className="service-title">{service.title}</span>}
                        description={
                          <div className="service-content">
                            <p className="service-desc">{service.desc}</p>
                            <div className="service-stats">
                              <Statistic 
                                title="服务时长" 
                                value="24" 
                                suffix="小时" 
                                valueStyle={{ color: 'var(--color-primary)', fontSize: '16px' }}
                              />
                            </div>
                          </div>
                        }
                      />
                    </Card>
                  </Link>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </StyledServicesSection>
  )
}

export default ServicesSection