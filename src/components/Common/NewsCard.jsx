/**
 * 新闻卡片组件 - 展示单条新闻信息
 */
import React from 'react'
import { Tag, Statistic, Space } from 'antd'
import { Link } from 'react-router-dom'
import { CalendarOutlined, EyeOutlined, TrophyOutlined } from '@ant-design/icons'
import { StyledNewsCard } from './styles'
import dayjs from 'dayjs'





const NewsCard = ({ news, className }) => {
  const {
    id,
    title,
    excerpt,
    image,
    date,
    category,
    readCount = 0
  } = news

  return (
    <StyledNewsCard 
      className={className}
      cover={
        <div className="news-cover">
          <img 
            src={image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'} 
            alt={title}
            className="news-image"
          />
          <Tag color="blue" className="news-tag">{category}</Tag>
          <div className="news-overlay">
            <TrophyOutlined style={{ color: '#faad14', fontSize: '20px' }} />
          </div>
        </div>
      }
      actions={[
        <Link to={`/news/${id}`} key="read">阅读更多</Link>,
        <span key="share">分享</span>
      ]}
    >
      <div className="news-content">
        <div className="news-header">
          <Link to={`/news/${id}`}>
            <span className="news-title">{title}</span>
          </Link>
        </div>
        
        <div className="news-meta">
          <span><CalendarOutlined /> {dayjs(date).format('YYYY-MM-DD')}</span>
          <div className="news-stats">
            <Statistic value={readCount} suffix="次阅读" size="small" />
          </div>
        </div>
        
        <p className="news-excerpt">{excerpt}</p>
      </div>
    </StyledNewsCard>
  )
}

export default NewsCard
