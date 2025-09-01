import styled from 'styled-components'

export const StyledNews = styled.div`
  .hero-section {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), 
                url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
    background-size: cover;
    background-position: center;
    min-height: 70vh;
    display: flex;
    align-items: center;
    color: white;
    position: relative;
    
    .hero-content {
      z-index: 2;
      text-align: center;
      
      .hero-title {
        font-size: var(--font-size-5xl);
        font-weight: 700;
        margin-bottom: var(--spacing-lg);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        
        @media (max-width: 768px) {
          font-size: var(--font-size-4xl);
        }
      }
      
      .hero-subtitle {
        font-size: var(--font-size-xl);
        margin-bottom: var(--spacing-2xl);
        opacity: 0.9;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  
  .filter-section {
    background: white;
    padding: 0;
    border-bottom: 1px solid var(--color-light-gray);
    
    .container {
      padding: 0;
      margin: 0;
      max-width: none;
      width: 100%;
    }
    
    .filter-container {
      display: flex;
      gap: var(--spacing-3xl);
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      height: 100%;
      min-height: 120px;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      
      .filter-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: var(--spacing-md);
        font-size: var(--font-size-lg);
        transform: scale(1.1);
        min-height: 44px;
        
        // 确保所有图标都在同一水平基线上
        .anticon {
          display: flex;
          align-items: center;
          height: 44px;
          line-height: 1;
          font-size: var(--font-size-lg);
        }
        
        .filter-label {
          font-weight: 600;
          color: var(--color-text-primary);
          white-space: nowrap;
          font-size: var(--font-size-lg);
          line-height: 44px;
          display: flex;
          align-items: center;
          height: 44px;
        }
        
        .ant-select {
          font-size: var(--font-size-base);
          margin-top: -4px;
          
          .ant-select-selector {
            height: 36px;
            padding: 0 var(--spacing-md);
            display: flex;
            align-items: center;
            
            .ant-select-selection-item {
              line-height: 1;
              font-size: var(--font-size-base);
              display: flex;
              align-items: center;
              height: 100%;
            }
          }
        }
        
        .ant-input-search {
          .ant-input {
            height: 44px;
            font-size: var(--font-size-base);
            padding: 0 var(--spacing-md);
            display: flex;
            align-items: center;
          }
          
          .ant-input-search-button {
            height: 44px;
            width: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .anticon {
              height: auto;
              font-size: var(--font-size-base);
            }
          }
        }
      }
      
      @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        
        .filter-item {
          justify-content: space-between;
        }
      }
    }
  }
  
  .news-grid {
    padding: var(--spacing-5xl) 0;
    
    .news-card {
      border-radius: var(--border-radius-xl);
      overflow: hidden;
      transition: all var(--transition-normal);
      background: white;
      box-shadow: var(--shadow-base);
      height: 520px;
      width: 100%;
      display: flex;
      flex-direction: column;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-xl);
      }
      
      .news-image {
        height: 240px;
        background-size: cover;
        background-position: center;
        position: relative;
        
        .news-category {
          position: absolute;
          top: var(--spacing-md);
          left: var(--spacing-md);
        }
        
        .news-date {
          position: absolute;
          bottom: var(--spacing-md);
          right: var(--spacing-md);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--border-radius-md);
          font-size: var(--font-size-sm);
        }
      }
      
      .news-content {
        padding: var(--spacing-lg);
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        .news-title {
          font-size: var(--font-size-lg);
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-primary);
          line-height: 1.4;
          height: 60px;
          min-height: 60px;
          max-height: 60px;
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
          line-height: 1.6;
          margin-bottom: var(--spacing-lg);
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 72px;
          min-height: 72px;
          max-height: 72px;
        }
        
        .news-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          min-height: 40px;
          
          .meta-left {
            display: flex;
            align-items: center;
            gap: var(--spacing-md);
            color: var(--color-text-tertiary);
            font-size: var(--font-size-sm);
            height: 100%;
            
            .meta-item {
              display: flex;
              align-items: center;
              gap: var(--spacing-xs);
              height: 100%;
            }
          }
          
          .meta-right {
            display: flex;
            gap: var(--spacing-sm);
            align-items: center;
            height: 100%;
            
            .action-btn {
              background: none;
              border: 1px solid var(--color-light-gray);
              color: var(--color-text-secondary);
              border-radius: var(--border-radius-md);
              padding: var(--spacing-xs) var(--spacing-sm);
              transition: all var(--transition-normal);
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              line-height: 1;
              
              &:hover {
                background: var(--color-primary);
                border-color: var(--color-primary);
                color: white;
              }
            }
          }
        }
      }
    }
  }
  
  .featured-news {
    background: var(--color-bg-secondary);
    padding: var(--spacing-5xl) 0;
    
    .featured-card {
      background: white;
      border-radius: var(--border-radius-2xl);
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      
      .featured-image {
        height: 300px;
        background-size: cover;
        background-position: center;
        position: relative;
        
        .featured-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: var(--spacing-2xl);
          color: white;
          
          .featured-category {
            margin-bottom: var(--spacing-sm);
          }
          
          .featured-title {
            font-size: var(--font-size-2xl);
            font-weight: 700;
            margin-bottom: var(--spacing-sm);
            line-height: 1.3;
          }
          
          .featured-excerpt {
            font-size: var(--font-size-base);
            opacity: 0.9;
            line-height: 1.6;
          }
        }
      }
    }
  }
  
  .newsletter-section {
    background: white;
    color: var(--color-text-primary);
    padding: var(--spacing-4xl) 0;
    text-align: center;
    border-top: 1px solid var(--color-light-gray);
    
    .newsletter-title {
      font-size: var(--font-size-3xl);
      font-weight: 700;
      margin-bottom: var(--spacing-lg);
      color: var(--color-text-primary);
    }
    
    .newsletter-subtitle {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-2xl);
      color: var(--color-text-secondary);
      opacity: 0.8;
    }
    
    .newsletter-form {
      max-width: 400px;
      margin: 0 auto;
      display: flex;
      gap: var(--spacing-md);
      
      @media (max-width: 768px) {
        flex-direction: column;
      }
      
      .ant-input {
        border-radius: var(--border-radius-lg);
        height: 50px;
        border: 2px solid var(--color-light-gray);
        font-size: var(--font-size-base);
        
        &:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
        }
      }
      
      .ant-btn {
        height: 50px;
        border-radius: var(--border-radius-lg);
        white-space: nowrap;
        background: var(--color-primary);
        border-color: var(--color-primary);
        font-weight: 600;
        font-size: var(--font-size-base);
        
        &:hover {
          background: var(--color-primary-dark, #1890ff);
          border-color: var(--color-primary-dark, #1890ff);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
        }
      }
    }
  }
`