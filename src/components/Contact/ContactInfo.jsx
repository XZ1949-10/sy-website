import React from 'react'
import { Card, Alert } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ContactInfo = ({ contactInfo }) => {
  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={contactRef}
      initial={{ opacity: 0, x: 30 }}
      animate={contactInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Card className="contact-info-card">
        <h3 className="info-title">联系信息</h3>
        
        {contactInfo.map((item, index) => (
          <div key={index} className={`contact-item ${item.emergency ? 'emergency-contact' : ''}`}>
            <div className="contact-icon">{item.icon}</div>
            <div className="contact-content">
              <div className="contact-label">{item.label}</div>
              <div className="contact-value">
                {item.value.split('\n').map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <Alert
          message="应急提示"
          description="如遇紧急情况，请直接拨打400-1234-567应急热线，我们将2小时内响应。"
          type="warning"
          showIcon
          style={{ marginTop: 'var(--spacing-lg)' }}
        />
      </Card>
    </motion.div>
  )
}

export default ContactInfo
