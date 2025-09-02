import React from 'react'
import { Modal, Form, Input, Select, Button, message } from 'antd'
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons'

const { Option } = Select
const { TextArea } = Input

const QuoteModal = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm()

  const handleSubmit = async (values) => {
    try {
      // 这里可以实现实际的提交逻辑
      console.log('询价表单数据:', values)
      message.success('询价申请已提交，我们将在24小时内联系您！')
      form.resetFields()
      onSubmit(values)
    } catch (error) {
      message.error('提交失败，请稍后重试')
    }
  }

  const productOptions = [
    { value: 'diesel-0', label: '0# 柴油' },
    { value: 'diesel-minus10', label: '-10# 柴油' },
    { value: 'diesel-minus20', label: '-20# 柴油' },
    { value: 'additive-winter', label: '冬季防凝剂' },
    { value: 'additive-cleaner', label: '喷油嘴清洁剂' },
    { value: 'lubricant-engine', label: '发动机油' },
    { value: 'lubricant-gear', label: '齿轮油' },
    { value: 'lubricant-hydraulic', label: '液压油' },
    { value: 'other', label: '其他产品' }
  ]

  const quantityOptions = [
    { value: '1-10', label: '1-10 吨' },
    { value: '10-50', label: '10-50 吨' },
    { value: '50-100', label: '50-100 吨' },
    { value: '100-500', label: '100-500 吨' },
    { value: '500+', label: '500 吨以上' }
  ]

  return (
    <Modal
      title="产品询价"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        style={{ marginTop: '1rem' }}
      >
        <Form.Item
          name="name"
          label="联系人姓名"
          rules={[{ required: true, message: '请输入联系人姓名' }]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="请输入您的姓名" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="联系电话"
          rules={[
            { required: true, message: '请输入联系电话' },
            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }
          ]}
        >
          <Input 
            prefix={<PhoneOutlined />} 
            placeholder="请输入您的手机号码" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="邮箱地址"
          rules={[
            { type: 'email', message: '请输入正确的邮箱地址' }
          ]}
        >
          <Input 
            prefix={<MailOutlined />} 
            placeholder="请输入您的邮箱地址（可选）" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="company"
          label="公司名称"
          rules={[{ required: true, message: '请输入公司名称' }]}
        >
          <Input 
            placeholder="请输入您的公司名称" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="location"
          label="所在地区"
          rules={[{ required: true, message: '请输入所在地区' }]}
        >
          <Input 
            prefix={<EnvironmentOutlined />} 
            placeholder="请输入您的所在地区" 
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="product"
          label="需求产品"
          rules={[{ required: true, message: '请选择需求产品' }]}
        >
          <Select 
            placeholder="请选择您需要的产品" 
            size="large"
            mode="multiple"
          >
            {productOptions.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="quantity"
          label="预计用量"
          rules={[{ required: true, message: '请选择预计用量' }]}
        >
          <Select placeholder="请选择预计用量" size="large">
            {quantityOptions.map(option => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="requirements"
          label="具体需求"
        >
          <TextArea 
            rows={4} 
            placeholder="请详细描述您的具体需求，包括交货时间、配送地址、特殊要求等" 
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0, marginTop: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Button size="large" onClick={onCancel}>
              取消
            </Button>
            <Button type="primary" size="large" htmlType="submit" className="btn-primary">
              提交询价
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default QuoteModal
