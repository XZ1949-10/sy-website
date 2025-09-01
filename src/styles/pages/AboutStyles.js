import styled from 'styled-components'

export const StyledAbout = styled.div`
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
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      
      .hero-stats {
        display: flex;
        justify-content: center;
        gap: var(--spacing-2xl);
        
        @media (max-width: 768px) {
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        
        .stat-item {
          text-align: center;
          
          .stat-number {
            font-size: var(--font-size-4xl);
            font-weight: 700;
            display: block;
            color: var(--color-secondary);
          }
          
          .stat-label {
            font-size: var(--font-size-base);
            opacity: 0.9;
          }
        }
      }
    }
  }
  
  .development-history-section {
    padding: var(--spacing-5xl) 0;
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
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.03) 0%, transparent 50%);
      pointer-events: none;
    }

    .section-title {
      color: #1e293b;
      text-align: center;
      font-size: var(--font-size-3xl);
      font-weight: 700;
      margin-bottom: var(--spacing-4xl);
      background: linear-gradient(135deg, #1e293b, #475569);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  
  .development-timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-3xl) var(--spacing-lg);
  }

  .timeline-bg-decoration {
    display: none;
  }

  .timeline-main {
    position: relative;
    z-index: 2;
  }

  .timeline-connector {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #3b82f6, #8b5cf6);
    transform: translateX(-50%);
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 12px;
      height: 12px;
      background: #3b82f6;
      border-radius: 50%;
      box-shadow: 0 0 0 4px #ffffff, 0 0 0 8px rgba(59, 130, 246, 0.2);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 12px;
      height: 12px;
      background: #8b5cf6;
      border-radius: 50%;
      box-shadow: 0 0 0 4px #ffffff, 0 0 0 8px rgba(139, 92, 246, 0.2);
    }
  }

  @keyframes drawLine {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fadeInDot {
    to {
      opacity: 1;
    }
  }
  
  .timeline-nodes {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 60px;
    padding: 40px 0;
  }

  .timeline-node {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    
    &:nth-child(odd) {
      flex-direction: row;
      
      .node-content {
        margin-right: 40px;
        text-align: right;
      }
      
      .timeline-dot {
        order: 2;
      }
      
      .node-spacer {
        order: 3;
        width: 50%;
      }
    }
    
    &:nth-child(even) {
      flex-direction: row-reverse;
      
      .node-content {
        margin-left: 40px;
        text-align: left;
      }
      
      .timeline-dot {
        order: 2;
      }
      
      .node-spacer {
        order: 3;
        width: 50%;
      }
    }
  }

  .node-content {
    background: #ffffff;
    border-radius: 16px;
    padding: 24px;
    width: 280px;
    box-shadow: 
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e2e8f0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 16px;
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.25),
        0 0 0 1px rgba(59, 130, 246, 0.1);
      border-color: #3b82f6;
      
      &::before {
        opacity: 1;
      }
    }
  }
  
  .timeline-dot {
    width: 16px;
    height: 16px;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    border-radius: 50%;
    border: 4px solid #ffffff;
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
    flex-shrink: 0;
    z-index: 4;
  }
  
  .node-spacer {
    flex: 1;
  }

  .node-year {
    display: inline-block;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  }

  .node-title {
    font-size: 20px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 8px;
    line-height: 1.3;
    position: relative;
    z-index: 2;
  }

  .node-subtitle {
    font-size: 14px;
    color: #3b82f6;
    font-weight: 600;
    margin-bottom: 12px;
    position: relative;
    z-index: 2;
  }

  .node-desc {
    font-size: 14px;
    color: #64748b;
    line-height: 1.5;
    position: relative;
    z-index: 2;
  }

  // Values Section Styles
  .values-section {
    padding: var(--spacing-5xl) 0;
    background: linear-gradient(135deg, #f8faff 0%, #ffffff 50%, #f0f7ff 100%);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 15% 25%, rgba(59, 130, 246, 0.04) 0%, transparent 50%),
        radial-gradient(circle at 85% 75%, rgba(139, 92, 246, 0.04) 0%, transparent 50%);
      pointer-events: none;
    }

    .values-header {
      text-align: center;
      margin-bottom: 80px;
      position: relative;
      z-index: 2;
    }

    .values-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 24px;
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
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

      .badge-text {
        font-weight: 700;
        letter-spacing: 1px;
      }
    }

    .values-main-title {
      font-size: var(--font-size-4xl);
      font-weight: 800;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #1e293b, #475569);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      
      @media (max-width: 768px) {
        font-size: var(--font-size-3xl);
      }
    }
    
    .values-main-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: var(--spacing-2xl);
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
  }
  
  .modern-value-card {
    background: #ffffff;
    border-radius: 24px;
    padding: 0;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    height: auto;
    min-height: 320px;
    will-change: transform, box-shadow;
    
    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
      border-color: rgba(59, 130, 246, 0.1);
      
      .card-glow {
        opacity: 1;
      }
      
      .value-icon-modern {
        transform: scale(1.1) rotate(5deg);
      }
    }
  }
  
  .card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 24px;
  }
  
  .card-content {
    position: relative;
    z-index: 2;
    padding: var(--spacing-2xl);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .value-icon-wrapper {
    position: relative;
    margin-bottom: var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon-bg {
    position: absolute;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 20px;
    opacity: 0.1;
  }
  
  .value-icon-modern {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
    position: relative;
    z-index: 2;
    will-change: transform;

    .anticon {
      font-size: 2rem;
    }
  }
  
  .card-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .value-title-modern {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: #1e293b;
    margin-bottom: var(--spacing-sm);
    line-height: 1.3;
  }
  
  .value-desc-modern {
    font-size: var(--font-size-sm);
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }
  
  .card-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 24px;
    padding: 1px;
    background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  // Fleet Section Styles
  .fleet-section {
    padding: var(--spacing-5xl) 0;
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
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.03) 0%, transparent 50%);
      pointer-events: none;
    }

    .fleet-header {
      text-align: center;
      margin-bottom: 80px;
      position: relative;
      z-index: 2;
    }

    .fleet-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      color: white;
      padding: 12px 24px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 24px;
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
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

      .badge-text {
        font-weight: 700;
        letter-spacing: 1px;
      }
    }

    .fleet-main-title {
      font-size: var(--font-size-4xl);
      font-weight: 800;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #1e293b, #475569);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      
      @media (max-width: 768px) {
        font-size: var(--font-size-3xl);
      }
    }
    
    .fleet-main-subtitle {
      font-size: var(--font-size-lg);
      color: var(--color-text-secondary);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
  
  .fleet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--spacing-2xl);
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
  }
  
  .modern-fleet-card {
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
    will-change: transform, box-shadow;
    
    &:hover {
      transform: translateY(-12px) scale(1.03);
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
      border-color: rgba(59, 130, 246, 0.1);
      
      .card-glow-effect {
        opacity: 1;
      }
      
      .fleet-icon {
        transform: scale(1.1) rotate(5deg);
      }
    }
  }
  
  .card-glow-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.05));
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 24px;
  }
  
  .fleet-icon-wrapper {
    position: relative;
    margin-bottom: var(--spacing-lg);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .fleet-icon-bg {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 20px;
    opacity: 0.1;

    &.transport {
      background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    }

    &.storage {
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
    }
  }
  
  .fleet-icon {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
    will-change: transform;
  }
  
  .fleet-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .fleet-number {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    color: #3b82f6;
    margin-bottom: var(--spacing-sm);
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .fleet-card-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: #1e293b;
    margin-bottom: var(--spacing-md);
    line-height: 1.3;
  }
  
  .fleet-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    margin: 0 auto var(--spacing-md);
    border-radius: 2px;
  }
  
  .fleet-features {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    width: 100%;
  }
  
  .feature-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: var(--font-size-sm);
    color: #64748b;
    
    .feature-icon {
      margin-right: var(--spacing-sm);
      font-size: var(--font-size-base);
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
    background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`