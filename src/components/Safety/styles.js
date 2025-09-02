import styled from 'styled-components'

export const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
  padding: var(--spacing-4xl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/safety-bg.jpg') center/cover;
    opacity: 0.1;
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .hero-subtitle {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-2xl);
    opacity: 0.9;
    line-height: 1.6;
  }

  .btn-warning {
    background: var(--color-warning);
    border-color: var(--color-warning);
    color: white;
    font-weight: 600;
    padding: 0 var(--spacing-xl);
    height: 48px;
    border-radius: 24px;
    box-shadow: 0 4px 12px rgba(255, 193, 7, 0.3);
    transition: all 0.3s ease;

    &:hover {
      background: #e0a800;
      border-color: #e0a800;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(255, 193, 7, 0.4);
    }
  }
`

export const CertificationSectionWrapper = styled.section`
  padding: var(--spacing-4xl) 0;

  .section-title {
    text-align: center;
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
  }

  .section-subtitle {
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-4xl);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .certification-card {
    text-align: center;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid var(--color-border);

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .cert-logo {
      font-size: 48px;
      color: var(--color-primary);
      margin-bottom: var(--spacing-lg);
    }

    .cert-title {
      font-size: var(--font-size-lg);
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-sm);
    }

    .cert-desc {
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-lg);
      line-height: 1.5;
    }

    .cert-status {
      display: flex;
      justify-content: center;
    }
  }
`

export const SafetyStatsWrapper = styled.section`
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-light);

  .section-title {
    text-align: center;
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
  }

  .section-subtitle {
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-4xl);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .stats-card {
    text-align: center;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid var(--color-border);
    background: white;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .stats-icon {
      font-size: 36px;
      color: var(--color-primary);
      margin-bottom: var(--spacing-md);
    }

    .ant-statistic-title {
      color: var(--color-text-secondary);
      font-size: var(--font-size-sm);
      margin-bottom: var(--spacing-xs);
    }

    .ant-statistic-content {
      color: var(--color-primary);
      font-weight: 700;
    }
  }
`

export const TrainingSectionWrapper = styled.section`
  padding: var(--spacing-4xl) 0;

  h2 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-lg);
  }

  h4 {
    font-size: var(--font-size-md);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
  }

  p {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  .ant-progress {
    .ant-progress-text {
      color: var(--color-text-primary);
      font-weight: 600;
    }
  }

  .ant-timeline {
    .ant-timeline-item-content {
      h4 {
        margin-bottom: var(--spacing-xs);
      }

      p {
        margin-bottom: 0;
        font-size: var(--font-size-sm);
      }
    }
  }
`

export const PolicySectionWrapper = styled.section`
  padding: var(--spacing-4xl) 0;
  background: var(--color-bg-light);

  .section-title {
    text-align: center;
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
  }

  .section-subtitle {
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-4xl);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .policy-card {
    text-align: center;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid var(--color-border);
    background: white;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .policy-icon {
      font-size: 48px;
      color: var(--color-primary);
      margin-bottom: var(--spacing-lg);
    }

    .policy-title {
      font-size: var(--font-size-lg);
      font-weight: 600;
      color: var(--color-text-primary);
      margin-bottom: var(--spacing-sm);
    }

    .policy-desc {
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-lg);
      line-height: 1.5;
    }

    .btn-primary {
      background: var(--color-primary);
      border-color: var(--color-primary);
      border-radius: 6px;
      font-weight: 500;

      &:hover {
        background: var(--color-primary-dark);
        border-color: var(--color-primary-dark);
      }
    }
  }
`

export const EmergencyBannerWrapper = styled.div`
  background: linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%);
  color: white;
  padding: var(--spacing-xl) 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(255, 255, 255, 0.1) 10px,
      rgba(255, 255, 255, 0.1) 20px
    );
  }

  .banner-title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    position: relative;
    z-index: 1;
  }

  .banner-phone {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    .anticon {
      animation: pulse 2s infinite;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`
