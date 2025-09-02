/**
 * Home组件样式定义
 */
import styled from 'styled-components'

// Hero Section 样式
export const StyledHeroSection = styled.section`
  .hero-section {
    height: 100vh;
    position: relative;
    overflow: hidden;
    
    .ant-carousel {
      height: 100%;
      
      .slick-slide {
        height: 100vh;
        
        > div {
          height: 100%;
        }
      }
    }
    
    .hero-slide {
      height: 100vh;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
      
      .hero-content {
        text-align: center;
        color: white;
        z-index: 2;
        position: relative;
        max-width: 900px;
        padding: 0 var(--spacing-lg);
        
        .hero-title {
          font-size: var(--font-size-6xl);
          font-weight: 700;
          margin-bottom: var(--spacing-xl);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          line-height: 1.2;
          
          @media (max-width: 576px) {
            font-size: var(--font-size-3xl);
            margin-bottom: var(--spacing-lg);
          }
          
          @media (max-width: 768px) {
            font-size: var(--font-size-4xl);
          }
        }
        
        .hero-subtitle {
          font-size: var(--font-size-xl);
          margin-bottom: var(--spacing-2xl);
          opacity: 0.95;
          line-height: 1.6;
          
          @media (max-width: 576px) {
            font-size: var(--font-size-base);
            margin-bottom: var(--spacing-lg);
          }
          
          @media (max-width: 768px) {
            font-size: var(--font-size-lg);
          }
        }
        
        .hero-features {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-2xl);
          
          .feature-item {
            display: flex;
            align-items: center;
            gap: var(--spacing-sm);
            font-size: var(--font-size-base);
            opacity: 0.9;
          }
          
          @media (max-width: 576px) {
            flex-direction: column;
            gap: var(--spacing-sm);
            
            .feature-item {
              font-size: var(--font-size-sm);
            }
          }
          
          @media (max-width: 768px) {
            flex-direction: column;
            gap: var(--spacing-md);
          }
        }
        
        .hero-cta {
          display: flex;
          justify-content: center;
          gap: var(--spacing-lg);
          
          .ant-btn {
            height: 55px;
            padding: 0 var(--spacing-2xl);
            font-size: var(--font-size-lg);
            font-weight: 600;
            border-radius: var(--border-radius-xl);
            
            @media (max-width: 768px) {
              padding: 0 var(--spacing-xl);
              font-size: var(--font-size-base);
            }
          }
          
          @media (max-width: 576px) {
            flex-direction: column;
            align-items: center;
            gap: var(--spacing-md);
            
            .ant-btn {
              width: 100%;
              max-width: 280px;
              height: 48px;
              padding: 0 var(--spacing-lg);
              font-size: var(--font-size-base);
            }
          }
          
          @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }
  }
`

// Map Section 样式
export const StyledMapSection = styled.section`
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

// Services Section 样式
export const StyledServicesSection = styled.section`
  padding: 80px 0;
  background: var(--color-background);
  
  .services-grid {
    margin-top: 60px;
  }
  
  .service-card {
    text-align: center;
    padding: 40px 20px;
    border-radius: 16px;
    background: white;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    height: 100%;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
    }
    
    .service-icon {
      font-size: 48px;
      color: var(--color-primary);
      margin-bottom: 24px;
    }
    
    .service-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
      color: var(--color-text);
    }
    
    .service-desc {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: 24px;
    }
    
    .service-link {
      color: var(--color-primary);
      font-weight: 500;
      text-decoration: none;
      
      &:hover {
        color: var(--color-primary-dark);
      }
    }
  }
`

// Map Section 样式
export const StyledMapSection = styled.section`
  padding: 80px 0;
  background: white;
  
  .map-container {
    margin-top: 40px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }
  
  .map-placeholder {
    height: 400px;
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--color-text-secondary);
    
    .map-icon {
      font-size: 64px;
      color: var(--color-primary);
      margin-bottom: 16px;
    }
    
    .map-text {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .map-address {
      font-size: 14px;
      opacity: 0.8;
    }
  }
`

// Testimonials Section 样式
export const StyledTestimonialsSection = styled.section`
  padding: 80px 0;
  background: var(--color-background);
  
  .testimonials-carousel {
    margin-top: 60px;
    
    .ant-carousel .slick-dots {
      bottom: -60px;
      
      li button {
        background: var(--color-primary);
        opacity: 0.3;
      }
      
      li.slick-active button {
        opacity: 1;
      }
    }
  }
  
  .testimonial-card {
    padding: 40px;
    margin: 0 12px;
    background: white;
    border-radius: 16px;
    box-shadow: var(--shadow-sm);
    text-align: center;
    
    .testimonial-content {
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-text-secondary);
      margin-bottom: 32px;
      font-style: italic;
    }
    
    .testimonial-author {
      .author-name {
        font-size: 18px;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: 4px;
      }
      
      .author-company {
        color: var(--color-text-secondary);
        font-size: 14px;
      }
    }
  }
`

// News Section 样式
export const StyledNewsSection = styled.section`
  padding: 80px 0;
  background: white;
  
  .news-grid {
    margin-top: 60px;
  }
  
  .news-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    height: 100%;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
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
      padding: 24px;
      
      .news-date {
        color: var(--color-text-secondary);
        font-size: 12px;
        margin-bottom: 8px;
      }
      
      .news-title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--color-text);
        line-height: 1.4;
        
        &:hover {
          color: var(--color-primary);
        }
      }
      
      .news-excerpt {
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
        margin-bottom: 16px;
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

// Price Widget 样式
export const StyledPriceWidget = styled.div`
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 1000;
  
  .price-widget {
    background: white;
    border-radius: 12px;
    box-shadow: var(--shadow-xl);
    padding: 20px;
    min-width: 280px;
    
    .widget-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      
      .widget-title {
        font-size: 16px;
        font-weight: 600;
        color: var(--color-text);
      }
      
      .widget-toggle {
        background: none;
        border: none;
        color: var(--color-text-secondary);
        cursor: pointer;
        padding: 4px;
        
        &:hover {
          color: var(--color-primary);
        }
      }
    }
    
    .price-list {
      .price-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid var(--color-border);
        
        &:last-child {
          border-bottom: none;
        }
        
        .price-name {
          font-size: 14px;
          color: var(--color-text);
        }
        
        .price-value {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-primary);
        }
      }
    }
    
    .widget-footer {
      margin-top: 16px;
      padding-top: 16px;
      border-top: 1px solid var(--color-border);
      text-align: center;
      
      .update-time {
        font-size: 12px;
        color: var(--color-text-secondary);
      }
    }
  }
  
  @media (max-width: 768px) {
    left: 16px;
    bottom: 16px;
    
    .price-widget {
      min-width: 240px;
      padding: 16px;
    }
  }
`

// 重复的StyledServicesSection定义已删除