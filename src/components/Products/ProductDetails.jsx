import React from 'react'
import { Row, Col, Card, Button, Table, Tag, Tabs } from 'antd'
import { ThunderboltOutlined, ToolOutlined } from '@ant-design/icons'
import { StyledProductDetails } from './styles'

const ProductDetails = () => {
  const dieselSpecs = [
    { property: '密度 (20℃)', value: '820-845', unit: 'kg/m³', key: 1 },
    { property: '十六烷值', value: '≥51', unit: '-', key: 2 },
    { property: '硫含量', value: '≤10', unit: 'mg/kg', key: 3 },
    { property: '闪点（闭口）', value: '≥55', unit: '℃', key: 4 },
    { property: '冷滤点', value: '≤4', unit: '℃', key: 5 },
    { property: '运动粘度（20℃）', value: '3.0-8.0', unit: 'mm²/s', key: 6 }
  ]

  const tabItems = [
    {
      label: '0# 柴油 (GB 19147)',
      key: 'diesel',
      children: (
        <Row gutter={[32, 32]} style={{ marginTop: '2rem' }}>
          <Col xs={24} lg={12}>
            <Card className="product-card">
              <div className="product-header">
                <div className="product-icon">
                  <ThunderboltOutlined />
                </div>
                <div className="product-info">
                  <h3 className="product-title">0# 柴油</h3>
                  <p className="product-standard">符合 GB 19147-2016 标准</p>
                </div>
              </div>
              <Table 
                dataSource={dieselSpecs}
                columns={[
                  { title: '技术指标', dataIndex: 'property' },
                  { title: '标准值', dataIndex: 'value' },
                  { title: '单位', dataIndex: 'unit' }
                ]}
                pagination={false}
                size="small"
                style={{ marginBottom: '1.5rem' }}
              />
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button type="primary" className="btn-primary" block>
                  立即订购
                </Button>
                <Button className="btn-secondary" block>
                  技术咨询
                </Button>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card className="product-card">
              <div className="product-header">
                <div className="product-icon">
                  <ToolOutlined />
                </div>
                <div className="product-info">
                  <h3 className="product-title">添加剂包装</h3>
                  <p className="product-standard">提升燃油性能的专业添加剂</p>
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', border: '1px solid var(--color-light-gray)', borderRadius: 'var(--border-radius-md)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong>冬季防凝剂</strong>
                    <Tag color="green">-20℃</Tag>
                  </div>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>防止低温结蜡，确保冬季正常使用</p>
                </div>
                <div style={{ padding: '1rem', border: '1px solid var(--color-light-gray)', borderRadius: 'var(--border-radius-md)', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <strong>喷油嘴清洁剂</strong>
                    <Tag color="green">+5%</Tag>
                  </div>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)' }}>清洁燃油系统，提高燃烧效率</p>
                </div>
              </div>
              <Button type="primary" className="btn-warning" block>
                咨询添加剂方案
              </Button>
            </Card>
          </Col>
        </Row>
      )
    },
    {
      label: '润滑油产品',
      key: 'lubricants',
      children: (
        <Row gutter={[32, 32]} style={{ marginTop: '2rem' }}>
          <Col xs={24} md={8}>
            <Card className="product-card" style={{ textAlign: 'center' }}>
              <div className="product-icon" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <ToolOutlined />
              </div>
              <h3>发动机油</h3>
              <p>高性能发动机润滑油，延长发动机使用寿命</p>
              <Button type="primary" className="btn-primary" block>了解详情</Button>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="product-card" style={{ textAlign: 'center' }}>
              <div className="product-icon" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <ToolOutlined />
              </div>
              <h3>齿轮油</h3>
              <p>专业齿轮箱润滑油，确保传动系统稳定运行</p>
              <Button type="primary" className="btn-primary" block>了解详情</Button>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className="product-card" style={{ textAlign: 'center' }}>
              <div className="product-icon" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                <ToolOutlined />
              </div>
              <h3>液压油</h3>
              <p>高品质液压系统用油，保障设备正常运转</p>
              <Button type="primary" className="btn-primary" block>了解详情</Button>
            </Card>
          </Col>
        </Row>
      )
    }
  ]

  return (
    <StyledProductDetails>
      <section style={{ padding: 'var(--spacing-5xl) 0' }}>
        <div className="container">
          <Tabs 
            defaultActiveKey="diesel" 
            size="large" 
            centered
            items={tabItems}
          />
        </div>
      </section>
    </StyledProductDetails>
  )
}

export default ProductDetails
