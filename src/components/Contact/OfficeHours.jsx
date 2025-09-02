import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  CustomerServiceOutlined, 
  DollarOutlined, 
  TeamOutlined, 
  AlertOutlined, 
  ToolOutlined, 
  SafetyOutlined 
} from '@ant-design/icons'
import { OfficeHoursWrapper } from './styles'

const OfficeHours = () => {
  const { ref: hoursRef, inView: hoursInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const hoursData = [
    {
      icon: <CustomerServiceOutlined />,
      label: '客服热线',
      value: '7×24小时全天候服务',
      delay: 0.1
    },
    {
      icon: <DollarOutlined />,
      label: '销售咨询',
      value: '周一至周六 8:00-18:00',
      delay: 0.2
    },
    {
      icon: <TeamOutlined />,
      label: '技术支持',
      value: '周一至周五 9:00-17:30',
      delay: 0.3
    },
    {
      icon: <AlertOutlined />,
      label: '应急响应',
      value: '2小时内快速响应',
      delay: 0.4
    },
    {
      icon: <ToolOutlined />,
      label: '设备维护',
      value: '周一至周日 24小时待命',
      delay: 0.5
    },
    {
      icon: <SafetyOutlined />,
      label: '安全监控',
      value: '全年无休安全保障',
      delay: 0.6
    }
  ]

  return (
    <OfficeHoursWrapper ref={hoursRef}>
      <div className="container">
        <div className="hours-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={hoursInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hours-title">服务时间</h2>
            <p className="hours-subtitle">全方位服务保障，随时为您提供专业支持</p>
            <div className="hours-grid">
              {hoursData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="hours-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoursInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: item.delay }}
                >
                  <div className="hours-icon">{item.icon}</div>
                  <div className="hours-label">{item.label}</div>
                  <div className="hours-value">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </OfficeHoursWrapper>
  )
}

export default OfficeHours
