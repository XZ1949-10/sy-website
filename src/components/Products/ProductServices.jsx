import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import { 
  TruckOutlined, 
  EnvironmentOutlined, 
  PhoneOutlined, 
  SafetyOutlined,
  ClockCircleOutlined,
  ToolOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StyledProductServices } from './styles'

const ProductServices = () => {
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 })

  const services = [
    {
      icon: <TruckOutlined />,
      title: '批量配送',
      description: '专业运输车队，确保安全快速配送',
      features: ['GPS实时跟踪', '专业司机团队', '保险全覆盖'],
      key: 1
    },
    {
      icon: <EnvironmentOutlined />,
      title: '现场加油',
      description: '移动加油车服务，直达作业现场',
      features: ['24小时服务', '现场计量', '安全规范'],
      key: 2
    },
    {
      icon: <PhoneOutlined />,
      title: '紧急供应',
      description: '应急燃油供应，解决突发需求',
      features: ['2小时响应', '全天候待命', '优先调度'],
      key: 3
    },
    {
      icon: <SafetyOutlined />,
      title: '质量检测',
      description: '专业实验室，严格质量把控',
      features: ['国标检测', '第三方认证', '质量追溯'],
      key: 4
    },
    {
      icon: <ClockCircleOutlined />,
      title: '定期维护',
      description: '设备维护保养，延长使用寿命',
      features: ['定期巡检', '预防性维护', '技术支持'],
      key: 5
    },
    {
      icon: <ToolOutlined />,
      title: '技术咨询',
      description: '专业技术团队，提供全方位咨询',
      features: ['方案定制', '技术培训', '问题诊断'],
      key: 6
    }
  ]

  return (
    <StyledProductServices>
      <section className="service-section" ref={servicesRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">专业服务体系</h2>
            <p className="section-subtitle">
              从产品供应到技术支持，我们提供全流程的专业服务
            </p>
          </motion.div>

          <Row gutter={[24, 24]} style={{ marginTop: '3rem' }}>
            {services.map((service, index) => (
              <Col xs={24} md={12} lg={8} key={service.key}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="service-card" hoverable>
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="service-actions">
                      <Button type="primary" className="btn-primary" block>
                        了解详情
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </StyledProductServices>
  )
}

export default ProductServices
