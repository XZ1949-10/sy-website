/**
 * MapSection组件 - 网络地图展示区域
 */
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import EChartsNetworkMap from '../Common/EChartsNetworkMap'

const StyledMapSection = styled.section`
  .map-section {
    background: var(--color-bg-secondary);
    padding: var(--spacing-5xl) 0;
    
    .map-container {
      background: white;
      border-radius: var(--border-radius-2xl);
      padding: var(--spacing-2xl);
      box-shadow: var(--shadow-lg);
      text-align: center;
      
      .map-placeholder {
        height: 400px;
        background: linear-gradient(135deg, var(--color-cloud-gray) 0%, var(--color-light-gray) 100%);
        border-radius: var(--border-radius-xl);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-secondary);
        font-size: var(--font-size-lg);
        margin-bottom: var(--spacing-lg);
      }
      
      .depot-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg);
        margin-top: var(--spacing-lg);
        
        .depot-item {
          text-align: left;
          padding: var(--spacing-md);
          background: var(--color-bg-secondary);
          border-radius: var(--border-radius-md);
          
          .depot-name {
            font-weight: 600;
            color: var(--color-primary);
            margin-bottom: var(--spacing-xs);
          }
          
          .depot-address {
            font-size: var(--font-size-sm);
            color: var(--color-text-secondary);
          }
        }
      }
    }
  }
`

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