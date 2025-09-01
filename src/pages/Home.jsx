import React, { useState, useEffect } from 'react'
import { Form, message } from 'antd'
import { TruckOutlined, RocketOutlined, SafetyOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { TrustBar } from '../components/Trust'
// 导入模块化组件
import {
  HeroSection,
  ServicesSection,
  MapSection,
  TestimonialsSection,
  NewsSection,
  PriceWidget,
  QuickQuoteModal,
  OrderTrackingModal,
  PriceDetailModal
} from '../components/Home'
// API集成导入
import { useAPI } from '../hooks/useAPI'
import api from '../services/api'
// 样式导入
import { StyledHome } from '../styles/pages/HomeStyles'



const Home = () => {
  const [dieselPrice, setDieselPrice] = useState(6.85)
  const navigate = useNavigate()

  // API数据获取 - 保持向后兼容的回退机制
  const { data: apiHeroSlides } = useAPI(api.home.getBanners, { immediate: true })
  const { data: apiServices } = useAPI(api.home.getServices, { immediate: true })
  const { data: apiTestimonials } = useAPI(api.home.getTestimonials, { immediate: true })
  const { data: apiNewsData } = useAPI(api.home.getHomeLatestNews, { immediate: true })
  const { data: apiFuelPrice } = useAPI(api.home.getFuelPrice, { immediate: true })

  // 状态管理
  const [quickQuoteVisible, setQuickQuoteVisible] = useState(false)
  const [orderTrackingVisible, setOrderTrackingVisible] = useState(false)
  const [priceDetailVisible, setPriceDetailVisible] = useState(false)
  const [form] = Form.useForm()
  const [trackingForm] = Form.useForm()

  useEffect(() => {
    // 使用API返回的价格，如果没有则模拟价格波动
    if (apiFuelPrice?.currentPrice) {
      setDieselPrice(apiFuelPrice.currentPrice)
    } else {
      const interval = setInterval(() => {
        setDieselPrice(prev => prev + (Math.random() - 0.5) * 0.1)
      }, 10000)
      
      return () => clearInterval(interval)
    }
  }, [apiFuelPrice])

  // 静态数据作为默认值，API数据作为优先选项
  const heroSlides = apiHeroSlides || [
    {
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      title: '可靠的0#柴油供应自1990年',
      subtitle: '第三代家族企业 • 当日配送 • 持证危化品经营商'
    }
  ]

  // 图标映射函数，支持API数据中的字符串图标
  const getIconComponent = (iconName) => {
    const iconMap = {
      'TruckOutlined': <TruckOutlined />,
      'RocketOutlined': <RocketOutlined />,
      'SafetyOutlined': <SafetyOutlined />
    }
    return iconMap[iconName] || <TruckOutlined />
  }

  const services = (apiServices || [
    {
      icon: <TruckOutlined />,
      title: '批量配送',
      desc: '专业的柴油批量配送服务，最小订单500升，覆盖整个区域。',
      link: '/products#delivery'
    },
    {
      icon: <RocketOutlined />,
      title: '现场加油',
      desc: '24/7现场加油车服务，为工地、物流中心、车队运营提供便利。',
      link: '/products#onsite'
    },
    {
      icon: <SafetyOutlined />,
      title: '应急供应',
      desc: '2小时应急响应服务，确保您的运营永不因燃料短缺而停止。',
      link: '/products#emergency'
    }
  ]).map(service => ({
    ...service,
    // 如果API返回的是字符串图标，转换为组件
    icon: typeof service.icon === 'string' ? getIconComponent(service.icon) : service.icon
  }))

  const testimonials = apiTestimonials || [
    {
      content: '天骏石化的配送服务非常及时可靠，他们的专业团队确保我们的施工现场从不缺油。24小时应急服务更是解决了我们的后顾之忧。',
      author: '张总',
      company: '建设集团',
      rating: 5,
      avatar: 'Z'
    },
    {
      content: '作为物流公司，燃油质量和供应稳定性对我们至关重要。天骏石化的0#柴油质量稳定，价格透明，是我们长期合作的可靠伙伴。',
      author: '李经理',
      company: '运输有限公司',
      rating: 5,
      avatar: 'L'
    },
    {
      content: '农业机械对燃油要求很高，天骏石化提供的柴油不仅质量好，而且他们的技术人员还会定期回访，提供专业的燃油管理建议。',
      author: '王农户',
      company: '农业合作社',
      rating: 5,
      avatar: 'W'
    }
  ]

  const newsData = apiNewsData || [
    {
      id: 1,
      title: '天骏石化与多家大型物流企业签署年度供油协议',
      excerpt: '近日，天骏石化成功与区域内多家知名物流企业签署2024年度燃油供应协议，进一步巩固了在商用车燃油市场的领先地位...',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-20',
      category: '业务拓展'
    },
    {
      id: 2,
      title: '公司获得ISO 14001环境管理体系认证续期',
      excerpt: '天骏石化顺利通过ISO 14001环境管理体系认证复审，这标志着公司在环境保护和可持续发展方面的持续努力得到了权威认可...',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-15',
      category: '企业资质'
    },
    {
      id: 3,
      title: '应急演练：2小时响应承诺的坚实保障',
      excerpt: '为确保应急供油服务质量，公司定期组织应急演练。本次演练模拟了极端天气下的紧急供油需求，全程用时1小时38分钟...',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '2024-01-10',
      category: '安全管理'
    }
  ]

  // 事件处理函数
  const handleQuickQuote = () => {
    setQuickQuoteVisible(true)
  }

  const handleOrderTracking = () => {
    setOrderTrackingVisible(true)
  }

  const handlePriceDetail = () => {
    setPriceDetailVisible(true)
  }

  const handleServiceClick = (service) => {
    if (service.link) {
      navigate(service.link)
    } else {
      navigate('/products')
    }
  }

  const handleNewsClick = (newsItem) => {
    navigate(`/news/${newsItem.id}`)
  }

  const handleQuickQuoteSubmit = async (values) => {
    try {
      const quoteData = {
        ...values,
        source: 'homepage_banner',
        timestamp: new Date().toISOString()
      }
      
      const response = await api.home.quickQuote(quoteData)
      
      if (response) {
        message.success('询价请求提交成功！我们将在24小时内联系您。')
        setQuickQuoteVisible(false)
        form.resetFields()
      }
    } catch (error) {
      message.error('提交失败，请稍后重试。')
    }
  }

  const handleOrderTrackingSubmit = async (values) => {
    try {
      const response = await api.orders.getTracking(values.orderId)
      
      if (response) {
        message.success('订单查询成功！')
      }
    } catch (error) {
      message.error('订单查询失败，请检查订单号是否正确。')
    }
  }

  return (
    <StyledHome>
      <Helmet>
        <title>舟山天骏石油化工有限公司 - 专业0#柴油供应商</title>
        <meta name="description" content="天骏石化是第三代家族经营的石化公司，专业从事0#柴油的销售、储存和分销。提供批量配送、现场加油、应急供应等专业服务。" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection 
        heroSlides={heroSlides}
        onQuickQuote={handleQuickQuote}
        onOrderTracking={handleOrderTracking}
      />

      {/* Trust Bar */}
      <TrustBar />

      {/* Services Section */}
      <ServicesSection 
        services={services}
        onServiceClick={handleServiceClick}
      />

      {/* Interactive Map */}
      <MapSection />

      {/* Customer Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* News Teaser */}
      <NewsSection 
        newsData={newsData}
        onNewsClick={handleNewsClick}
      />

      {/* 实时价格显示 */}
      <PriceWidget 
        dieselPrice={dieselPrice}
        onClick={handlePriceDetail}
      />

      {/* 模态框 */}
      <QuickQuoteModal
        visible={quickQuoteVisible}
        onCancel={() => setQuickQuoteVisible(false)}
        onSubmit={handleQuickQuoteSubmit}
        form={form}
      />

      <OrderTrackingModal
        visible={orderTrackingVisible}
        onCancel={() => setOrderTrackingVisible(false)}
        onSubmit={handleOrderTrackingSubmit}
        form={trackingForm}
      />

      <PriceDetailModal
        visible={priceDetailVisible}
        onCancel={() => setPriceDetailVisible(false)}
        onQuote={() => {
          setPriceDetailVisible(false)
          setQuickQuoteVisible(true)
        }}
        dieselPrice={dieselPrice}
      />
    </StyledHome>
  )
}

export default Home