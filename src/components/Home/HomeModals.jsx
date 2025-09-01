/**
 * HomeModals组件 - 首页相关的模态框组件集合
 */
import React from 'react'
import { Modal, Form, Input, Select, Button, Row, Col, Card, Statistic } from 'antd'
import { 
  UserOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined, 
  SearchOutlined,
  CheckCircleOutlined
} from '@ant-design/icons'

// 快速询价模态框
export const QuickQuoteModal = ({ 
  visible, 
  onCancel, 
  onSubmit, 
  form 
}) => {
  return (
    <Modal
      title="快速询价"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="联系人"
              name="contactName"
              rules={[{ required: true, message: '请输入联系人姓名' }]}
            >
              <Input placeholder="请输入联系人姓名" prefix={<UserOutlined />} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="联系电话"
              name="contactPhone"
              rules={[
                { required: true, message: '请输入联系电话' },
                { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }
              ]}
            >
              <Input placeholder="请输入联系电话" prefix={<PhoneOutlined />} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="需求数量"
              name="quantity"
              rules={[{ required: true, message: '请输入需求数量' }]}
            >
              <Input placeholder="请输入数量" suffix="升" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="用途"
              name="usage"
              rules={[{ required: true, message: '请选择用途' }]}
            >
              <Select placeholder="请选择用途">
                <Select.Option value="construction">工程建设</Select.Option>
                <Select.Option value="logistics">物流运输</Select.Option>
                <Select.Option value="agriculture">农业机械</Select.Option>
                <Select.Option value="mining">矿山开采</Select.Option>
                <Select.Option value="other">其他</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="配送地址"
          name="deliveryAddress"
          rules={[{ required: true, message: '请输入配送地址' }]}
        >
          <Input placeholder="请输入详细配送地址" prefix={<EnvironmentOutlined />} />
        </Form.Item>
        <Form.Item label="备注" name="remarks">
          <Input.TextArea rows={3} placeholder="请输入特殊要求或备注信息" />
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button onClick={onCancel}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              提交询价
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

// 订单追踪模态框
export const OrderTrackingModal = ({ 
  visible, 
  onCancel, 
  onSubmit, 
  form 
}) => {
  return (
    <Modal
      title="订单追踪"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={500}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
      >
        <Form.Item
          label="订单号"
          name="orderId"
          rules={[{ required: true, message: '请输入订单号' }]}
        >
          <Input placeholder="请输入订单号" prefix={<SearchOutlined />} />
        </Form.Item>
        <Form.Item
          label="联系电话"
          name="phone"
          rules={[
            { required: true, message: '请输入联系电话' },
            { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码' }
          ]}
        >
          <Input placeholder="请输入下单时的联系电话" prefix={<PhoneOutlined />} />
        </Form.Item>
        <Form.Item>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
            <Button onClick={onCancel}>
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              查询订单
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

// 价格详情模态框
export const PriceDetailModal = ({ 
  visible, 
  onCancel, 
  onQuote, 
  dieselPrice 
}) => {
  return (
    <Modal
      title="今日燃油价格详情"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="close" onClick={onCancel}>
          关闭
        </Button>,
        <Button key="quote" type="primary" onClick={onQuote}>
          立即询价
        </Button>
      ]}
      width={700}
    >
      <div style={{ padding: '16px 0' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card title="当前价格" bordered={false} style={{ textAlign: 'center' }}>
              <Statistic
                title="0#柴油"
                value={dieselPrice?.toFixed(2)}
                suffix="元/升"
                valueStyle={{ color: '#1890ff', fontSize: '2rem' }}
              />
              <p style={{ color: '#666', marginTop: '8px' }}>
                更新时间: {new Date().toLocaleString()}
              </p>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="价格优势" bordered={false}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>市场基准价:</span>
                  <span style={{ color: '#666' }}>¥{(dieselPrice + 0.10).toFixed(2)}/升</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>天骏价格:</span>
                  <span style={{ color: '#52c41a', fontWeight: 'bold' }}>¥{dieselPrice?.toFixed(2)}/升</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #f0f0f0', paddingTop: '8px' }}>
                  <span>您可节省:</span>
                  <span style={{ color: '#ff4d4f', fontWeight: 'bold' }}>¥0.10/升</span>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        
        <Card title="价格说明" style={{ marginTop: '16px' }} bordered={false}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />
              <span>价格含税，透明无隐藏费用</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />
              <span>500升起订，量大价优</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />
              <span>区域内免费配送</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircleOutlined style={{ color: '#52c41a' }} />
              <span>24小时客服热线: 400-1234-5678</span>
            </div>
          </div>
        </Card>
      </div>
    </Modal>
  )
}