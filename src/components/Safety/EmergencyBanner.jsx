import React from 'react'
import { PhoneOutlined } from '@ant-design/icons'
import { EmergencyBannerWrapper } from './styles'

const EmergencyBanner = () => {
  return (
    <EmergencyBannerWrapper className="emergency-banner">
      <div className="banner-title">24小时应急热线</div>
      <div className="banner-phone">
        <PhoneOutlined />
        400-XXX-XXXX
      </div>
    </EmergencyBannerWrapper>
  )
}

export default EmergencyBanner
