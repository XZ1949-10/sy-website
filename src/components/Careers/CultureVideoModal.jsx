import React from 'react'
import { Modal } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'

const CultureVideoModal = ({ videoVisible, setVideoVisible }) => {
  return (
    <Modal
      title="企业文化视频"
      open={videoVisible}
      onCancel={() => setVideoVisible(false)}
      footer={null}
      width={800}
    >
      <div style={{ 
        height: '450px', 
        background: '#f0f0f0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: '8px'
      }}>
        <div style={{ textAlign: 'center', color: '#999' }}>
          <PlayCircleOutlined style={{ fontSize: '4rem', marginBottom: '1rem' }} />
          <div>企业文化宣传视频</div>
          <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>展示天骏石化的企业价值观和团队文化</div>
        </div>
      </div>
    </Modal>
  )
}

export default CultureVideoModal
