import styled from 'styled-components'

// ContactHero样式
export const ContactHeroWrapper = styled.section`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/hero-pattern.svg') no-repeat center;
    background-size: cover;
    opacity: 0.1;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: white;
    margin-bottom: var(--spacing-lg);
    letter-spacing: -0.02em;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    font-weight: 400;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`

// MapSection样式
export const MapSectionWrapper = styled.section`
  padding: 80px 0;
  background: var(--color-background);
  
  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: var(--spacing-md);
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
  }
  
  .map-container {
    margin-bottom: 60px;
    border-radius: var(--border-radius-lg);
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
  }
  
  .map-icon {
    font-size: 4rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
  
  .map-text {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
  }
  
  .map-address {
    font-size: 1rem;
    color: var(--color-text-secondary);
  }
  
  .location-cards {
    margin-top: 40px;
  }
  
  .location-card {
    height: 100%;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
  }
  
  .location-header {
    text-align: center;
    margin-bottom: var(--spacing-md);
    
    .anticon {
      font-size: 2.5rem;
      color: var(--color-primary);
      margin-bottom: var(--spacing-sm);
    }
  }
  
  .location-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 4px;
  }
  
  .location-type {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
  }
  
  .location-content {
    .location-address {
      font-size: 0.95rem;
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-md);
      line-height: 1.5;
    }
  }
  
  .location-contact {
    .contact-detail {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      font-size: 0.9rem;
      color: var(--color-text-secondary);
      
      .anticon {
        margin-right: 8px;
        color: var(--color-primary);
      }
    }
  }
`

// ServicesSection样式
export const ServicesSectionWrapper = styled.section`
  padding: 80px 0;
  background: white;
  
  .service-card {
    height: 100%;
    text-align: center;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
  }
  
  .service-icon {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
  
  .service-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: var(--spacing-sm);
  }
  
  .service-desc {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
  }
  
  .service-hours {
    font-size: 0.9rem;
    color: var(--color-primary);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

// OfficeHours样式
export const OfficeHoursWrapper = styled.section`
  padding: 80px 0;
  background: var(--color-background);
  
  .hours-content {
    text-align: center;
  }
  
  .hours-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: var(--spacing-md);
  }
  
  .hours-subtitle {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    margin-bottom: 60px;
    line-height: 1.6;
  }
  
  .hours-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-xl);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .hours-item {
    background: white;
    padding: var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-lg);
    }
  }
  
  .hours-icon {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
  }
  
  .hours-label {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: var(--spacing-sm);
  }
  
  .hours-value {
    font-size: 1rem;
    color: var(--color-text-secondary);
    font-weight: 500;
  }
`

export default {
  ContactHeroWrapper,
  MapSectionWrapper,
  ServicesSectionWrapper,
  OfficeHoursWrapper
}
