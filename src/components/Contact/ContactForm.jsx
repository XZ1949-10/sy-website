import React from 'react'
import { Card, Form, Input, Select, Button, message } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SendOutlined } from '@ant-design/icons'

const { TextArea } = Input
const { Option } = Select

const ContactForm = ({ form, submitting, handleSubmit }) => {
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={contactRef}
      initial={{ opacity: 0, x: -30 }}
      animate={contactInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Card className="contact-form-card">
        <h3 className="form-title">发送消息</h3>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="contact-form"
        >
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: '请输入您的姓名' }]}
          >
            <Input placeholder="请输入您的姓名" size="large" />
          </Form.Item>
          
          <Form.Item
            name="company"
            label="公司名称"
            rules={[{ required: true, message: '请输入公司名称' }]}
          >
            <Input placeholder="请输入公司名称" size="large" />
          </Form.Item>
          
          <Form.Item
            name="phone"
            label="联系电话"
            rules={[
              { required: true, message: '请输入联系电话' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }
            ]}
          >
            <Input placeholder="请输入联系电话" size="large" />
          </Form.Item>
          
          <Form.Item
            name="email"
            label="邮箱地址"
            rules={[
              { required: true, message: '请输入邮箱地址' },
              { type: 'email', message: '请输入正确的邮箱格式' }
            ]}
          >
            <Input placeholder="请输入邮箱地址" size="large" />
          </Form.Item>
          
          <Form.Item
            name="subject"
            label="咨询类型"
            rules={[{ required: true, message: '请选择咨询类型' }]}
          >
            <Select placeholder="请选择咨询类型" size="large">
              <Option value="product">产品咨询</Option>
              <Option value="price">价格咨询</Option>
              <Option value="cooperation">合作洽谈</Option>
              <Option value="service">售后服务</Option>
              <Option value="complaint">投诉建议</Option>
              <Option value="other">其他</Option>
            </Select>
          </Form.Item>
          
          <Form.Item
            name="message"
            label="详细信息"
            rules={[{ required: true, message: '请输入详细信息' }]}
          >
            <TextArea 
              rows={4} 
              placeholder="请详细描述您的需求或问题，我们将尽快为您回复" 
              size="large"
            />
          </Form.Item>
          
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              size="large" 
              block
              loading={submitting}
              icon={<SendOutlined />}
              className="submit-btn"
            >
              {submitting ? '发送中...' : '发送消息'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </motion.div>
  )
}

export default ContactForm
