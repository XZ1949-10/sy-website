import styled from 'styled-components'

export const StyledSafety = styled.div`
  .hero-section {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), 
                url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
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
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        
        @media (max-width: 768px) {
          font-size: 2.5rem;
        }
      }
      
      .hero-subtitle {
        font-size: 1.25rem;
        margin-bottom: 2rem;
        opacity: 0.9;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  
  .certification-card {
    text-align: center;
    padding: var(--spacing-xl);
    border-radius: var(--border-radius-xl);
    background: white;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    height: 100%;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-2xl);
    }
    
    .cert-logo {
      width: 80px;
      height: 80px;
      margin: 0 auto var(--spacing-lg);
      background: var(--color-cloud-gray);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      color: var(--color-primary);
    }
    
    .cert-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
      color: var(--color-text-primary);
    }
    
    .cert-desc {
      color: var(--color-text-secondary);
      line-height: 1.6;
      margin-bottom: var(--spacing-lg);
    }
    
    .cert-status {
      .ant-tag {
        border-radius: 20px;
        padding: 4px 12px;
        font-weight: 500;
      }
    }
  }
  
  .stats-card {
    background: white;
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-base);
    border-left: 4px solid var(--color-primary);
    
    .stats-icon {
      font-size: 2.5rem;
      color: var(--color-primary);
      margin-bottom: var(--spacing-md);
    }
    
    .ant-statistic {
      .ant-statistic-content {
        color: var(--color-primary);
        font-weight: 700;
      }
      
      .ant-statistic-title {
        color: var(--color-text-secondary);
        font-weight: 500;
      }
    }
  }
  
  .emergency-banner {
    background: linear-gradient(135deg, var(--color-error) 0%, #dc2626 100%);
    color: white;
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-xl);
    text-align: center;
    position: fixed;
    bottom: var(--spacing-lg);
    left: var(--spacing-lg);
    right: var(--spacing-lg);
    z-index: 1000;
    box-shadow: var(--shadow-xl);
    
    .banner-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
    }
    
    .banner-phone {
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-sm);
    }
    
    @media (max-width: 768px) {
      left: var(--spacing-md);
      right: var(--spacing-md);
      bottom: var(--spacing-md);
      
      .banner-phone {
        font-size: 1.25rem;
      }
    }
  }
  
  .policy-section {
    background: var(--color-bg-secondary);
    
    .policy-card {
      background: white;
      border-radius: var(--border-radius-xl);
      padding: var(--spacing-xl);
      text-align: center;
      box-shadow: var(--shadow-base);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
      }
      
      .policy-icon {
        font-size: 3rem;
        color: var(--color-primary);
        margin-bottom: var(--spacing-lg);
      }
      
      .policy-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: var(--spacing-md);
        color: var(--color-text-primary);
      }
      
      .policy-desc {
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: var(--spacing-lg);
      }
    }
  }
`