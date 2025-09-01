import styled from 'styled-components'

export const StyledCareers = styled.div`
  .hero-section {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), 
                url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
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
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  
  .culture-video {
    padding: var(--spacing-5xl) 0;
    
    .video-placeholder {
      background: linear-gradient(135deg, var(--color-cloud-gray) 0%, var(--color-light-gray) 100%);
      height: 400px;
      border-radius: var(--border-radius-2xl);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: var(--color-text-secondary);
      cursor: pointer;
      transition: all var(--transition-normal);
      
      &:hover {
        background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
        color: white;
      }
      
      .play-icon {
        font-size: 4rem;
        margin-bottom: var(--spacing-md);
      }
      
      .video-title {
        font-size: var(--font-size-xl);
        font-weight: 600;
      }
    }
  }
  
  .positions-section {
    background: var(--color-bg-secondary);
    padding: var(--spacing-5xl) 0;
    
    .position-card {
      background: white;
      border-radius: var(--border-radius-xl);
      padding: var(--spacing-xl);
      box-shadow: var(--shadow-base);
      transition: all var(--transition-normal);
      height: 100%;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
      }
      
      .position-header {
        margin-bottom: var(--spacing-lg);
        
        .position-title {
          font-size: var(--font-size-xl);
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-sm);
        }
        
        .position-department {
          color: var(--color-primary);
          font-weight: 500;
          margin-bottom: var(--spacing-md);
        }
        
        .position-tags {
          display: flex;
          gap: var(--spacing-xs);
          flex-wrap: wrap;
        }
      }
      
      .position-details {
        margin-bottom: var(--spacing-lg);
        
        .detail-item {
          display: flex;
          align-items: center;
          margin-bottom: var(--spacing-sm);
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
          
          .anticon {
            color: var(--color-primary);
            margin-right: var(--spacing-sm);
            width: 16px;
          }
        }
      }
      
      .position-requirements {
        margin-bottom: var(--spacing-lg);
        
        .requirements-title {
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-sm);
        }
        
        .requirements-list {
          list-style: none;
          padding: 0;
          
          li {
            color: var(--color-text-secondary);
            font-size: var(--font-size-sm);
            margin-bottom: var(--spacing-xs);
            position: relative;
            padding-left: var(--spacing-md);
            
            &:before {
              content: '•';
              color: var(--color-primary);
              position: absolute;
              left: 0;
            }
          }
        }
      }
      
      .apply-btn {
        width: 100%;
      }
    }
  }
  
  .benefits-section {
    padding: 120px 0;
    background: #ffffff;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(41, 128, 185, 0.03) 0%, rgba(142, 68, 173, 0.03) 100%);
      pointer-events: none;
    }

    &::after {
      content: '';
      position: absolute;
      top: 20%;
      right: -10%;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(41, 128, 185, 0.05) 0%, transparent 70%);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .container {
      position: relative;
      z-index: 2;
    }

    .benefits-header {
      text-align: center;
      margin-bottom: 80px;
      position: relative;
      z-index: 2;
    }

    .benefits-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #2980b9 0%, #8e44ad 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 24px;
      box-shadow: 0 8px 25px rgba(41, 128, 185, 0.3);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.6s ease;
      }

      &:hover::before {
        left: 100%;
      }

      .badge-icon {
        font-size: 1.1rem;
        animation: pulse 2s infinite;
      }
    }

    .benefits-main-title {
      color: #2c3e50;
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .benefits-subtitle {
      color: #7f8c8d;
      font-size: 1.2rem;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  .modern-benefit-card {
    background: #ffffff;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(41, 128, 185, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #2980b9, #8e44ad, #e74c3c, #f39c12);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
      border-color: rgba(41, 128, 185, 0.3);

      &::before {
        transform: scaleX(1);
      }
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 24px;
    }

    .benefit-icon-wrapper {
      width: 70px;
      height: 70px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      &.benefit-1 {
        background: linear-gradient(135deg, #3498db, #2980b9);
      }

      &.benefit-2 {
        background: linear-gradient(135deg, #e74c3c, #c0392b);
      }

      &.benefit-3 {
        background: linear-gradient(135deg, #2ecc71, #27ae60);
      }

      &.benefit-4 {
        background: linear-gradient(135deg, #f39c12, #e67e22);
      }

      &.benefit-5 {
        background: linear-gradient(135deg, #9b59b6, #8e44ad);
      }

      &.benefit-6 {
        background: linear-gradient(135deg, #1abc9c, #16a085);
      }

      .icon-container {
        color: white;
        font-size: 1.8rem;
        z-index: 2;
        position: relative;
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.4s ease;
      }
    }

    &:hover .benefit-icon-wrapper::after {
      width: 100px;
      height: 100px;
    }

    .benefit-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: #bdc3c7;
      opacity: 0.6;
    }

    .card-content {
      margin-bottom: 24px;
    }

    .benefit-title {
      font-size: 1.4rem;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 12px;
      line-height: 1.3;
    }

    .benefit-desc {
      color: #7f8c8d;
      line-height: 1.6;
      font-size: 0.95rem;
      margin-bottom: 16px;
    }

    .benefit-features {
      display: flex;
      align-items: center;
      gap: 8px;

      .feature-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2980b9, #8e44ad);
      }

      .feature-text {
        font-size: 0.85rem;
        color: #95a5a6;
        font-weight: 500;
      }
    }

    .card-footer {
      border-top: 1px solid #ecf0f1;
      padding-top: 16px;
    }

    .benefit-status {
      display: flex;
      align-items: center;
      gap: 8px;

      .status-indicator {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #2ecc71;
        animation: statusPulse 2s infinite;
      }

      .status-text {
        font-size: 0.85rem;
        color: #2ecc71;
        font-weight: 600;
      }
    }
  }

  .internship-section {
    background: var(--color-bg-secondary);
    padding: var(--spacing-5xl) 0;
    
    .internship-card {
      background: white;
      border-radius: var(--border-radius-2xl);
      padding: var(--spacing-2xl);
      box-shadow: var(--shadow-lg);
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        transition: left 0.5s ease;
      }
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        
        &::before {
          left: 100%;
        }
      }
    }
  }

  .btn-primary {
    background: linear-gradient(135deg, #2980b9 0%, #8e44ad 100%);
    border: none;
    border-radius: 12px;
    padding: 16px 32px;
    font-size: 1.1rem;
    font-weight: 700;
    height: auto;
    box-shadow: 0 8px 25px rgba(41, 128, 185, 0.3);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.6s ease, height 0.6s ease;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(41, 128, 185, 0.4);
      
      &::before {
        width: 300px;
        height: 300px;
      }
    }
    
    &:active {
      transform: translateY(0);
    }
    
    .anticon {
      margin-right: 8px;
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  @keyframes statusPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.2); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-20px) rotate(120deg); }
    66% { transform: translateY(10px) rotate(240deg); }
  }

  /* 响应式设计 */
  @media (max-width: 1200px) {
    .benefits-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 25px;
    }

    .modern-benefit-card {
      padding: 28px;
    }
  }

  @media (max-width: 768px) {
    .benefits-section {
      padding: 80px 0;

      &::after {
        width: 200px;
        height: 200px;
        top: 10%;
        right: -15%;
      }

      .benefits-main-title {
        font-size: 2.2rem;
      }

      .benefits-subtitle {
        font-size: 1.1rem;
        padding: 0 20px;
      }

      .benefits-header {
        margin-bottom: 60px;
      }
    }

    .benefits-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0 20px;
    }

    .modern-benefit-card {
      padding: 24px;

      .benefit-icon-wrapper {
        width: 60px;
        height: 60px;

        .icon-container {
          font-size: 1.5rem;
        }
      }

      .benefit-number {
        font-size: 1.3rem;
      }

      .benefit-title {
        font-size: 1.2rem;
      }

      .benefit-desc {
        font-size: 0.9rem;
      }
    }
  }
`