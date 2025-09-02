import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import { 
  FileTextOutlined, 
  FilePdfOutlined, 
  FileExcelOutlined,
  DownloadOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StyledProductDownloads } from './styles'

const ProductDownloads = () => {
  const { ref: downloadsRef, inView: downloadsInView } = useInView({ threshold: 0.1 })

  const downloadFiles = [
    {
      icon: <FilePdfOutlined />,
      title: '产品技术规格书',
      description: '详细的产品技术参数和质量标准',
      fileSize: '2.3 MB',
      format: 'PDF',
      key: 1
    },
    {
      icon: <FileExcelOutlined />,
      title: '价格表',
      description: '最新的产品价格信息和优惠政策',
      fileSize: '156 KB',
      format: 'Excel',
      key: 2
    },
    {
      icon: <FileTextOutlined />,
      title: '安全数据表 (SDS)',
      description: '产品安全使用和储存指南',
      fileSize: '890 KB',
      format: 'PDF',
      key: 3
    },
    {
      icon: <FilePdfOutlined />,
      title: '质量检测报告',
      description: '第三方权威机构检测认证报告',
      fileSize: '1.8 MB',
      format: 'PDF',
      key: 4
    },
    {
      icon: <FileTextOutlined />,
      title: '使用说明书',
      description: '产品正确使用方法和注意事项',
      fileSize: '650 KB',
      format: 'PDF',
      key: 5
    },
    {
      icon: <FileExcelOutlined />,
      title: '订购申请表',
      description: '标准化订购流程申请表格',
      fileSize: '98 KB',
      format: 'Excel',
      key: 6
    }
  ]

  const handleDownload = (fileName) => {
    // 这里可以实现实际的下载逻辑
    console.log(`下载文件: ${fileName}`)
  }

  return (
    <StyledProductDownloads>
      <section className="downloads-section" ref={downloadsRef}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={downloadsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">资料下载</h2>
            <p className="section-subtitle">
              获取详细的产品资料和技术文档
            </p>
          </motion.div>

          <Row gutter={[24, 24]} style={{ marginTop: '3rem' }}>
            {downloadFiles.map((file, index) => (
              <Col xs={24} md={12} lg={8} key={file.key}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={downloadsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="download-card" hoverable>
                    <div className="download-header">
                      <div className="download-icon">
                        {file.icon}
                      </div>
                      <div className="download-info">
                        <h3 className="download-title">{file.title}</h3>
                        <div className="download-meta">
                          <span className="file-format">{file.format}</span>
                          <span className="file-size">{file.fileSize}</span>
                        </div>
                      </div>
                    </div>
                    <p className="download-description">{file.description}</p>
                    <div className="download-actions">
                      <Button 
                        type="primary" 
                        className="btn-primary"
                        icon={<DownloadOutlined />}
                        onClick={() => handleDownload(file.title)}
                        block
                      >
                        立即下载
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div
            className="download-notice"
            initial={{ opacity: 0, y: 20 }}
            animate={downloadsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ 
              marginTop: '3rem', 
              padding: '2rem', 
              backgroundColor: 'var(--color-background-light)', 
              borderRadius: 'var(--border-radius-lg)',
              textAlign: 'center'
            }}
          >
            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>需要更多技术支持？</h3>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
              我们的技术团队随时为您提供专业咨询和定制化解决方案
            </p>
            <Button type="primary" size="large" className="btn-secondary">
              联系技术专家
            </Button>
          </motion.div>
        </div>
      </section>
    </StyledProductDownloads>
  )
}

export default ProductDownloads
