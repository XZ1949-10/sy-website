import React from 'react'
import { motion } from 'framer-motion'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {
  const navigate = useNavigate()

  const handleContactUs = () => {
    navigate('/contact')
  }

  return (
    <section className="cta-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cta-title">Join 500+ Fleet Partners</h2>
          <p className="cta-subtitle">
            成为我们的合作伙伴，享受专业的燃油供应服务
          </p>
          <div className="cta-buttons">
            <Button type="primary" size="large" className="btn-warning" onClick={() => navigate('/contact')}>
              立即询价
            </Button>
            <Button size="large" className="btn-secondary" ghost onClick={handleContactUs}>
              联系我们
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection