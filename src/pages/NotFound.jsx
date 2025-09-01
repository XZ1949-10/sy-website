import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { StyledNotFound } from '../styles/pages/NotFoundStyles'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <StyledNotFound>
      <div className="not-found-container">
        <div className="error-title">404</div>
        <div className="error-subtitle">页面未找到</div>
        <div className="error-description">
          抱歉，您访问的页面不存在或已被移动。
        </div>
        <div className="actions-container">
          <Button 
            type="primary" 
            icon={<HomeOutlined />}
            onClick={() => navigate('/')}
          >
            返回首页
          </Button>
          <Button onClick={() => navigate(-1)}>
            返回上一页
          </Button>
        </div>
      </div>
    </StyledNotFound>
  )
}

export default NotFound