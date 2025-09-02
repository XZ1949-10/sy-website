import React, { useState } from 'react'
import { Row, Col, message, QRCode } from 'antd'
import { Link } from 'react-router-dom'
import { StyledFooter } from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <StyledFooter>
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <div className="footer-section company-info">
              <div className="logo">
                <div className="logo-icon">TJ</div>
                <div className="logo-text">
                  <span className="company-name">天骏石化</span>
                  <span className="company-tagline">第三代家族企业</span>
                </div>
              </div>
              <p className="company-desc">
                天骏石化是一家第三代家族经营的石化公司，专业从事0#柴油的销售、储存和分销业务。
                我们致力于为客户提供可靠、高效的燃油解决方案。
              </p>
            </div>
          </Col>
          
          <Col xs={24} sm={8} md={4}>
            <div className="footer-section">
              <h3 className="footer-title">公司</h3>
              <ul className="footer-links">
                <li><Link to="/about">关于我们</Link></li>
                <li><Link to="/careers">加入我们</Link></li>
                <li><Link to="/news">新闻动态</Link></li>
                <li><Link to="/contact">联系我们</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} sm={8} md={4}>
            <div className="footer-section">
              <h3 className="footer-title">产品服务</h3>
              <ul className="footer-links">
                <li><Link to="/products">0#柴油</Link></li>
                <li><Link to="/products">批量配送</Link></li>
                <li><Link to="/products">现场加油</Link></li>
                <li><Link to="/products">应急供应</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} sm={8} md={4}>
            <div className="footer-section">
              <h3 className="footer-title">资源</h3>
              <ul className="footer-links">
                <li><Link to="/safety">安全与合规</Link></li>
                <li><Link to="/safety">安全数据表</Link></li>
                <li><Link to="/safety">应急预案</Link></li>
                <li><Link to="/products">下载中心</Link></li>
              </ul>
            </div>
          </Col>
          
          <Col xs={24} md={4}>
            <div className="footer-section qr-section">
              <h3 className="footer-title">关注我们</h3>
              <div className="qr-container">
                <QRCode 
                  value="https://www.tianjun-petro.com" 
                  size={100}
                  color="#000"
                  bgColor="#fff"
                  variant="borderless"
                />
                <p>扫码关注微信</p>
              </div>
            </div>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <div className="footer-links-bottom">
            <Link to="/privacy">隐私政策</Link>
            <Link to="/terms">使用条款</Link>
            <Link to="/sitemap">网站地图</Link>
          </div>
          <div className="footer-copyright">
            <span className="copyright-text">
              © {currentYear} 舟山天骏石油化工有限公司 版权所有
            </span>
            <span className="icp-text">
              <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
                浙ICP备12345678号-1
              </a>
            </span>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer