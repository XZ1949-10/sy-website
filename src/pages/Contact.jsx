import React, { useState } from 'react'
import { Form, message } from 'antd'
import { Helmet } from 'react-helmet-async'
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  ShopOutlined,
  BuildOutlined
} from '@ant-design/icons'
import { StyledContact } from '../styles/ContactStyles'
import {
  ContactHero,
  ContactForm,
  ContactInfo,
  MapSection,
  ServicesSection,
  OfficeHours,
  ChatModal
} from '../components/Contact'

const { Option } = Select

const Contact = () => {
  const [form] = Form.useForm()
  const [chatVisible, setChatVisible] = useState(false)
  const [submitting, setSubmitting] = useState(false)

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

  const handleSubmit = (values) => {
    setSubmitting(true)
    // 模拟提交过程
    setTimeout(() => {
      message.success('消息发送成功！我们会尽快回复您。')
      form.resetFields()
      setSubmitting(false)
    }, 2000)
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
      <ContactHero />

      {/* Contact Section */}
      <section className="contact-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <ContactForm 
                form={form}
                submitting={submitting}
                handleSubmit={handleSubmit}
              />
            </Col>
            <Col xs={24} lg={12}>
              <ContactInfo contactInfo={contactInfo} />
            </Col>
          </Row>
        </div>
      </section>

      {/* Map Section */}
      <MapSection locations={locations} />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Office Hours */}
      <OfficeHours />

      {/* Chat Modal */}
      <ChatModal 
        chatVisible={chatVisible}
        setChatVisible={setChatVisible}
        handleChatToggle={handleChatToggle}
      />
    </StyledContact>
  )
}

export default Contact