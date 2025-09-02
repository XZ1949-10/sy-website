import styled from 'styled-components'

export const StyledNewsHero = styled.div`
  .hero-section {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    padding: var(--spacing-4xl) 0;
    color: white;
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
      background: url('/images/pattern.png') repeat;
      opacity: 0.1;
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
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

      @media (max-width: 768px) {
        font-size: var(--font-size-3xl);
      }
    }

    .hero-subtitle {
      font-size: var(--font-size-lg);
      opacity: 0.9;
      line-height: 1.6;
      margin: 0;

      @media (max-width: 768px) {
        font-size: var(--font-size-md);
      }
    }
  }
`

export const StyledNewsFilter = styled.div`
  .filter-section {
    background: white;
    padding: var(--spacing-xl) 0;
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .filter-container {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      gap: var(--spacing-md);
    }
  }

  .filter-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);

    .anticon {
      color: var(--color-primary);
      font-size: var(--font-size-lg);
    }

    .filter-label {
      font-weight: 500;
      color: var(--color-text-primary);
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      &:first-child {
        justify-content: center;
      }
    }
  }
`

export const StyledFeaturedNews = styled.div`
  .featured-news {
    padding: var(--spacing-4xl) 0;
    background: var(--color-background-light);
  }

  .section-title {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--color-text-primary);
    text-align: center;
    margin-bottom: var(--spacing-2xl);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: var(--color-primary);
      border-radius: 2px;
    }
  }

  .featured-card {
    border: none;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-xl);
    }

    .ant-card-body {
      padding: 0;
    }
  }

  .featured-image {
    height: 400px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: flex-end;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .featured-overlay {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: var(--spacing-2xl);
    width: 100%;
    color: white;

    @media (max-width: 768px) {
      padding: var(--spacing-lg);
    }
  }

  .featured-category {
    margin-bottom: var(--spacing-md);
    font-weight: 500;
  }

  .featured-title {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: white;

    @media (max-width: 768px) {
      font-size: var(--font-size-xl);
    }
  }

  .featured-excerpt {
    font-size: var(--font-size-md);
    line-height: 1.6;
    opacity: 0.9;
    margin: 0;
  }
`

export const StyledNewsGrid = styled.div`
  .news-grid {
    padding: var(--spacing-4xl) 0;
  }

  .news-card {
    border: none;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    height: 100%;

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .ant-card-body {
      padding: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .news-image {
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: var(--spacing-md);
  }

  .news-category {
    font-weight: 500;
  }

  .news-date {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-sm);
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  .news-content {
    padding: var(--spacing-lg);
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .news-title {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-md);
    line-height: 1.4;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary);
    }
  }

  .news-excerpt {
    color: var(--color-text-secondary);
    line-height: 1.6;
    margin-bottom: var(--spacing-lg);
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--color-border);
  }

  .meta-left {
    display: flex;
    gap: var(--spacing-md);
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    color: var(--color-text-tertiary);
    font-size: var(--font-size-sm);

    .anticon {
      font-size: var(--font-size-sm);
    }
  }

  .meta-right {
    display: flex;
    gap: var(--spacing-sm);
  }

  .action-btn {
    background: none;
    border: none;
    color: var(--color-primary);
    cursor: pointer;
    padding: var(--spacing-xs);
    border-radius: var(--border-radius-sm);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    font-size: var(--font-size-sm);

    &:hover {
      background: var(--color-primary-light);
      color: var(--color-primary-dark);
    }
  }
`

export const StyledNewsletterSubscription = styled.div`
  .newsletter-section {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    padding: var(--spacing-4xl) 0;
    color: white;
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
      background: url('/images/pattern.png') repeat;
      opacity: 0.1;
      z-index: 1;
    }

    .container {
      position: relative;
      z-index: 2;
    }
  }

  .newsletter-content {
    max-width: 600px;
    margin: 0 auto;
  }

  .newsletter-header {
    margin-bottom: var(--spacing-2xl);
  }

  .newsletter-icon {
    font-size: var(--font-size-4xl);
    color: var(--color-warning);
    margin-bottom: var(--spacing-lg);
  }

  .newsletter-title {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    color: white;
  }

  .newsletter-description {
    font-size: var(--font-size-md);
    opacity: 0.9;
    line-height: 1.6;
    margin: 0;
  }

  .newsletter-form {
    display: flex;
    justify-content: center;

    .ant-input-search {
      .ant-input {
        border-radius: var(--border-radius-lg) 0 0 var(--border-radius-lg);
        border: none;
        padding: var(--spacing-md);
        font-size: var(--font-size-md);
      }

      .ant-input-search-button {
        border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0;
        border: none;
        height: auto;

        .ant-btn {
          height: 100%;
          border-radius: 0;
        }
      }
    }

    @media (max-width: 768px) {
      .ant-input-search {
        width: 100% !important;
        max-width: none !important;
      }
    }
  }
`