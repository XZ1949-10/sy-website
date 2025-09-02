/**
 * 产品卡片组件 - 展示单个产品信息
 */
import React from 'react'
import { Button, Tag, Statistic, Space } from 'antd'
import { Link } from 'react-router-dom'
import { TruckOutlined, SafetyOutlined, RocketOutlined } from '@ant-design/icons'
import { StyledProductCard } from './styles'



const ProductCard = ({ product, className }) => {
  const {
    id,
    title,
    description,
    image,
    features,
    price,
    unit,
    tags = []
  } = product

  const getIconForFeature = (feature) => {
    if (feature.includes('配送')) return <TruckOutlined />
    if (feature.includes('安全') || feature.includes('应急')) return <SafetyOutlined />
    if (feature.includes('现场') || feature.includes('加油')) return <RocketOutlined />
    return <TruckOutlined />
  }

  return (
    <StyledProductCard 
      className={className}
      cover={
        <div className="product-cover">
          <img 
            src={image || 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
            alt={title}
            className="cover-image"
          />
          {tags.length > 0 && (
            <Tag color="blue" className="service-tag">
              {tags[0]}
            </Tag>
          )}
        </div>
      }
      actions={[
        <Button type="primary" key="detail">
          <Link to={`/products/${id}`}>查看详情</Link>
        </Button>
      ]}
    >
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-features">
          {features?.slice(0, 3).map((feature, index) => (
            <div className="feature-item" key={index}>
              {getIconForFeature(feature)}
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="product-stats">
          <Statistic 
            title="参考价格" 
            value={price} 
            suffix={unit || '元/升'} 
            precision={2}
          />
        </div>
      </div>
    </StyledProductCard>
  )
}

export default ProductCard