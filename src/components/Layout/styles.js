import styled from 'styled-components'
import { Layout } from 'antd'

const { Header: AntHeader } = Layout

// Header 样式
const StyledHeader = styled(AntHeader)`
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(229, 232, 235, 0.8);
  padding: 0 24px !important;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 70px !important;
  line-height: 70px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.scrolled {
    background: rgba(255, 255, 255, 0.98) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 76, 151, 0.2);
  }
  
  .header-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
  }
  
  .logo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-primary) !important;
    text-decoration: none;
    transition: all 0.3s ease;
    flex-shrink: 0;
    
    &:hover {
      color: var(--color-primary-dark) !important;
      transform: translateY(-1px);
    }
    
    .logo-icon {
      width: 48px;
      height: 48px;
      margin-right: 16px;
      background: linear-gradient(135deg, #004C97 0%, #336bb3 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
      box-shadow: 0 4px 12px rgba(0, 76, 151, 0.2);
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(0, 76, 151, 0.3);
      }
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
      
      .company-name {
        display: block;
        font-size: 1.5rem;
        line-height: 1.2;
        font-weight: 700;
        margin-bottom: 2px;
      }
      
      .company-tagline {
        display: block;
        font-size: 0.8rem;
        color: #6B7280;
        font-weight: 400;
        line-height: 1;
        opacity: 0.8;
      }
    }
  }
  
  .nav-menu {
    flex: 1;
    justify-content: center;
    border: none !important;
    background: transparent !important;
    line-height: 70px;
    
    .ant-menu-item {
      font-weight: 500;
      color: #1F2937;
      margin: 0 8px;
      border-radius: 6px;
      transition: all 0.3s ease;
      font-size: 15px;
      
      &:hover {
        color: #004C97 !important;
        background: rgba(0, 76, 151, 0.08) !important;
      }
      
      &.ant-menu-item-selected {
        color: #004C97 !important;
        background: rgba(0, 76, 151, 0.1) !important;
        
        &::after {
          display: none;
        }
      }
      
      a {
        color: inherit !important;
        text-decoration: none;
      }
    }
    
    .ant-menu-submenu {
      .ant-menu-submenu-title {
        font-weight: 500;
        color: #1F2937;
        margin: 0 8px;
        border-radius: 6px;
        transition: all 0.3s ease;
        font-size: 15px;
        
        &:hover {
          color: #004C97 !important;
          background: rgba(0, 76, 151, 0.08) !important;
        }
      }
    }
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    
    .emergency-phone {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #6B7280;
      font-size: 14px;
      font-weight: 500;
      
      .phone-icon {
        color: #FFD100;
        font-size: 16px;
      }
      
      @media (max-width: 1200px) {
        display: none;
      }
    }
    
    .quote-btn {
      background: #004C97 !important;
      border-color: #004C97 !important;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(0, 76, 151, 0.2);
      height: 36px;
      padding: 0 20px;
      border-radius: 6px;
      
      &:hover {
        background: #003d7a !important;
        border-color: #003d7a !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0, 76, 151, 0.3);
      }
    }
  }
  
  .mobile-menu-btn {
    display: none;
    position: relative;
    z-index: 1001;
    pointer-events: auto;
    
    .ant-btn {
      pointer-events: auto;
      cursor: pointer;
      touch-action: manipulation;
    }
  }
  
  @media (max-width: 1024px) {
    .nav-menu {
      display: none !important;
    }
    
    .header-actions .quote-btn {
      display: none;
    }
    
    .mobile-menu-btn {
      display: flex !important;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 6px;
      position: relative;
      z-index: 1001;
      pointer-events: auto;
      
      .ant-btn {
        pointer-events: auto;
        cursor: pointer;
        touch-action: manipulation;
        user-select: none;
      }
    }
  }
  
  @media (max-width: 576px) {
    padding: 0 16px !important;
    height: 60px !important;
    line-height: 60px !important;
    
    .header-content {
      height: 60px;
    }
    
    .logo {
      .logo-icon {
        width: 36px;
        height: 36px;
        font-size: 1rem;
        margin-right: 12px;
      }
      
      .logo-text .company-name {
        font-size: 1.1rem;
      }
      
      .logo-text .company-tagline {
        display: none;
      }
    }
    
    .mobile-menu-btn {
      .ant-btn {
        padding: 0;
        width: 40px;
        height: 40px;
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 20px !important;
    
    .logo {
      .logo-text .company-name {
        font-size: 1.3rem;
      }
      
      .logo-text .company-tagline {
        font-size: 0.75rem;
      }
    }
    
    .header-actions {
      gap: 12px;
    }
  }
  
  /* 全局占位符样式 */
  + .header-spacer {
    height: 70px;
    
    @media (max-width: 576px) {
      height: 60px;
    }
  }
`

