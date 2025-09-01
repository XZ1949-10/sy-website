import styled from 'styled-components'

export const StyledProductDetail = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

  .back-button {
    margin-bottom: 20px;
  }

  .product-image-placeholder {
    height: 400px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    border-radius: 8px;
  }

  .product-title {
    margin-bottom: 8px !important;
  }

  .product-category {
    margin-bottom: 16px;
  }

  .product-description {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .section-title {
    margin-bottom: 16px !important;
    color: var(--color-text-primary, #333);
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;

      &:before {
        content: '✓';
        position: absolute;
        left: 0;
        color: var(--color-primary, #1890ff);
        font-weight: bold;
      }
    }
  }

  .spec-row {
    margin-bottom: 8px;
    
    .spec-label {
      font-weight: 600;
      color: var(--color-text-primary, #333);
    }

    .spec-value {
      color: var(--color-text-secondary, #666);
    }
  }

  .divider {
    margin: 24px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;

    .product-image-placeholder {
      height: 300px;
      font-size: 16px;
    }

    .product-title {
      font-size: 24px !important;
    }

    .section-title {
      font-size: 18px !important;
    }
  }
`