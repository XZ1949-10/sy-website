import React from 'react'
import { Button, Modal, Space } from 'antd'
import { 
  MessageOutlined, 
  CustomerServiceOutlined, 
  PhoneOutlined, 
  WechatOutlined, 
  MailOutlined 
} from '@ant-design/icons'

const ChatModal = ({ chatVisible, setChatVisible, handleChatToggle }) => {
  return (
    <>
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
    </>
  )
}

export default ChatModal
