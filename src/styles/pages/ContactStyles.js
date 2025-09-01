import styled from 'styled-components'

export const StyledContact = styled.div`
  .hero-section {
    background: url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    min-height: 70vh;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1;
    }
    
    .hero-content {
      position: relative;
      z-index: 2;
    }
    
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
      opacity: 0.95;
      max-width: 700px;
      margin: 0 auto var(--spacing-xl);
      line-height: 1.6;
    }
    
    .hero-features {
      display: flex;
      justify-content: center;
      gap: var(--spacing-2xl);
      margin-top: var(--spacing-xl);
      
      .feature-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        font-size: var(--font-size-base);
        opacity: 0.9;
        
        .feature-icon {
          font-size: var(--font-size-lg);
          color: var(--color-secondary);
        }
      }
      
      @media (max-width: 768px) {
        flex-direction: column;
        gap: var(--spacing-md);
      }
    }
  }
  
  .contact-section {
    padding: var(--spacing-5xl) 0;
    background: var(--color-bg-secondary);
    
    .contact-form-card {
      border-radius: var(--border-radius-2xl);
      border: none;
      box-shadow: var(--shadow-xl);
      padding: var(--spacing-3xl);
      background: linear-gradient(135deg, #ffffff 0%, #f8faff 100%);
      
      .form-title {
        font-size: var(--font-size-3xl);
        font-weight: 700;
        color: var(--color-primary);
        margin-bottom: var(--spacing-sm);
        text-align: center;
        
        &::after {
          content: '';
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--color-secondary) 0%, var(--color-primary) 100%);
          margin: var(--spacing-lg) auto 0;
          border-radius: var(--border-radius-base);
        }
      }
      
      .form-subtitle {
        color: var(--color-text-secondary);
        text-align: center;
        margin-bottom: var(--spacing-2xl);
        font-size: var(--font-size-lg);
      }
      
      .input-wrapper {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .input-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, rgba(0, 76, 151, 0.1), rgba(0, 76, 151, 0.05));
        border-radius: 12px;
        color: var(--color-primary);
        font-size: 20px;
        transition: all 0.3s ease;
        border: 2px solid rgba(0, 76, 151, 0.1);
      }
      
      .ant-input, .ant-select {
        height: 56px;
        border-radius: 16px;
        border: 2px solid rgba(0, 76, 151, 0.15);
        font-size: 16px;
        flex: 1;
        
        &:focus, &:hover {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 4px rgba(0, 76, 151, 0.1);
        }
      }
      
      .input-wrapper:focus-within .input-icon {
        background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
        color: white;
        transform: scale(1.05);
      }
    }
    
    .contact-info-card {
      border-radius: var(--border-radius-2xl);
      border: none;
      box-shadow: var(--shadow-xl);
      padding: var(--spacing-3xl);
      background: white;
      
      .info-title {
        font-size: var(--font-size-3xl);
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: var(--spacing-2xl);
        text-align: center;
        
        &::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: var(--color-secondary);
          margin: var(--spacing-lg) auto 0;
          border-radius: var(--border-radius-base);
        }
      }
      
      .contact-item {
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-lg);
        margin-bottom: var(--spacing-xl);
        padding: var(--spacing-lg);
        border-radius: var(--border-radius-lg);
        background: var(--color-bg-tertiary);
        transition: all var(--transition-normal);
        
        &:hover {
          background: rgba(0, 76, 151, 0.05);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        
        .contact-icon {
          font-size: var(--font-size-2xl);
          color: var(--color-primary);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 76, 151, 0.1);
          border-radius: 50%;
        }
        
        .contact-content {
          flex: 1;
          
          .contact-label {
            font-weight: 700;
            color: var(--color-text-primary);
            margin-bottom: var(--spacing-xs);
            font-size: var(--font-size-lg);
          }
          
          .contact-value {
            color: var(--color-text-secondary);
            line-height: 1.6;
          }
        }
      }
      
      .emergency-contact {
        background: linear-gradient(135deg, var(--color-warning) 0%, #ff9800 100%);
        color: white;
        
        .contact-icon {
          color: white;
          background: rgba(255, 255, 255, 0.2);
        }
        
        .contact-content {
          .contact-label {
            color: white;
          }
          
          .contact-value {
            color: rgba(255, 255, 255, 0.9);
          }
        }
      }
    }
  }
  
  .map-section {
    padding: var(--spacing-5xl) 0;
    background: white;
    
    .section-title {
      font-size: var(--font-size-4xl);
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-lg);
      text-align: center;
    }
    
    .section-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto var(--spacing-4xl);
      text-align: center;
      line-height: 1.6;
    }
    
    .map-container {
      border-radius: var(--border-radius-2xl);
      box-shadow: var(--shadow-xl);
      height: 500px;
      background: linear-gradient(135deg, var(--color-cloud-gray) 0%, var(--color-light-gray) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid var(--color-primary);
      
      .map-placeholder {
        text-align: center;
        color: var(--color-text-secondary);
        
        .map-icon {
          font-size: 4rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-lg);
        }
        
        .map-text {
          font-size: var(--font-size-xl);
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-primary);
        }
      }
    }
  }
  
  .services-section {
    padding: 100px 0;
    background: #ffffff;
    position: relative;
    
    .service-card {
      border-radius: 20px;
      border: none;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      transition: all 0.4s ease;
      background: white;
      padding: 32px 24px;
      height: 450px;
      display: flex;
      flex-direction: column;
      
      &:hover {
        transform: translateY(-12px);
        box-shadow: 0 20px 60px rgba(59, 130, 246, 0.25);
      }
      
      .service-icon {
        font-size: 52px;
        color: var(--color-primary);
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        height: 80px;
        align-items: center;
      }
      
      .service-title {
        font-size: 20px;
        font-weight: 700;
        color: var(--color-text-primary);
        margin-bottom: 18px;
        text-align: center;
      }
      
      .service-desc {
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: 32px;
        font-size: 14px;
        text-align: center;
        flex-grow: 1;
      }
      
      .service-hours {
        background: linear-gradient(135deg, rgba(5, 150, 105, 0.1), rgba(16, 185, 129, 0.1));
        padding: 14px 20px;
        border-radius: 25px;
        font-size: 13px;
        color: #059669;
        font-weight: 600;
        text-align: center;
        border: 2px solid rgba(5, 150, 105, 0.2);
      }
    }
  }
  
  .office-hours {
    padding: 120px 0;
    background: #ffffff;
    
    .hours-title {
      font-size: 42px;
      font-weight: 800;
      color: var(--color-primary);
      margin-bottom: 20px;
      text-align: center;
    }
    
    .hours-subtitle {
      font-size: 18px;
      color: var(--color-text-secondary);
      text-align: center;
      margin-bottom: 60px;
      line-height: 1.6;
    }
    
    .hours-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      max-width: 1200px;
      margin: 0 auto;
      
      .hours-item {
        background: white;
        border-radius: 20px;
        padding: 32px 24px;
        border: 2px solid #e2e8f0;
        transition: all 0.4s ease;
        text-align: center;
        box-shadow: var(--shadow-base);
        
        &:hover {
          transform: translateY(-8px);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-xl);
        }
        
        .hours-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: rgba(37, 99, 235, 0.1);
          
          .anticon {
            font-size: 28px;
            color: var(--color-primary);
          }
        }
        
        .hours-label {
          font-size: 18px;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 12px;
        }
        
        .hours-value {
          font-size: 16px;
          color: var(--color-text-secondary);
          line-height: 1.5;
        }
      }
    }
  }
`