import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, Row, Col, Typography, Divider, Tag } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { StyledProductDetail } from '../styles/pages/ProductDetailStyles'

const { Title, Paragraph, Text } = Typography

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // 模拟产品数据
  const product = {
    id: id,
    name: '产品详情页面',
    category: '示例分类',
    description: '这是一个产品详情页面的示例。您可以在这里展示产品的详细信息、规格参数、应用场景等内容。',
    features: [
      '高性能',
      '环保材料',
      '持久耐用',
      '易于维护'
    ],
    specifications: {
      '型号': 'ZS-' + id,
      '尺寸': '100 x 50 x 30 cm',
      '重量': '2.5 kg',
      '材质': '高强度合金'
    }
  }

  return (
    <StyledProductDetail>
      <Button 
        className="back-button"
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/products')}
      >
        返回产品列表
      </Button>
      
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Card
            cover={
              <div className="product-image-placeholder">
                产品图片展示区域
              </div>
            }
          />
        </Col>
        
        <Col xs={24} lg={12}>
          <Title level={1} className="product-title">{product.name}</Title>
          <Tag color="blue" className="product-category">
            {product.category}
          </Tag>
          
          <Paragraph className="product-description">
            {product.description}
          </Paragraph>
          
          <Divider className="divider" />
          
          <Title level={3} className="section-title">产品特点</Title>
          <ul className="features-list">
            {product.features.map((feature, index) => (
              <li key={index}>
                <Text>{feature}</Text>
              </li>
            ))}
          </ul>
          
          <Divider className="divider" />
          
          <Title level={3} className="section-title">技术规格</Title>
          {Object.entries(product.specifications).map(([key, value]) => (
            <Row key={key} className="spec-row">
              <Col span={8}>
                <Text strong className="spec-label">{key}:</Text>
              </Col>
              <Col span={16}>
                <Text className="spec-value">{value}</Text>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </StyledProductDetail>
  )
}

export default ProductDetail