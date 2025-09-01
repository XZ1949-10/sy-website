import styled from 'styled-components'

export const StyledNewsDetail = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  
  .back-button {
    margin-bottom: 20px;
    
    .ant-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: var(--border-radius-lg);
      transition: all var(--transition-normal);
      
      &:hover {
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }
    }
  }
  
  .news-detail-card {
    border-radius: var(--border-radius-xl);
    box-shadow: var(--shadow-lg);
    
    .news-header {
      margin-bottom: 24px;
      
      .news-category {
        margin-bottom: 16px;
        
        .ant-tag {
          border-radius: var(--border-radius-md);
          padding: 4px 12px;
          font-weight: 500;
        }
      }
      
      .news-title {
        font-size: var(--font-size-4xl);
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: 8px;
        line-height: 1.3;
        
        @media (max-width: 768px) {
          font-size: var(--font-size-3xl);
        }
      }
      
      .news-subtitle {
        font-size: var(--font-size-xl);
        color: var(--color-text-secondary);
        font-weight: normal;
        margin-bottom: 24px;
        line-height: 1.5;
      }
      
      .news-meta {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-text-secondary);
          
          .anticon {
            color: var(--color-primary);
          }
        }
      }
      
      .news-tags {
        margin-bottom: 24px;
        
        .ant-tag {
          margin-right: 8px;
          margin-bottom: 8px;
          border-radius: var(--border-radius-md);
          padding: 4px 12px;
        }
      }
    }
    
    .divider {
      margin: 24px 0;
      border-color: var(--color-light-gray);
    }
    
    .news-image {
      height: 300px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 18px;
      margin-bottom: 32px;
      border-radius: var(--border-radius-lg);
      font-weight: 600;
      text-align: center;
    }
    
    .news-content {
      font-size: 16px;
      line-height: 1.8;
      color: var(--color-text-primary);
      
      .ant-typography {
        margin-bottom: 16px;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 20px 16px;
    
    .news-detail-card {
      .news-header {
        .news-meta {
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
      }
      
      .news-image {
        height: 200px;
        font-size: 16px;
      }
      
      .news-content {
        font-size: 15px;
      }
    }
  }
`