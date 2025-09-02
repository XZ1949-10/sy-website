/**
 * Common组件样式定义
 */
import styled from 'styled-components'
import { Card } from 'antd'

// Product Card 样式
export const StyledProductCard = styled(Card)`
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .product-cover {
    position: relative;
    height: 200px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    
    .cover-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    &:hover .cover-image {
      transform: scale(1.05);
    }
    
    .service-tag {
      position: absolute;
      top: 12px;
      right: 12px;
      z-index: 2;
    }
  }
  
  .product-content {
    .product-title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
      color: var(--color-text);
      line-height: 1.4;
      
      &:hover {
        color: var(--color-primary);
      }
    }
    
    .product-subtitle {
      color: var(--color-text-secondary);
      font-size: 14px;
      margin-bottom: 16px;
      line-height: 1.5;
    }
    
    .product-specs {
      margin-bottom: 16px;
      
      .spec-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 0;
        border-bottom: 1px solid var(--color-border);
        
        &:last-child {
          border-bottom: none;
        }
        
        .spec-label {
          font-size: 13px;
          color: var(--color-text-secondary);
        }
        
        .spec-value {
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text);
        }
      }
    }
    
    .product-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      
      .price-current {
        font-size: 20px;
        font-weight: 700;
        color: var(--color-primary);
      }
      
      .price-unit {
        font-size: 12px;
        color: var(--color-text-secondary);
        margin-left: 4px;
      }
      
      .price-trend {
        font-size: 12px;
        
        &.up {
          color: var(--color-success);
        }
        
        &.down {
          color: var(--color-error);
        }
      }
    }
    
    .product-actions {
      display: flex;
      gap: 8px;
      
      .ant-btn {
        flex: 1;
        height: 36px;
        font-size: 14px;
        border-radius: 6px;
      }
    }
  }
`

// News Card 样式
export const StyledNewsCard = styled(Card)`
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .news-cover {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
  
  .news-content {
    padding: 20px;
    
    .news-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      
      .news-date {
        color: var(--color-text-secondary);
        font-size: 12px;
      }
      
      .news-category {
        font-size: 12px;
      }
    }
    
    .news-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
      color: var(--color-text);
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      
      &:hover {
        color: var(--color-primary);
      }
    }
    
    .news-excerpt {
      color: var(--color-text-secondary);
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 16px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .news-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      .news-author {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--color-text-secondary);
        font-size: 12px;
      }
      
      .news-link {
        color: var(--color-primary);
        font-weight: 500;
        font-size: 14px;
        text-decoration: none;
        
        &:hover {
          color: var(--color-primary-dark);
        }
      }
    }
  }
`

// Service Card 样式
export const StyledServiceCard = styled(Card)`
  height: 100%;
  text-align: center;
  border-radius: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
  
  .service-icon {
    font-size: 48px;
    color: var(--color-primary);
    margin-bottom: 20px;
    
    .anticon {
      transition: transform 0.3s ease;
    }
  }
  
  &:hover .service-icon .anticon {
    transform: scale(1.1);
  }
  
  .service-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--color-text);
  }
  
  .service-desc {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 14px;
  }
  
  .service-features {
    list-style: none;
    padding: 0;
    margin-bottom: 24px;
    
    li {
      padding: 4px 0;
      color: var(--color-text-secondary);
      font-size: 13px;
      
      &:before {
        content: '✓';
        color: var(--color-success);
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }
  
  .service-link {
    color: var(--color-primary);
    font-weight: 500;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      color: var(--color-primary-dark);
    }
  }
`

// Testimonial Card 样式
export const StyledTestimonialCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .testimonial-content {
    flex: 1;
    font-size: 16px;
    line-height: 1.8;
    color: var(--color-text-secondary);
    margin-bottom: 24px;
    font-style: italic;
    position: relative;
    
    &:before {
      content: '"';
      font-size: 48px;
      color: var(--color-primary);
      position: absolute;
      top: -20px;
      left: 0;
      opacity: 0.3;
    }
    
    &:after {
      content: '"';
      font-size: 48px;
      color: var(--color-primary);
      position: absolute;
      bottom: -20px;
      right: 0;
      opacity: 0.3;
    }
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    
    .author-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid var(--color-primary);
    }
    
    .author-info {
      text-align: left;
      
      .author-name {
        font-size: 16px;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: 4px;
      }
      
      .author-title {
        font-size: 14px;
        color: var(--color-text-secondary);
      }
    }
  }
`

// Error Boundary 样式
export const StyledErrorBoundary = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  
  .error-icon {
    font-size: 64px;
    color: var(--color-error);
    margin-bottom: 24px;
  }
  
  .error-title {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 16px;
  }
  
  .error-message {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 500px;
  }
  
  .error-actions {
    display: flex;
    gap: 16px;
    
    .ant-btn {
      height: 40px;
      padding: 0 24px;
      border-radius: 8px;
    }
  }
  
  @media (max-width: 768px) {
    .error-actions {
      flex-direction: column;
      width: 100%;
      max-width: 300px;
    }
  }
`

