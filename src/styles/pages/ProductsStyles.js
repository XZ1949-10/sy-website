import styled from 'styled-components'

export const StyledProducts = styled.div`
  .hero-section {
    background: transparent url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
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
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }
      
      .btn-primary {
        display: block;
        margin: 0 auto;
        width: fit-content;
      }
    }
  }
  
  .product-card {
    background: white;
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-base);
    transition: all var(--transition-normal);
    height: 100%;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }
    
    .product-header {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-lg);
      
      .product-icon {
        font-size: 3rem;
        color: var(--color-primary);
        margin-right: var(--spacing-md);
        padding: var(--spacing-md);
        background: rgba(0, 76, 151, 0.1);
        border-radius: var(--border-radius-lg);
      }
      
      .product-info {
        .product-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-xs);
        }
        
        .product-standard {
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }
      }
    }
  }
  
  .service-section {
    background: #ffffff;
    padding: var(--spacing-5xl) 0;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 20% 80%, rgba(0, 76, 151, 0.03) 0%, transparent 50%),
                  radial-gradient(circle at 80% 20%, rgba(0, 76, 151, 0.03) 0%, transparent 50%);
      pointer-events: none;
    }
  }
  
  .service-header {
    text-align: center;
    margin-bottom: var(--spacing-4xl);
    position: relative;
    z-index: 2;
    
    .service-badge {
      display: inline-block;
      background: linear-gradient(135deg, rgba(0, 76, 151, 0.1) 0%, rgba(0, 76, 151, 0.05) 100%);
      color: var(--color-primary);
      padding: 8px 24px;
      border-radius: 50px;
      font-size: var(--font-size-sm);
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: var(--spacing-lg);
      border: 1px solid rgba(0, 76, 151, 0.1);
      text-transform: uppercase;
    }
    
    .service-main-title {
      font-size: var(--font-size-4xl);
      font-weight: 700;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-md);
      background: linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      
      @media (max-width: 768px) {
        font-size: var(--font-size-3xl);
      }
    }
    
    .service-main-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
  
  .service-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-2xl);
    position: relative;
    z-index: 2;
  }
  
  .modern-service-card {
    background: #ffffff;
    border-radius: 24px;
    padding: var(--spacing-2xl);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    height: auto;
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &:hover {
      box-shadow: 0 20px 40px rgba(0, 76, 151, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
      border-color: rgba(0, 76, 151, 0.1);
      
      .card-glow-effect {
        opacity: 1;
      }
      
      .service-icon {
        transform: scale(1.1) rotate(5deg);
      }
      
      .service-number {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  
  .card-glow-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 76, 151, 0.02) 0%, rgba(0, 76, 151, 0.01) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 24px;
  }
  
  .service-icon-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: var(--spacing-lg);
    position: relative;
    z-index: 3;
  }
  
  .service-icon-bg {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &.service-1 {
      background: linear-gradient(135deg, rgba(0, 76, 151, 0.1) 0%, rgba(0, 76, 151, 0.05) 100%);
    }
    
    &.service-2 {
      background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
    }
    
    &.service-3 {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%);
    }
    
    &.service-4 {
      background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%);
    }
    
    &.service-5 {
      background: linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(139, 69, 19, 0.05) 100%);
    }
    
    &.service-6 {
      background: linear-gradient(135deg, rgba(75, 0, 130, 0.1) 0%, rgba(75, 0, 130, 0.05) 100%);
    }
  }
  
  .service-icon {
    font-size: 2.5rem;
    color: var(--color-primary);
    transition: all 0.3s ease;
  }
  
  .service-content {
    text-align: center;
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;
  }
  
  .service-number {
    position: absolute;
    top: -10px;
    right: 20px;
    font-size: var(--font-size-4xl);
    font-weight: 800;
    background: linear-gradient(135deg, rgba(0, 76, 151, 0.1) 0%, rgba(0, 76, 151, 0.05) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }
  
  .service-card-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-sm);
    line-height: 1.3;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .service-divider {
    width: 40px;
    height: 3px;
    background: linear-gradient(135deg, var(--color-primary) 0%, rgba(0, 76, 151, 0.6) 100%);
    margin: var(--spacing-md) auto;
    border-radius: 2px;
  }
  
  .service-description {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-lg);
    font-size: var(--font-size-base);
  }
  
  .service-features {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .feature-item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: var(--spacing-sm);
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      text-align: left;
      line-height: 1.4;
      width: 100%;
      max-width: 200px;
      
      .feature-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: var(--spacing-sm);
        flex-shrink: 0;
        
        .anticon {
          color: var(--color-success);
          font-size: 12px;
          line-height: 1;
        }
      }
      
      span {
        display: inline-block;
        line-height: 1.4;
        flex: 1;
      }
    }
  }
  
  .card-border-gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(135deg, rgba(0, 76, 151, 0.1) 0%, transparent 50%, rgba(0, 76, 151, 0.1) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: exclude;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .modern-service-card:hover .card-border-gradient {
    opacity: 1;
  }
  
  /* 响应式设计 */
  @media (max-width: 1024px) {
    .service-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-xl);
    }
    
    .service-header {
      .service-main-title {
        font-size: var(--font-size-3xl);
      }
      
      .service-main-subtitle {
        font-size: var(--font-size-base);
      }
    }
    
    .modern-service-card {
      min-height: 350px;
      padding: var(--spacing-xl);
    }
  }
  
  @media (max-width: 768px) {
    .service-section {
      padding: var(--spacing-4xl) 0;
    }
    
    .service-header {
      margin-bottom: var(--spacing-3xl);
      
      .service-badge {
        font-size: var(--font-size-xs);
        padding: 6px 18px;
      }
      
      .service-main-title {
        font-size: var(--font-size-2xl);
        margin-bottom: var(--spacing-sm);
      }
      
      .service-main-subtitle {
        font-size: var(--font-size-sm);
        padding: 0 var(--spacing-md);
      }
    }
    
    .service-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
    
    .modern-service-card {
      min-height: 320px;
      padding: var(--spacing-lg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      .service-icon-bg {
        width: 60px;
        height: 60px;
        border-radius: 16px;
      }
      
      .service-icon {
        font-size: 2rem;
      }
      
      .service-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex: 1;
      }
      
      .service-card-title {
        font-size: var(--font-size-lg);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      
      .service-number {
        font-size: var(--font-size-3xl);
        top: -5px;
        right: 15px;
      }
    }
  }
  
  .pricing-card {
    background: white;
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-2xl);
    box-shadow: var(--shadow-lg);
    text-align: center;
    
    .price-current {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-md);
      margin-bottom: var(--spacing-md);
      
      .price-value {
        font-size: var(--font-size-4xl);
        font-weight: 700;
        color: var(--color-primary);
      }
      
      .price-unit {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
      }
    }
    
    .price-comparison {
      background: var(--color-bg-secondary);
      border-radius: var(--border-radius-lg);
      padding: var(--spacing-lg);
      
      .comparison-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: var(--spacing-sm);
        
        .comparison-label {
          color: var(--color-text-secondary);
        }
        
        .comparison-value {
          font-weight: 600;
          
          &.benchmark { color: var(--color-text-secondary); }
          &.our-price { color: var(--color-success); }
        }
      }
    }
  }
`