import React from 'react'
import { Row, Col, Card, Statistic } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SafetyStatsWrapper } from './styles'

const SafetyStats = ({ safetyStats }) => {
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1 })

  return (
    <SafetyStatsWrapper className="section bg-light" ref={statsRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">安全统计</h2>
          <p className="section-subtitle">
            用数字说话，展现我们在安全管理方面的卓越表现
          </p>
        </motion.div>

        <Row gutter={[24, 24]}>
          {safetyStats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="stats-card">
                  <div className="stats-icon">{stat.icon}</div>
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </SafetyStatsWrapper>
  )
}

export default SafetyStats