// ECharts Network Map 样式
export const StyledEChartsMap = styled.div`
  .echarts-map-container {
    width: 100%;
    height: 800px;
    position: relative;
    background: 
      radial-gradient(ellipse at 25% 15%, rgba(255, 215, 0, 0.08) 0%, transparent 40%),
      radial-gradient(ellipse at 75% 85%, rgba(0, 150, 255, 0.12) 0%, transparent 45%),
      radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.06) 0%, transparent 60%),
      linear-gradient(135deg, 
        #0a0e27 0%, 
        #1a1f3a 15%, 
        #2d3561 30%, 
        #1e2749 45%, 
        #0f1429 60%, 
        #1c2951 75%, 
        #0d1b2a 90%, 
        #0a0e27 100%);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 
      0 30px 60px rgba(0, 0, 0, 0.4),
      0 15px 35px rgba(0, 0, 0, 0.3),
      0 0 120px rgba(0, 76, 151, 0.15),
      0 0 80px rgba(255, 215, 0, 0.08),
      inset 0 0 120px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 2px solid;
    border-image: linear-gradient(135deg, 
      rgba(255, 215, 0, 0.3) 0%, 
      rgba(0, 150, 255, 0.2) 25%, 
      rgba(138, 43, 226, 0.15) 50%, 
      rgba(0, 150, 255, 0.2) 75%, 
      rgba(255, 215, 0, 0.3) 100%) 1;
    backdrop-filter: blur(15px) saturate(1.2);
  }

  .map-info {
    position: absolute;
    top: 30px;
    right: 30px;
    background: rgba(0, 20, 40, 0.95);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    padding: 24px;
    color: white;
    min-width: 280px;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.6),
      0 0 60px rgba(0, 150, 255, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(0, 150, 255, 0.3);
  }

  .map-legend {
    position: absolute;
    bottom: 30px;
    left: 30px;
    background: rgba(0, 20, 40, 0.95);
    backdrop-filter: blur(15px);
    border-radius: 16px;
    padding: 20px;
    color: white;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.6),
      0 0 60px rgba(255, 215, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
  }

  .legend-item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: 14px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    .legend-color {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 12px;
      box-shadow: 0 0 10px currentColor;
    }
  }

  .map-controls {
    position: absolute;
    top: 30px;
    left: 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    .ant-btn {
      background: rgba(0, 20, 40, 0.9);
      border: 1px solid rgba(0, 150, 255, 0.3);
      color: white;
      backdrop-filter: blur(10px);
      
      &:hover {
        background: rgba(0, 150, 255, 0.2);
        border-color: rgba(0, 150, 255, 0.5);
        color: white;
      }
    }
  }

  .location-modal {
    .ant-modal-content {
      background: linear-gradient(135deg, 
        rgba(0, 20, 40, 0.98) 0%, 
        rgba(10, 30, 60, 0.95) 100%);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 150, 255, 0.3);
      box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.8),
        0 0 100px rgba(0, 150, 255, 0.3);
    }
    
    .ant-modal-header {
      background: transparent;
      border-bottom: 1px solid rgba(0, 150, 255, 0.2);
      
      .ant-modal-title {
        color: white;
        font-size: 20px;
        font-weight: 600;
      }
    }
    
    .ant-modal-body {
      color: white;
      
      .ant-descriptions {
        .ant-descriptions-item-label {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .ant-descriptions-item-content {
          color: white;
        }
      }
      
      .ant-card {
        background: rgba(0, 40, 80, 0.6);
        border: 1px solid rgba(0, 150, 255, 0.2);
        
        .ant-card-body {
          color: white;
        }
      }
      
      .ant-statistic {
        .ant-statistic-title {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .ant-statistic-content {
          color: #00d4ff;
        }
      }
    }
    
    .ant-modal-close {
      color: rgba(255, 255, 255, 0.7);
      
      &:hover {
        color: white;
      }
    }
  }

  @media (max-width: 1200px) {
    .echarts-map-container {
      height: 600px;
    }
    
    .map-info {
      position: static;
      margin: 20px;
      width: calc(100% - 40px);
    }
    
    .map-legend {
      position: static;
      margin: 20px;
      width: calc(100% - 40px);
    }
  }

  @media (max-width: 768px) {
    .echarts-map-container {
      height: 400px;
      border-radius: 12px;
    }
    
    .map-controls {
      flex-direction: row;
      top: 15px;
      left: 15px;
      
      .ant-btn {
        padding: 4px 8px;
        font-size: 12px;
      }
    }
  }
`