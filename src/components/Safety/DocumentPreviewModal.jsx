import React from 'react'
import { Modal, Button } from 'antd'
import { DownloadOutlined, FileProtectOutlined } from '@ant-design/icons'

const DocumentPreviewModal = ({ 
  previewVisible, 
  setPreviewVisible, 
  previewDocument, 
  handleDownloadDocument, 
  downloadingFile 
}) => {
  return (
    <Modal
      title={`文档预览 - ${previewDocument?.title}`}
      open={previewVisible}
      onCancel={() => setPreviewVisible(false)}
      footer={[
        <Button key="close" onClick={() => setPreviewVisible(false)}>
          关闭
        </Button>,
        <Button 
          key="download" 
          type="primary" 
          onClick={() => {
            if (previewDocument) {
              handleDownloadDocument(previewDocument)
            }
          }}
          loading={downloadingFile === previewDocument?.id}
        >
          <DownloadOutlined /> 下载文档
        </Button>
      ]}
      width={800}
    >
      {previewDocument && (
        <div style={{ padding: '16px 0' }}>
          <div style={{ 
            background: '#f5f5f5', 
            padding: '16px', 
            borderRadius: '8px', 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ fontSize: '24px' }}>{previewDocument.icon}</div>
            <div>
              <h4 style={{ margin: 0, marginBottom: '4px' }}>{previewDocument.title}</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                {previewDocument.desc} • 文件大小: {previewDocument.size}
              </p>
            </div>
          </div>
          
          <div style={{ 
            background: '#fff', 
            border: '1px solid #e8e8e8', 
            borderRadius: '8px', 
            padding: '20px',
            textAlign: 'center',
            minHeight: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <FileProtectOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
            <h3 style={{ marginBottom: '8px' }}>文档预览</h3>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              该文档包含重要的安全管理信息，请下载查看完整内容。
            </p>
            <div style={{
              background: '#f6f8fa',
              padding: '12px 16px',
              borderRadius: '6px',
              fontSize: '14px',
              color: '#666'
            }}>
              📝 文档内容预览功能将在后续版本中提供
            </div>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default DocumentPreviewModal
