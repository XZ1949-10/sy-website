import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PolicySectionWrapper } from './styles'

const PolicySection = ({ policies, handleDownloadDocument, handlePreviewDocument, downloadingFile }) => {
  const { ref: policyRef, inView: policyInView } = useInView({ threshold: 0.1 })

  return (
    <PolicySectionWrapper className="section policy-section" ref={policyRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={policyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">政策文件下载</h2>
          <p className="section-subtitle">
            下载我们的安全管理政策和操作规范文件
          </p>
        </motion.div>

        <Row gutter={[24, 24]}>
          {policies.map((policy, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={policyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="policy-card">
                  <div className="policy-icon">{policy.icon}</div>
                  <h3 className="policy-title">{policy.title}</h3>
                  <p className="policy-desc">{policy.desc}</p>
                  <p style={{ color: 'var(--color-text-tertiary)', marginBottom: '1rem' }}>
                    文件大小：{policy.size}
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Button 
                      type="primary" 
                      className="btn-primary" 
                      onClick={() => handleDownloadDocument(policy)}
                      loading={downloadingFile === policy.id}
                      style={{ flex: 1 }}
                    >
                      <DownloadOutlined /> 下载文件
                    </Button>
                    <Button 
                      type="default" 
                      onClick={() => handlePreviewDocument(policy)}
                      title="预览文档"
                    >
                      <EyeOutlined />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </PolicySectionWrapper>
  )
}

export default PolicySection
