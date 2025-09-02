import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { 
  NewsHero, 
  NewsFilter, 
  FeaturedNews, 
  NewsGrid, 
  NewsletterSubscription 
} from '../components/News'
import { useAPI } from '../hooks/useAPI'
import api from '../services/api'

const News = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const navigate = useNavigate()

  // API数据获取 - 保持向后兼容的回退机制
  const { data: apiNewsData } = useAPI(api.news.getNewsList, { 
    immediate: true,
    params: { page: currentPage, category: selectedCategory, search: searchTerm }
  })

  // 智能回退机制：优先使用API数据，如果没有则使用静态数据
  const newsArticles = apiNewsData?.articles || [
    {
      id: 1,
      title: '天骏石化与多家大型物流企业签署年度供油协议',
      excerpt: '近日，天骏石化成功与区域内多家知名物流企业签署2024年度燃油供应协议，进一步巩固了在商用车燃油市场的领先地位。此次签约涉及年供油量超过50万升，合作金额预计突破300万元。',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-20',
      category: 'partnership',
      categoryLabel: '合作伙伴',
      views: 1205,
      featured: true
    },
    {
      id: 2,
      title: '公司获得ISO 14001环境管理体系认证续期',
      excerpt: '天骏石化顺利通过ISO 14001环境管理体系认证复审，这标志着公司在环境保护和可持续发展方面的持续努力得到了权威认可。公司将继续严格按照环境管理标准要求，推进绿色发展。',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      category: 'achievement',
      categoryLabel: '企业荣誉',
      views: 892
    },
    {
      id: 3,
      title: '应急演练：2小时响应承诺的坚实保障',
      excerpt: '为确保应急供油服务质量，公司定期组织应急演练。本次演练模拟了极端天气下的紧急供油需求，全程用时1小时38分钟，展现了公司快速响应能力和专业服务水平。',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-10',
      category: 'safety',
      categoryLabel: '安全管理',
      views: 756
    },
    {
      id: 4,
      title: '2024年春节期间服务安排通知',
      excerpt: '为确保春节期间客户的正常用油需求，天骏石化特制定春节服务安排。除夕至初三期间提供24小时应急服务，初四起恢复正常营业时间。',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-08',
      category: 'company',
      categoryLabel: '公司动态',
      views: 1105
    },
    {
      id: 5,
      title: '油价波动下的成本控制策略分析',
      excerpt: '面对国际油价频繁波动，天骏石化积极调整采购策略，通过精准的市场分析和灵活的库存管理，有效控制成本，为客户提供更具竞争力的价格。',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-05',
      category: 'industry',
      categoryLabel: '行业资讯',
      views: 634
    },
    {
      id: 6,
      title: '新增车载加油设备，提升现场服务能力',
      excerpt: '公司新购置3台先进的车载加油设备，进一步提升现场加油服务能力。新设备具备更高的安全性和作业效率，可同时为多台设备提供加油服务。',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-03',
      category: 'company',
      categoryLabel: '公司动态',
      views: 445
    }
  ]

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticle = newsArticles.find(article => article.featured)
  const regularNews = filteredNews.filter(article => !article.featured)

  // 事件处理函数
  const handleShare = async (article) => {
    if (navigator.share) {
      await navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.origin + `/news/${article.id}`
      })
    } else {
      await navigator.clipboard.writeText(window.location.origin + `/news/${article.id}`)
    }
  }

  const handleNewsClick = (article) => {
    navigate(`/news/${article.id}`)
  }

  return (
    <>
      <Helmet>
        <title>新闻与见解 - 舟山天骏石油化工有限公司</title>
        <meta name="description" content="了解天骏石化最新动态、行业资讯、安全管理和合作伙伴信息。获取石化行业专业见解和市场分析。" />
      </Helmet>

      <NewsHero />
      
      <NewsFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FeaturedNews featuredArticle={featuredArticle} />

      <NewsGrid 
        regularNews={regularNews.slice((currentPage - 1) * 6, currentPage * 6)}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        filteredNews={filteredNews}
        handleShare={handleShare}
        handleNewsClick={handleNewsClick}
      />

      <NewsletterSubscription />
    </>
  )
}

export default News