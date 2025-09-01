import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SafetyOutlined, 
  TrophyOutlined, 
  EnvironmentOutlined,
  RocketOutlined,
  HeartOutlined,
  TeamOutlined
} from '@ant-design/icons'

const ValuesSection = ({ apiCoreValues = null }) => {
  const { ref: valuesRef, inView: valuesInView } = useInView({ threshold: 0.1 })

  const values = (Array.isArray(apiCoreValues) ? apiCoreValues : null) || [
    {
      icon: <SafetyOutlined className="safety" />,
      title: '安全第一',
      desc: '严格遵守安全生产规范，建立完善的HSE管理体系，确保每一次作业的安全性。'
    },
    {
      icon: <TrophyOutlined className="reliability" />,
      title: '可靠服务',
      desc: '34年诚信经营，建立了良好的市场信誉，为客户提供稳定可靠的燃油供应服务。'
    },
    {
      icon: <EnvironmentOutlined className="green" />,
      title: '绿色未来',
      desc: '致力于环境保护，推动清洁能源发展，为可持续发展贡献力量。'
    },
    {
      icon: <HeartOutlined className="family" />,
      title: '家族精神',
      desc: '三代传承的家族企业，以诚待人，以信立业，传承家族企业文化。'
    },
    {
      icon: <RocketOutlined className="innovation" />,
      title: '创新发展',
      desc: '持续技术创新和管理创新，提升服务质量和运营效率，引领行业发展。'
    },
    {
      icon: <TeamOutlined className="cooperation" />,
      title: '合作共赢',
      desc: '与客户、供应商建立长期战略合作关系，实现互利共赢的可持续发展。'
    }
  ]

  return (
    <section className="values-section" ref={valuesRef}>
      <div className="container">
        <motion.div
          className="values-header"
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="values-badge">
            <span className="badge-text">CORE VALUES</span>
          </div>
          <h2 className="values-main-title">核心价值观</h2>
          <p className="values-main-subtitle">
            指导我们行为的核心原则和价值理念，塑造企业文化的基石
          </p>
        </motion.div>

        <div className="values-grid">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="modern-value-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={valuesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="value-icon-wrapper">
                  <div className="icon-bg"></div>
                  <div className="value-icon-modern">{value.icon}</div>
                </div>
                <div className="card-text">
                  <h3 className="value-title-modern">{value.title}</h3>
                  <p className="value-desc-modern">{value.desc}</p>
                </div>
              </div>
              <div className="card-border"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuesSection