import React from 'react'
import { Input, Button, message } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StyledNewsletterSubscription } from './styles'

const NewsletterSubscription = () => {
  const { ref: subscribeRef, inView: subscribeInView } = useInView({ threshold: 0.1 })

  const handleSubscribeNewsletter = (email) => {
    if (!email) {
      message.error('请输入邮箱地址')
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      message.error('请输入有效的邮箱地址')
      return
    }
    
    // 这里可以添加实际的订阅逻辑
    message.success('订阅成功！我们会定期向您发送最新资讯')
  }

  return (
    <StyledNewsletterSubscription>
      <section className="newsletter-section" ref={subscribeRef}>
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 30 }}
            animate={subscribeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="newsletter-header">
              <MailOutlined className="newsletter-icon" />
              <h3 className="newsletter-title">订阅我们的新闻通讯</h3>
              <p className="newsletter-description">
                第一时间获取天骏石化最新动态和行业资讯
              </p>
            </div>
            <div className="newsletter-form">
              <Input.Search
                placeholder="请输入您的邮箱地址"
                enterButton={<Button type="primary" className="btn-warning">立即订阅</Button>}
                size="large"
                onSearch={handleSubscribeNewsletter}
                style={{ maxWidth: 400 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </StyledNewsletterSubscription>
  )
}

export default NewsletterSubscription