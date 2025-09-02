import React, { useState, useEffect } from 'react'
import { Layout, Menu, Button, Drawer, Space, Dropdown } from 'antd'
import { MenuOutlined, GlobalOutlined, PhoneOutlined, DownOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { StyledHeader, HeaderSpacer } from './styles'

const { Header: AntHeader } = Layout

const getMenuItems = () => [
  { key: '/', label: '首页' },
  { key: '/about', label: '关于我们' },
  { 
    key: '/products', 
    label: '产品与服务',
    children: [
      { key: '/products/center', label: '产品中心' },
      { key: '/products#services', label: '服务项目' },
      { key: '/products#pricing', label: '价格信息' }
    ]
  },
  { key: '/safety', label: '安全与合规' },
  { key: '/news', label: '新闻与见解' },
  { key: '/careers', label: '招聘信息' },
  { key: '/contact', label: '联系我们' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const [language, setLanguage] = useState('zh')
  const location = useLocation()
  const menuItems = getMenuItems()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  const handleMenuClick = () => {
    setMobileMenuVisible(false)
  }

  const handleMobileMenuToggle = () => {
    console.log('Mobile menu button clicked')
    setMobileMenuVisible(true)
  }

  const languageDropdown = {
    items: [
      {
        key: 'zh',
        label: '简体中文',
        onClick: () => setLanguage('zh')
      },
      {
        key: 'en',
        label: 'English',
        onClick: () => setLanguage('en')
      }
    ]
  }

  return (
    <>
      <StyledHeader className={scrolled ? 'scrolled' : ''}>
        <div className="header-content">
          <Link to="/" className="logo">
            <motion.div 
              className="logo-icon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              天骏
            </motion.div>
            <div className="logo-text">
              <span className="company-name">天骏石化</span>
              <span className="company-tagline">第三代家族企业 • 专业柴油供应</span>
            </div>
          </Link>

          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            className="nav-menu"
            items={menuItems.map(item => ({
              key: item.key,
              label: <Link to={item.key}>{item.label}</Link>
            }))}
          />

          <div className="header-actions">
            <div className="emergency-phone">
              <PhoneOutlined className="phone-icon" />
              <span>应急热线：400-XXX-XXXX</span>
            </div>
            
            <Dropdown menu={languageDropdown} trigger={['click']}>
              <Button
                type="text"
                icon={<GlobalOutlined />}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {language === 'zh' ? '中文' : 'EN'} <DownOutlined />
              </Button>
            </Dropdown>
            
            <Button 
              type="primary" 
              className="quote-btn"
              size="middle"
            >
              立即询价
            </Button>

            <Button
              type="text"
              icon={<MenuOutlined />}
              className="mobile-menu-btn"
              onClick={handleMobileMenuToggle}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '44px',
                minHeight: '44px',
                padding: 0,
                border: 'none',
                background: 'transparent',
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.1)',
                userSelect: 'none',
                transition: 'all 0.2s ease'
              }}
            />
          </div>
        </div>
      </StyledHeader>

      {/* 移动端菜单 */}
      <Drawer
        title="天骏石化导航"
        placement="right"
        onClose={() => setMobileMenuVisible(false)}
        open={mobileMenuVisible}
        width={300}
        zIndex={1002}
        styles={{
          wrapper: {
            zIndex: 1002
          },
          mask: {
            zIndex: 1001
          },
          content: {
            zIndex: 1002
          }
        }}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          inlineIndent={24}
          expandIconPosition="end"
          items={menuItems.map(item => {
            if (item.children) {
              return {
                key: item.key,
                label: item.label,
                type: 'submenu',
                children: item.children.map(child => ({
                  key: child.key,
                  label: <Link to={child.key}>{child.label}</Link>
                }))
              }
            }
            return {
              key: item.key,
              label: <Link to={item.key}>{item.label}</Link>
            }
          })}
        />
        
        <div style={{ padding: '20px 0', borderTop: '1px solid #f0f0f0', marginTop: '20px' }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
                应急热线
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                <PhoneOutlined /> 400-XXX-XXXX
              </div>
            </div>
            
            <Dropdown menu={languageDropdown} trigger={['click']}>
              <Button
                type="text"
                icon={<GlobalOutlined />}
                block
                style={{ textAlign: 'left' }}
              >
                语言切换：{language === 'zh' ? '中文' : 'English'} <DownOutlined />
              </Button>
            </Dropdown>
            
            <Button type="primary" block className="btn-primary">
              立即询价
            </Button>
          </Space>
        </div>
      </Drawer>

      {/* 占位符，防止内容被固定头部遮挡 */}
      <HeaderSpacer />
    </>
  )
}

export default Header