// Header Spacer 样式
const HeaderSpacer = styled.div`
  height: 70px;
  transition: height 0.3s ease;
  
  @media (max-width: 576px) {
    height: 60px;
  }
`

// Footer 样式
const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: #fff;
  padding: 60px 0 0;
  margin-top: auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #3498db, transparent);
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .company-info {
    .logo {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 24px;

      .logo-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #3498db, #2980b9);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 18px;
        color: white;
        box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
      }

      .logo-text {
        display: flex;
        flex-direction: column;
        gap: 2px;

        .company-name {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
        }

        .company-tagline {
          font-size: 12px;
          color: #bbb;
          font-weight: 400;
        }
      }
    }

    .company-desc {
      color: #ccc;
      line-height: 1.6;
      margin: 0;
      font-size: 14px;
    }
  }

  .footer-title {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 8px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, #3498db, #2980b9);
      border-radius: 1px;
    }
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 12px;

      a {
        color: #ccc;
        text-decoration: none;
        font-size: 14px;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;

        &:hover {
          color: #3498db;
          transform: translateX(4px);
        }
      }
    }
  }

  .qr-section {
    .qr-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-md);
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);

      p {
        color: #ccc;
        font-size: 12px;
        margin: 0;
        text-align: center;
      }
    }
  }

  .footer-bottom {
    margin-top: 48px;
    padding: 24px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    .footer-links-bottom {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;

      a {
        color: #999;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.3s ease;

        &:hover {
          color: #3498db;
        }
      }
    }

    .footer-copyright {
      display: flex;
      align-items: center;
      gap: 16px;
      color: #999;
      font-size: 12px;
      flex-wrap: wrap;

      .copyright-text {
        white-space: nowrap;
      }

      .icp-text a {
        color: #999;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #3498db;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0 0;

    .footer-content {
      padding: 0 16px;
    }

    .company-info {
      .logo {
        .logo-icon {
          width: 40px;
          height: 40px;
          font-size: 16px;
        }

        .logo-text {
          .company-name {
            font-size: 20px;
          }

          .company-tagline {
            font-size: 11px;
          }
        }
      }

      .company-desc {
        font-size: 13px;
      }
    }

    .footer-title {
      font-size: 15px;
      margin-bottom: 16px;
    }

    .footer-links {
      li {
        margin-bottom: 10px;

        a {
          font-size: 13px;
        }
      }
    }

    .qr-section {
      .qr-container {
        padding: 16px;
        gap: var(--spacing-sm);

        p {
          font-size: 11px;
          margin: 0;
          flex: 1;
          text-align: left;
        }
      }
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin-top: 32px;
      padding-top: 20px;

      .footer-links-bottom {
        gap: 16px;

        a {
          font-size: 13px;
        }
      }

      .footer-copyright {
        font-size: 11px;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;

        .copyright-text {
          white-space: normal;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .qr-section {
      .qr-container {
        gap: var(--spacing-sm);

        p {
          font-size: 10px;
        }
      }
    }

    .footer-bottom {
      .footer-links-bottom {
        flex-direction: column;
        gap: 12px;

        a {
          font-size: 12px;
        }
      }

      .footer-copyright {
        font-size: 10px;
      }
    }
  }
`

export { StyledHeader, HeaderSpacer, StyledFooter }