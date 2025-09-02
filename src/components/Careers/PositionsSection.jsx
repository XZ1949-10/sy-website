import React from 'react'
import { Row, Col, Card, Button, Tag } from 'antd'
import { 
  EnvironmentOutlined,
  ClockCircleOutlined,
  DollarOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PositionsSectionWrapper } from './styles'

const PositionsSection = ({ positions, handleApply }) => {
  const { ref: positionsRef, inView: positionsInView } = useInView({ threshold: 0.1 })

  return (
    <PositionsSectionWrapper className="positions-section" ref={positionsRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={positionsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            fontWeight: '700',
            color: 'var(--color-text-primary)'
          }}>
            招聘职位
          </h2>
          <Row gutter={[24, 24]}>
            {positions.map((position, index) => (
              <Col xs={24} md={12} xl={8} key={position.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={positionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="position-card">
                    <div className="position-header">
                      <h3 className="position-title">{position.title}</h3>
                      <div className="position-department">{position.department}</div>
                      <div className="position-tags">
                        {position.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex} color="blue">{tag}</Tag>
                        ))}
                      </div>
                    </div>
                    
                    <div className="position-details">
                      <div className="detail-item">
                        <EnvironmentOutlined />
                        <span>{position.location}</span>
                      </div>
                      <div className="detail-item">
                        <ClockCircleOutlined />
                        <span>{position.type} • {position.experience}</span>
                      </div>
                      <div className="detail-item">
                        <DollarOutlined />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <div className="position-requirements">
                      <div className="requirements-title">岗位要求</div>
                      <ul className="requirements-list">
                        {position.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      type="primary" 
                      className="apply-btn"
                      onClick={() => handleApply(position)}
                    >
                      立即申请
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </PositionsSectionWrapper>
  )
}

export default PositionsSection
