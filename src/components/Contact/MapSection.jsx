import React from 'react'
import { Row, Col, Card } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { EnvironmentOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { MapSectionWrapper } from './styles'

const MapSection = ({ locations }) => {
  const { ref: mapRef, inView: mapInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <MapSectionWrapper ref={mapRef}>
      <div className="container">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">我们的位置</h2>
            <p className="section-subtitle">
              覆盖舟山地区的服务网络，3个储油库 + 总部大楼，为您提供便捷的服务
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={mapInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="map-container">
            <div className="map-placeholder">
              <EnvironmentOutlined className="map-icon" />
              <div className="map-text">舟山市服务网络地图</div>
              <div className="map-address">浙江省舟山市定海区临城街道</div>
              <div style={{ marginTop: 'var(--spacing-md)', color: 'var(--color-primary)', fontWeight: 600 }}>
                3个储油库 • 1个总部 • 全市覆盖
              </div>
            </div>
          </div>
        </motion.div>
        
        <Row gutter={[24, 24]} className="location-cards">
          {locations.map((location, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={mapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="location-card">
                  <div className="location-header">
                    {location.icon}
                    <div className="location-title">{location.title}</div>
                    <div className="location-type">{location.type}</div>
                  </div>
                  <div className="location-content">
                    <div className="location-address">{location.address}</div>
                    <div className="location-contact">
                      <div className="contact-detail">
                        <PhoneOutlined />
                        <span>{location.phone}</span>
                      </div>
                      <div className="contact-detail">
                        <MailOutlined />
                        <span>{location.email}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </MapSectionWrapper>
  )
}

export default MapSection
