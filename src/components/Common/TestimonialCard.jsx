/**
 * 客户评价卡片组件 - 展示客户证言
 */
import React from 'react'
import { Avatar, Rate, Tag, Badge } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { StyledTestimonialCard } from './styles'




const TestimonialCard = ({ testimonial, className }) => {
  const {
    id,
    customerName,
    company,
    rating = 5,
    comment,
    avatar
  } = testimonial

  return (
    <StyledTestimonialCard 
      className={className}
      hoverable
    >
      <Card.Meta
        avatar={
          <Badge count={<StarFilled style={{ color: '#faad14' }} />} offset={[-5, 5]}>
            <Avatar size={64} style={{ backgroundColor: '#004c97' }}>
              {avatar || customerName?.charAt(0)}
            </Avatar>
          </Badge>
        }
        title={
          <div className="testimonial-header">
            <span className="author-name">{customerName}</span>
            <Tag color="blue">VIP客户</Tag>
          </div>
        }
        description={
          <div className="testimonial-content">
            <div className="testimonial-text">
              "{comment}"
            </div>
            <div className="testimonial-footer">
              <span className="company">{company}</span>
              <div className="rating">
                <Rate disabled defaultValue={rating} style={{ fontSize: '14px' }} />
              </div>
            </div>
          </div>
        }
      />
    </StyledTestimonialCard>
  )
}

export default TestimonialCard