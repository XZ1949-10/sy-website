import React, { useState } from 'react'
import { Row, Col, Card, Button, Input, Select, Form, message, Modal, Space, Alert } from 'antd'
import { 
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  WechatOutlined,
  CustomerServiceOutlined,
  SendOutlined,
  UserOutlined,
  BankOutlined,
  TruckOutlined,
  SafetyOutlined,
  AlertOutlined,
  MessageOutlined,
  TeamOutlined,
  DollarOutlined,
  ToolOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
// 样式导入
import { StyledContact } from '../styles/pages/ContactStyles'

const { Option } = Select

const Contact = () => {
  const [form] = Form.useForm()
  const [chatVisible, setChatVisible] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1 })
  const { ref: mapRef, inView: mapInView } = useInView({ threshold: 0.1 })
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1 })
  const { ref: hoursRef, inView: hoursInView } = useInView({ threshold: 0.1 })

  const contactInfo = [
    {
      icon: <PhoneOutlined />,
      label: '联系电话',
      value: '销售热线：400-8888-668\n客服热线：400-9999-668\n总机：0580-2688888'
    },
    {
      icon: <MailOutlined />,
      label: '邮箱地址',
      value: '商务合作：business@tianjun-petro.com\n客户服务：service@tianjun-petro.com\n人才招聘：hr@tianjun-petro.com'
    },
    {
      icon: <EnvironmentOutlined />,
      label: '公司地址',
      value: '浙江省舟山市定海区临城街道\n天骏石化产业园区1号\n邮编：316021'
    },
    {
      icon: <AlertOutlined />,
      label: '24小时应急热线',
      value: '应急供应：400-1234-567\n安全事故：119\n专线直达：0580-2688999',
      emergency: true
    }
  ]

  const locations = [
    {
      title: '总部大楼',
      type: '行政管理',
      address: '浙江省舟山市定海区临城街道天骏石化产业园区1号',
      phone: '0580-2688888',
      email: 'info@tianjun-petro.com',
      icon: <BankOutlined />
    },
    {
      title: '定海储油库',
      type: '储存设施',
      address: '浙江省舟山市定海区临城街道，储量8000m³',
      phone: '0580-2688777',
      email: 'dinghai@tianjun-petro.com',
      icon: <TruckOutlined />
    },
    {
      title: '普陀储油库',
      type: '储存设施',
      address: '浙江省舟山市普陀区东港街道，储量6000m³',
      phone: '0580-2688666',
      email: 'putuo@tianjun-petro.com',
      icon: <TruckOutlined />
    },
    {
      title: '岱山储油库',
      type: '储存设施',
      address: '浙江省舟山市岱山县高亭镇，储量6000m³',
      phone: '0580-2688555',
      email: 'daishan@tianjun-petro.com',
      icon: <TruckOutlined />
    }
  ]

  const services = [
    {
      icon: <CustomerServiceOutlined />,
      title: '在线客服',
      desc: '专业的客服团队为您提供7×24小时在线咨询服务，解答产品和服务相关问题。',
      hours: '7×24小时在线'
    },
    {
      icon: <PhoneOutlined />,
      title: '电话咨询',
      desc: '拨打我们的销售热线，专业销售顾问将为您提供详细的产品介绍和报价服务。',
      hours: '周一至周六 8:00-18:00'
    },
    {
      icon: <WechatOutlined />,
      title: '微信咨询',
      desc: '添加企业微信，获取实时价格信息、配送状态查询和专业技术支持。',
      hours: '工作日 9:00-17:30'
    },
    {
      icon: <MessageOutlined />,
      title: '邮件咨询',
      desc: '发送详细需求到我们的邮箱，技术团队将在24小时内为您提供专业解决方案。',
      hours: '24小时内回复'
    }
  ]

  const handleSubmit = async (values) => {
    setSubmitting(true)
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      message.success('您的消息已发送，我们会在2小时内回复您！')
      form.resetFields()
    } catch (error) {
      message.error('发送失败，请稍后重试或直接拨打客服热线')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChatToggle = () => {
    setChatVisible(!chatVisible)
  }

  return (
    <StyledContact>
      <Helmet>
        <title>联系我们 - 舟山天骏石油化工有限公司</title>
        <meta name="description" content="联系天骏石化，获取专业的0#柴油产品和服务。多种联系方式，24小时应急响应。" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">联系我们</h1>
              <p className="hero-subtitle">
                第三代家族经营石化企业，为您提供专业的0#柴油产品和优质服务
              </p>
              <div className="hero-features">
                <div className="feature-item">
                  <PhoneOutlined className="feature-icon" />
                  <span>24小时热线</span>
                </div>
                <div className="feature-item">
                  <TruckOutlined className="feature-icon" />
                  <span>2小时应急响应</span>
                </div>
                <div className="feature-item">
                  <SafetyOutlined className="feature-icon" />
                  <span>持证经营</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" ref={contactRef}>
        <div className="container">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Card className="contact-form-card">
                  <h3 className="form-title">发送消息</h3>
                  <p className="form-subtitle">请填写以下信息，我们会在2小时内与您联系</p>
                  
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    size="large"
                  >
                    <Form.Item
                      label="姓名"
                      name="name"
                      rules={[{ required: true, message: '请输入您的姓名' }]}
                    >
                      <div className="input-wrapper">
                        <span className="input-icon">
                          <UserOutlined />
                        </span>
                        <Input placeholder="请输入您的姓名" />
                      </div>
                    </Form.Item>
                    
                    <Form.Item
                      label="公司"
                      name="company"
                      rules={[{ required: true, message: '请输入公司名称' }]}
                    >
                      <div className="input-wrapper">
                        <span className="input-icon">
                          <BankOutlined />
                        </span>
                        <Input placeholder="请输入公司名称" />
                      </div>
                    </Form.Item>
                    
                    <Form.Item
                      label="手机号"
                      name="phone"
                      rules={[
                        { required: true, message: '请输入手机号' },
                        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
                      ]}
                    >
                      <div className="input-wrapper">
                        <span className="input-icon">
                          <PhoneOutlined />
                        </span>
                        <Input placeholder="请输入手机号" />
                      </div>
                    </Form.Item>
                    
                    <Form.Item
                      label="邮箱"
                      name="email"
                      rules={[
                        { required: true, message: '请输入邮箱地址' },
                        { type: 'email', message: '请输入正确的邮箱地址' }
                      ]}
                    >
                      <div className="input-wrapper">
                        <span className="input-icon">
                          <MailOutlined />
                        </span>
                        <Input placeholder="请输入邮箱地址" />
                      </div>
                    </Form.Item>
                    
                    <Form.Item
                      label="需求类别"
                      name="category"
                      rules={[{ required: true, message: '请选择需求类别' }]}
                    >
                      <Select placeholder="请选择您的需求类别">
                        <Option value="purchase">产品采购</Option>
                        <Option value="delivery">配送服务</Option>
                        <Option value="emergency">应急供应</Option>
                        <Option value="cooperation">商务合作</Option>
                        <Option value="career">人才招聘</Option>
                        <Option value="other">其他咨询</Option>
                      </Select>
                    </Form.Item>
                    
                    <Form.Item
                      label="详细需求"
                      name="message"
                      rules={[{ required: true, message: '请输入详细需求' }]}
                    >
                      <Input.TextArea
                        rows={4}
                        placeholder="请详细描述您的需求，我们会为您提供专业的解决方案"
                      />
                    </Form.Item>
                    
                    <Form.Item>
                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        block 
                        icon={<SendOutlined />}
                        loading={submitting}
                        className="btn-primary"
                      >
                        {submitting ? '发送中...' : '发送消息'}
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </motion.div>
            </Col>
            
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="contact-info-card">
                  <h3 className="info-title">联系信息</h3>
                  
                  {contactInfo.map((item, index) => (
                    <div key={index} className={`contact-item ${item.emergency ? 'emergency-contact' : ''}`}>
                      <div className="contact-icon">{item.icon}</div>
                      <div className="contact-content">
                        <div className="contact-label">{item.label}</div>
                        <div className="contact-value">
                          {item.value.split('\n').map((line, idx) => (
                            <div key={idx}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <Alert
                    message="应急提示"
                    description="如遇紧急情况，请直接拨打400-1234-567应急热线，我们将2小时内响应。"
                    type="warning"
                    showIcon
                    style={{ marginTop: 'var(--spacing-lg)' }}
                  />
                </Card>
              </motion.div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" ref={mapRef}>
        <div className="container">
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={mapInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title">我们的位置</h2>
              <p className="section-subtitle">
                覆盖舟山地区的服务网络，3个储油库 + 总部大楼，为您提供便捷的服务
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={mapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="map-container">
              <div className="map-placeholder">
                <EnvironmentOutlined className="map-icon" />
                <div className="map-text">舟山市服务网络地图</div>
                <div className="map-address">浙江省舟山市定海区临城街道</div>
                <div style={{ marginTop: 'var(--spacing-md)', color: 'var(--color-primary)', fontWeight: 600 }}>
                  3个储油库 • 1个总部 • 全市覆盖
                </div>
              </div>
            </div>
          </motion.div>
          
          <Row gutter={[24, 24]} className="location-cards">
            {locations.map((location, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={mapInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="location-card">
                    <div className="location-header">
                      {location.icon}
                      <div className="location-title">{location.title}</div>
                      <div className="location-type">{location.type}</div>
                    </div>
                    <div className="location-content">
                      <div className="location-address">{location.address}</div>
                      <div className="location-contact">
                        <div className="contact-detail">
                          <PhoneOutlined />
                          <span>{location.phone}</span>
                        </div>
                        <div className="contact-detail">
                          <MailOutlined />
                          <span>{location.email}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" ref={servicesRef}>
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
      </section>

      {/* Office Hours */}
      <section className="office-hours" ref={hoursRef}>
        <div className="container">
          <div className="hours-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={hoursInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="hours-title">服务时间</h2>
              <p className="hours-subtitle">全方位服务保障，随时为您提供专业支持</p>
              <div className="hours-grid">
                <motion.div 
                  className="hours-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoursInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="hours-icon"><CustomerServiceOutlined /></div>
                  <div className="hours-label">客服热线</div>
                  <div className="hours-value">7×24小时全天候服务</div>
                </motion.div>
                <motion.div 
                  className="hours-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoursInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="hours-icon"><DollarOutlined /></div>
                  <div className="hours-label">销售咨询</div>
                  <div className="hours-value">周一至周六 8:00-18:00</div>
                </motion.div>
                <motion.div 
                  className="hours-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoursInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="hours-icon"><TeamOutlined /></div>
                  <div className="hours-label">技术支持</div>
                  <div className="hours-value">周一至周五 9:00-17:30</div>
                </motion.div>
                <motion.div 
                  className="hours-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoursInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="hours-icon"><AlertOutlined /></div>
                  <div className="hours-label">应急响应</div>
                  <div className="hours-value">2小时内快速响应</div>
                </motion.div>
                <motion.div 
                  className="hours-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoursInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div className="hours-icon"><ToolOutlined /></div>
                  <div className="hours-label">设备维护</div>
                  <div className="hours-value">周一至周日 24小时待命</div>
                </motion.div>
                <motion.div 
                  className="hours-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoursInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="hours-icon"><SafetyOutlined /></div>
                  <div className="hours-label">安全监控</div>
                  <div className="hours-value">全年无休安全保障</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 在线客服浮动按钮 */}
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<MessageOutlined />}
        onClick={handleChatToggle}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          zIndex: 1000,
          boxShadow: 'var(--shadow-xl)',
          background: 'var(--color-secondary)',
          borderColor: 'var(--color-secondary)',
          color: 'var(--color-graphite)'
        }}
        className="chat-float-btn"
      />

      {/* 简单的在线客服模态框 */}
      <Modal
        title="在线客服"
        open={chatVisible}
        onCancel={() => setChatVisible(false)}
        footer={null}
        width={400}
      >
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <CustomerServiceOutlined style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '16px' }} />
          <h3 style={{ marginBottom: '16px' }}>在线客服</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
            欢迎使用天骏石化在线客服，我们为您提供专业的产品咨询和服务支持。
          </p>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button 
              block 
              icon={<PhoneOutlined />}
              onClick={() => window.open('tel:400-8888-668')}
            >
              拨打销售热线
            </Button>
            <Button 
              block 
              icon={<WechatOutlined />}
              style={{ background: '#07c160', borderColor: '#07c160', color: 'white' }}
            >
              微信咨询
            </Button>
            <Button 
              block 
              icon={<MailOutlined />}
              onClick={() => window.open('mailto:service@tianjun-petro.com')}
            >
              邮件咨询
            </Button>
          </Space>
        </div>
      </Modal>
    </StyledContact>
  )
}

export default Contact