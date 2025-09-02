import React from 'react'
import { Row, Col, Card, Tag } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CertificationSectionWrapper } from './styles'

const CertificationSection = ({ certifications }) => {
  const { ref: certRef, inView: certInView } = useInView({ threshold: 0.1 })

  return (
    <CertificationSectionWrapper className="section" ref={certRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">资质认证</h2>
          <p className="section-subtitle">
            严格按照国际标准建立管理体系，获得权威机构认证
          </p>
        </motion.div>

        <Row gutter={[24, 24]}>
          {certifications.map((cert, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={certInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="certification-card">
                  <div className="cert-logo">{cert.icon}</div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-desc">{cert.desc}</p>
                  <div className="cert-status">
                    <Tag color={cert.type === 'success' ? 'green' : 'blue'}>
                      {cert.status}
                    </Tag>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </CertificationSectionWrapper>
  )
}

export default CertificationSection
