/**
 * NewsSection组件 - 新闻展示区域
 */
import React from 'react'
import { Row, Col, Card, Tag, Button, Badge, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { CalendarOutlined, TrophyOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'

const StyledNewsSection = styled.section`
  .news-section {
    background: var(--color-bg-secondary);
    padding: var(--spacing-5xl) 0;
    
    .news-card {
      border-radius: var(--border-radius-xl);
      overflow: hidden;
      transition: all var(--transition-normal);
      background: white;
      height: 100%;
    
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-xl);
      }
      
      .news-cover {
        position: relative;
        height: 200px;
        overflow: hidden;
        
        .news-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        .news-overlay {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 2;
        }
        
        .news-tag {
          position: absolute;
          top: var(--spacing-md);
          left: var(--spacing-md);
          z-index: 2;
        }
      }
      
      .ant-card-body {
        padding: var(--spacing-lg) !important;
      }
      
      .news-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: var(--spacing-sm);
        
        .news-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--color-text-primary);
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
          margin-right: var(--spacing-sm);
          
          &:hover {
            color: var(--color-primary);
          }
        }
      }
      
      .news-content {
        display: flex;
        flex-direction: column;
        
        .news-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-tertiary);
          font-size: var(--font-size-sm);
          
          .news-stats {
            .ant-statistic {
              margin: 0;
              
              .ant-statistic-content {
                font-size: 12px;
                color: var(--color-text-tertiary);
              }
            }
          }
        }
        
        .news-excerpt {
          color: var(--color-text-secondary);
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
      
      .ant-card-actions {
        border-top: 1px solid #f0f0f0;
        background: #fafafa;
        
        > li {
          margin: 8px 0;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          
          > span {
            color: var(--color-primary);
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 4px 8px;
            
            &:hover {
              color: var(--color-primary-light);
            }
          }
          
          > a {
            color: var(--color-primary);
            font-weight: 500;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            padding: 4px 8px;
            
            &:hover {
              color: var(--color-primary-light);
            }
          }
        }
      }
      
      .ant-badge {
        z-index: 3;
      }
    }
  }
`

const NewsSection = ({ 
  newsData = [], 
  onNewsClick 
}) => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <StyledNewsSection>
      <section className="news-section" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">最新动态</h2>
            <p className="section-subtitle">
              了解公司最新动态和行业资讯
            </p>
          </motion.div>
          
          <Row gutter={[24, 24]} align="stretch">
            {newsData.map((news, index) => (
              <Col xs={24} md={8} key={news.id} style={{ display: 'flex' }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Card 
                    className="news-card" 
                    hoverable
                    cover={
                      <div className="news-cover">
                        <div 
                          className="news-image"
                          style={{ backgroundImage: `url(${news.image})` }}
                        >
                          <Tag color="blue" className="news-tag">{news.category}</Tag>
                        </div>
                        <div className="news-overlay">
                          <Badge count={<TrophyOutlined style={{ color: '#faad14' }} />} offset={[10, 10]} />
                        </div>
                      </div>
                    }
                    actions={[
                      <Link to={`/news/${news.id}`} key="read">阅读更多</Link>,
                      <span key="share">分享</span>
                    ]}
                  >
                    <Card.Meta
                      title={
                        <div className="news-header">
                          <Link to={`/news/${news.id}`} onClick={() => onNewsClick?.(news)}>
                            <span className="news-title">{news.title}</span>
                          </Link>
                        </div>
                      }
                      description={
                        <div className="news-content">
                          <div className="news-meta">
                            <span><CalendarOutlined /> {news.date}</span>
                            <div className="news-stats">
                              <Statistic value={Math.floor(Math.random() * 1000) + 500} suffix="次阅读" size="small" />
                            </div>
                          </div>
                          <p className="news-excerpt">{news.excerpt}</p>
                        </div>
                      }
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            width: '100%',
            marginTop: '40px' 
          }}>
            <Button size="large" className="btn-secondary">
              <Link to="/news">查看更多新闻</Link>
            </Button>
          </div>
        </div>
      </section>
    </StyledNewsSection>
  )
}

export default NewsSection