import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
// API集成导入
import { useAPI } from '../hooks/useAPI'
import api from '../services/api'
// 导入模块化组件
import {
  HeroSection,
  DevelopmentTimeline,
  ValuesSection,
  FleetSection,
  LeadershipSection,
  CTASection
} from '../components/About'
// 样式导入
import { StyledAbout } from '../styles/pages/AboutStyles'

const About = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const navigate = useNavigate()
  
  // API数据获取 - 保持向后兼容的回退机制
  const { data: apiCompanyInfo } = useAPI(api.about.getCompanyInfo, { immediate: true })
  const { data: apiCoreValues } = useAPI(api.about.getCoreValues, { immediate: true })
  const { data: apiFleetStorage } = useAPI(api.about.getFleetStorage, { immediate: true })
  const { data: apiLeadershipTeam } = useAPI(api.about.getLeadershipTeam, { immediate: true })
  
  // 检测用户是否偏好减少动画
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)
    
    const handleChange = (e) => setIsReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])  

  return (
    <StyledAbout>
      <Helmet>
        <title>关于我们 - 舟山天骏石油化工有限公司</title>
        <meta name="description" content="天骏石化成立于1990年，是一家第三代家族经营的石化企业，专业从事0#柴油供应服务，拥有34年行业经验，服务500+企业客户。" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection isReducedMotion={isReducedMotion} />

      {/* Development History */}
      <DevelopmentTimeline />

      {/* Values */}
      <ValuesSection apiCoreValues={apiCoreValues} />

      {/* Fleet */}
      <FleetSection apiFleetStorage={apiFleetStorage} />

      {/* Leadership */}
      <LeadershipSection apiLeadershipTeam={apiLeadershipTeam} />

      {/* CTA */}
      <CTASection />
    </StyledAbout>
  )
}

export default About