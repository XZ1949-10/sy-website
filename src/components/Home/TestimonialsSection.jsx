/**
 * TestimonialsSection组件 - 客户证言展示区域
 */
import React from 'react'
import { Row, Col, Card, Tag, Avatar, Rate, Badge } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const StyledTestimonialsSection = styled.section`
  .testimonials-section {
    padding: var(--spacing-5xl) 0;
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="1" fill="%23004C97" opacity="0.02"/><circle cx="80" cy="80" r="1" fill="%23004C97" opacity="0.02"/><circle cx="40" cy="60" r="1" fill="%23004C97" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
      opacity: 0.5;
    }
    
    .testimonial-card {
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 76, 151, 0.12), 0 4px 16px rgba(0, 0, 0, 0.08);
      height: 100%;
      border: 1px solid rgba(0, 76, 151, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary-light) 100%);
        box-shadow: 0 2px 8px rgba(0, 76, 151, 0.3);
      }
      
      &::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(135deg, transparent 0%, rgba(0, 76, 151, 0.05) 50%, transparent 100%);
        border-radius: 24px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      
      &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 30px 80px rgba(0, 76, 151, 0.15), 0 12px 40px rgba(0, 0, 0, 0.1);
        
        &::after {
          opacity: 1;
        }
        
        .testimonial-content {
          color: var(--color-text-primary);
        }
      }
      
      .ant-card-body {
        padding: var(--spacing-lg);
        position: relative;
        z-index: 2;
      }
      
      .testimonial-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--spacing-sm);
        
        .author-name {
          font-size: var(--font-size-md);
          font-weight: 600;
          color: var(--color-text-primary);
        }
      }
      
      .testimonial-content {
        .testimonial-text {
          font-size: var(--font-size-md);
          line-height: 1.8;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-md);
          font-style: italic;
          position: relative;
          
          &::before {
            content: '"';
            font-size: 3rem;
            color: rgba(0, 76, 151, 0.1);
            position: absolute;
            top: -15px;
            left: -8px;
            font-family: serif;
          }
        }
        
        .testimonial-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: var(--spacing-sm);
          border-top: 1px solid rgba(0, 76, 151, 0.1);
          
          .company {
            font-size: var(--font-size-sm);
            color: var(--color-text-secondary);
            font-weight: 500;
          }
          
          .rating {
            .ant-rate {
              font-size: 14px;
              
              .ant-rate-star {
                margin-right: 2px;
              }
            }
          }
        }
      }
      
      .ant-card-meta {
        .ant-card-meta-avatar {
          .ant-badge {
            .ant-avatar {
              border: 2px solid rgba(255, 255, 255, 0.8);
              box-shadow: 0 4px 12px rgba(0, 76, 151, 0.15);
            }
          }
        }
        
        .ant-card-meta-detail {
          .ant-card-meta-title {
            margin-bottom: var(--spacing-xs);
          }
        }
      }
    }
    
    @media (max-width: 768px) {
      .testimonial-card {
        margin-bottom: var(--spacing-lg);
        padding: var(--spacing-md);
        
        .testimonial-content {
          font-size: var(--font-size-base);
          margin-bottom: var(--spacing-lg);
          
          &::before, &::after {
            font-size: 3rem;
          }
        }
      }
    }
  }
`

const TestimonialsSection = ({ testimonials = [] }) => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <StyledTestimonialsSection>
      <section className="testimonials-section" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">客户证言</h2>
            <p className="section-subtitle">
              500+合作伙伴的信任之选
            </p>
          </motion.div>
          
          <Row gutter={[24, 24]} align="stretch">
            {testimonials.map((testimonial, index) => (
              <Col xs={24} md={8} key={index} style={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Card className="testimonial-card" hoverable>
                     <Card.Meta
                       avatar={
                         <Badge count={<StarFilled style={{ color: '#faad14' }} />} offset={[-5, 5]}>
                           <Avatar size={64} style={{ backgroundColor: '#1890ff' }}>
                             {testimonial.avatar}
                           </Avatar>
                         </Badge>
                       }
                       title={
                         <div className="testimonial-header">
                           <span className="author-name">{testimonial.author}</span>
                           <Tag color="blue">VIP客户</Tag>
                         </div>
                       }
                       description={
                         <div className="testimonial-content">
                           <div className="testimonial-text">
                             &ldquo;{testimonial.content}&rdquo;
                           </div>
                           <div className="testimonial-footer">
                             <span className="company">{testimonial.company}</span>
                             <div className="rating">
                               <Rate disabled defaultValue={testimonial.rating || 5} style={{ fontSize: '14px' }} />
                             </div>
                           </div>
                         </div>
                       }
                     />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </StyledTestimonialsSection>
  )
}

export default TestimonialsSection