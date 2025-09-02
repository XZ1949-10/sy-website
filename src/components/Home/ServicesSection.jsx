/**
 * ServicesSection组件 - 专业服务展示区域
 */
import React from 'react'
import { Row, Col, Card, Button, Badge, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StyledServicesSection } from './styles'

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