import React from 'react'
import { Row, Col, Card } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BenefitsSectionWrapper } from './styles'

const BenefitsSection = ({ benefits }) => {
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ threshold: 0.1 })

  return (
    <BenefitsSectionWrapper className="benefits-section" ref={benefitsRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            fontWeight: '700',
            color: 'var(--color-text-primary)'
          }}>
            员工福利
          </h2>
          <Row gutter={[32, 32]}>
            {benefits.map((benefit, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="benefit-card">
                    <div className="benefit-icon">{benefit.icon}</div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-desc">{benefit.desc}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </BenefitsSectionWrapper>
  )
}

export default BenefitsSection
