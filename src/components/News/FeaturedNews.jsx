import React from 'react'
import { Card, Tag, Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { StyledFeaturedNews } from './styles'

const FeaturedNews = ({ featuredArticle }) => {
  if (!featuredArticle) return null

  return (
    <StyledFeaturedNews>
      <section className="featured-news">
        <div className="container">
          <h2 className="section-title">重点关注</h2>
          <Card className="featured-card">
            <div 
              className="featured-image"
              style={{ backgroundImage: `url(${featuredArticle.image})` }}
            >
              <div className="featured-overlay">
                <Tag color="red" className="featured-category">
                  {featuredArticle.categoryLabel}
                </Tag>
                <h3 className="featured-title">{featuredArticle.title}</h3>
                <p className="featured-excerpt">{featuredArticle.excerpt}</p>
                <Button 
                  type="primary" 
                  className="btn-warning"
                  style={{ marginTop: 'var(--spacing-md)' }}
                >
                  <Link to={`/news/${featuredArticle.id}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', whiteSpace: 'nowrap' }}>
                    阅读全文 <ArrowRightOutlined />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </StyledFeaturedNews>
  )
}

export default FeaturedNews