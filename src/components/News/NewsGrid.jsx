import React from 'react'
import { Row, Col, Card, Tag, Pagination } from 'antd'
import { CalendarOutlined, EyeOutlined, ShareAltOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StyledNewsGrid } from './styles'

const NewsGrid = ({ 
  regularNews, 
  currentPage, 
  setCurrentPage, 
  filteredNews, 
  handleShare, 
  handleNewsClick 
}) => {
  const { ref: newsRef, inView: newsInView } = useInView({ threshold: 0.1 })

  return (
    <StyledNewsGrid>
      <section className="news-grid" ref={newsRef}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--spacing-4xl)' }}>
            <h2 style={{ 
              fontSize: 'var(--font-size-3xl)', 
              fontWeight: '700', 
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--spacing-md)'
            }}>最新动态</h2>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'var(--color-primary)',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>
          <Row gutter={[24, 32]}>
            {regularNews.map((article, index) => (
              <Col xs={24} md={12} lg={8} key={article.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={newsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="news-card">
                    <div 
                      className="news-image"
                      style={{ backgroundImage: `url(${article.image})` }}
                    >
                      <Tag color="blue" className="news-category">
                        {article.categoryLabel}
                      </Tag>
                      <div className="news-date">
                        <CalendarOutlined /> {article.date}
                      </div>
                    </div>
                    <div className="news-content">
                      <div onClick={() => handleNewsClick(article)} style={{ cursor: 'pointer' }}>
                        <h3 className="news-title">{article.title}</h3>
                      </div>
                      <p className="news-excerpt">{article.excerpt}</p>
                      <div className="news-meta">
                        <div className="meta-left">
                          <div className="meta-item">
                            <EyeOutlined />
                            <span>{article.views}</span>
                          </div>
                        </div>
                        <div className="meta-right">
                          <button 
                            className="action-btn"
                            onClick={() => handleShare(article)}
                            title="分享文章"
                          >
                            <ShareAltOutlined />
                          </button>
                          <button 
                            className="action-btn"
                            onClick={() => handleNewsClick(article)}
                            title="阅读全文"
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                              阅读全文 <ArrowRightOutlined />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
            <Pagination
              current={currentPage}
              total={filteredNews.length}
              pageSize={6}
              onChange={setCurrentPage}
              showSizeChanger={false}
              showQuickJumper
              showTotal={(total, range) => `${range[0]}-${range[1]} 共 ${total} 条`}
            />
          </div>
        </div>
      </section>
    </StyledNewsGrid>
  )
}

export default NewsGrid