import React from 'react'
import { Row, Col, Card } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ClockCircleOutlined } from '@ant-design/icons'
import { ServicesSectionWrapper } from './styles'

const ServicesSection = ({ services }) => {
  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <ServicesSectionWrapper ref={servicesRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ 
            fontSize: '42px', 
            fontWeight: '800', 
            background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>联系方式</h2>
          <p style={{
            fontSize: '18px',
            color: '#475569',
            fontWeight: '400',
            lineHeight: '1.6',
            letterSpacing: '0.01em'
          }}>
            多种便捷的联系方式，随时为您服务
          </p>
        </motion.div>
        
        <Row gutter={[32, 32]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-title">{service.title}</div>
                  <div className="service-desc">{service.desc}</div>
                  <div className="service-hours">
                    <ClockCircleOutlined style={{ marginRight: '8px' }} />
                    {service.hours}
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </ServicesSectionWrapper>
  )
}

export default ServicesSection
