import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Card, Typography, Divider, Tag, Avatar } from 'antd'
import { ArrowLeftOutlined, CalendarOutlined, UserOutlined } from '@ant-design/icons'
// 样式导入
import { StyledNewsDetail } from '../styles/pages/NewsDetailStyles'

const { Title, Paragraph, Text } = Typography

const NewsDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // 模拟新闻数据
  const news = {
    id: id,
    title: '新闻详情页面标题',
    subtitle: '这是一个新闻详情页面的副标题',
    content: `
      这是新闻详情页面的内容示例。您可以在这里展示完整的新闻内容、图片、视频等多媒体信息。
      
      新闻内容可以包含多个段落，详细描述事件的背景、过程和影响。这里可以添加更多的文字内容来充实新闻报道。
      
      您还可以在这里添加相关的数据、图表、引用等内容，使新闻报道更加丰富和有说服力。
    `,
    author: '编辑部',
    publishDate: '2024-01-15',
    category: '公司新闻',
    tags: ['重要', '最新', '行业动态']
  }

  return (
    <StyledNewsDetail>
      <div className="back-button">
        <Button 
          icon={<ArrowLeftOutlined />} 
          onClick={() => navigate('/news')}
        >
          返回新闻列表
        </Button>
      </div>
      
      <Card className="news-detail-card">
        <div className="news-header">
          <div className="news-category">
            <Tag color="blue">
              {news.category}
            </Tag>
          </div>
          
          <h1 className="news-title">
            {news.title}
          </h1>
          
          {news.subtitle && (
            <h2 className="news-subtitle">
              {news.subtitle}
            </h2>
          )}
          
          <div className="news-meta">
            <div className="meta-item">
              <Avatar icon={<UserOutlined />} size="small" />
              <span>{news.author}</span>
            </div>
            
            <div className="meta-item">
              <CalendarOutlined />
              <span>{news.publishDate}</span>
            </div>
          </div>
          
          <div className="news-tags">
            {news.tags.map((tag, index) => (
              <Tag key={index}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        
        <Divider className="divider" />
        
        <div className="news-image">
          新闻配图展示区域
        </div>
        
        <div className="news-content">
          {news.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <Paragraph key={index}>
                {paragraph.trim()}
              </Paragraph>
            )
          ))}
        </div>
      </Card>
    </StyledNewsDetail>
  )
}

export default NewsDetail