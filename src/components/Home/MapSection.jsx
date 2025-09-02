/**
 * MapSection组件 - 网络地图展示区域
 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import EChartsNetworkMap from '../Common/EChartsNetworkMap'
import { StyledMapSection } from './styles'

const MapSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 })

  return (
    <StyledMapSection>
      <section className="map-section" ref={ref}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">全国服务网络</h2>
            <p className="section-subtitle">
              总部位于江西，分部遍布全国6省市，构建完整的燃油供应网络
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <EChartsNetworkMap />
          </motion.div>
        </div>
      </section>
    </StyledMapSection>
  )
}

export default MapSection