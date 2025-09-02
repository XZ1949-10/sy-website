import styled from 'styled-components'

// Hero Section Styles
export const StyledProductHero = styled.div`
  .hero-section {
    position: relative;
    height: 70vh;
    min-height: 500px;
    background: linear-gradient(135deg, 
      rgba(0, 0, 0, 0.6), 
      rgba(0, 0, 0, 0.4)
    ), url('/images/products-hero.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.5) 100%
      );
      z-index: 1;
    }

    .container {
      position: relative;
      z-index: 2;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-title {
      font-size: var(--font-size-4xl);
      font-weight: 700;
      margin-bottom: var(--spacing-lg);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      line-height: 1.2;

      @media (max-width: 768px) {
        font-size: var(--font-size-2xl);
      }
    }

    .hero-subtitle {
      font-size: var(--font-size-lg);
      margin-bottom: var(--spacing-2xl);
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      line-height: 1.6;
      opacity: 0.95;

      @media (max-width: 768px) {
        font-size: var(--font-size-md);
        margin-bottom: var(--spacing-xl);
      }
    }
  }
`

// Product Details Styles
export const StyledProductDetails = styled.div`
  .product-card {
    height: 100%;
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    overflow: hidden;

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .product-header {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-lg);
      padding-bottom: var(--spacing-md);
      border-bottom: 1px solid var(--color-light-gray);
    }

    .product-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: var(--spacing-md);
      font-size: var(--font-size-xl);
      color: white;
    }

    .product-info {
      flex: 1;
    }

    .product-title {
      font-size: var(--font-size-lg);
      font-weight: 600;
      margin: 0 0 var(--spacing-xs) 0;
      color: var(--color-text-primary);
    }

    .product-standard {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      margin: 0;
    }
  }

  .ant-tabs {
    .ant-tabs-tab {
      font-size: var(--font-size-lg);
      font-weight: 500;
      padding: var(--spacing-md) var(--spacing-xl);
    }

    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: var(--color-primary) !important;
      }
    }

    .ant-tabs-ink-bar {
      background: var(--color-primary);
    }
  }
`

// Services Section Styles
export const StyledProductServices = styled.div`
  .service-section {
    padding: var(--spacing-5xl) 0;
    background: var(--color-background-light);
  }

  .section-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
  }

  .section-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }

  .section-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .service-card {
    height: 100%;
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all 0.3s ease;
    border: 1px solid var(--color-light-gray);

    &:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary);
      background: linear-gradient(135deg, 
        rgba(var(--color-primary-rgb), 0.02), 
        rgba(var(--color-secondary-rgb), 0.02)
      );
    }

    .service-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--spacing-lg) auto;
      font-size: var(--font-size-2xl);
      color: white;
      transition: all 0.3s ease;
    }

    &:hover .service-icon {
      transform: scale(1.1);
    }

    .service-title {
      font-size: var(--font-size-lg);
      font-weight: 600;
      margin-bottom: var(--spacing-md);
      color: var(--color-text-primary);
    }

    .service-description {
      font-size: var(--font-size-md);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-lg);
      line-height: 1.6;
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--spacing-xl) 0;

      li {
        padding: var(--spacing-xs) 0;
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        position: relative;

        &::before {
          content: '✓';
          color: var(--color-success);
          font-weight: bold;
          margin-right: var(--spacing-xs);
        }
      }
    }

    .service-actions {
      margin-top: auto;
    }
  }
`

// Downloads Section Styles
export const StyledProductDownloads = styled.div`
  .downloads-section {
    padding: var(--spacing-5xl) 0;
    background: white;
  }

  .section-header {
    text-align: center;
    margin-bottom: var(--spacing-3xl);
  }

  .section-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }

  .section-subtitle {
    font-size: var(--font-size-lg);
    color: var(--color-text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .download-card {
    height: 100%;
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-xl);
    transition: all 0.3s ease;
    border: 1px solid var(--color-light-gray);

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
      border-color: var(--color-primary);
    }

    .download-header {
      display: flex;
      align-items: flex-start;
      margin-bottom: var(--spacing-lg);
    }

    .download-icon {
      width: 50px;
      height: 50px;
      border-radius: var(--border-radius-md);
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: var(--spacing-md);
      font-size: var(--font-size-lg);
      color: white;
      flex-shrink: 0;
    }

    .download-info {
      flex: 1;
    }

    .download-title {
      font-size: var(--font-size-md);
      font-weight: 600;
      margin: 0 0 var(--spacing-xs) 0;
      color: var(--color-text-primary);
      line-height: 1.3;
    }

    .download-meta {
      display: flex;
      gap: var(--spacing-sm);
      
      .file-format {
        background: var(--color-primary);
        color: white;
        padding: 2px var(--spacing-xs);
        border-radius: var(--border-radius-sm);
        font-size: var(--font-size-xs);
        font-weight: 500;
      }

      .file-size {
        color: var(--color-text-secondary);
        font-size: var(--font-size-xs);
      }
    }

    .download-description {
      font-size: var(--font-size-sm);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-lg);
      line-height: 1.5;
    }

    .download-actions {
      margin-top: auto;
    }
  }

  .download-notice {
    border: 1px solid var(--color-light-gray);
  }
`
