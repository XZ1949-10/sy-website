import React from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CultureVideoWrapper } from './styles'

const CultureVideo = ({ handleVideoPlay }) => {
  const { ref: videoRef, inView: videoInView } = useInView({ threshold: 0.1 })

  return (
    <CultureVideoWrapper className="culture-video" ref={videoRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={videoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '3rem', 
            fontSize: '2.5rem', 
            fontWeight: '700',
            color: 'var(--color-text-primary)'
          }}>
            企业文化
          </h2>
          <div className="video-placeholder" onClick={handleVideoPlay}>
            <PlayCircleOutlined className="play-icon" />
            <div className="video-title">了解天骏石化企业文化</div>
          </div>
        </motion.div>
      </div>
    </CultureVideoWrapper>
  )
}

export default CultureVideo
