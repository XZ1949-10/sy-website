/**
 * 服务卡片组件 - 展示服务项目
 */
import React from 'react'
import { Button, Badge, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { StyledServiceCard } from './styles'




const ServiceCard = ({ service, className }) => {
  const {
    id,
    icon,
    title,
    description,
    link,
    serviceHours = '24'
  } = service

  return (
    <StyledServiceCard 
      className={className}
      cover={
        <div className="service-cover">
          <div className="service-icon">{icon}</div>
          <div className="service-overlay">
            <Badge 
              count="专业"  
              style={{ 
                backgroundColor: 'rgba(0, 76, 151, 0.9)',
                color: 'white',
                fontWeight: 600
              }} 
            />
          </div>
        </div>
      }
      actions={[
        <Button type="link" key="more">
          了解更多
        </Button>
      ]}
    >
      <div className="service-content">
        <Card.Meta
          title={<span className="service-title">{title}</span>}
          description={
            <div className="service-content">
              <p className="service-desc">{description}</p>
              <div className="service-stats">
                <Statistic 
                  title="服务时长" 
                  value={serviceHours} 
                  suffix="小时" 
                  valueStyle={{ color: '#004c97', fontSize: '16px' }}
                />
              </div>
            </div>
          }
        />
      </div>
    </StyledServiceCard>
  )
}

export default ServiceCard