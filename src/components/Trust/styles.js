/**
 * Trust组件样式定义
 */
import styled from 'styled-components'

// TrustBar 样式
export const StyledTrustBar = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="%23000" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
  }

  .trust-section-header {
    text-align: center;
    margin-bottom: 60px;

    .trust-main-title {
      font-size: 36px;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      position: relative;
      display: inline-block;

      &::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #3498db, #2980b9);
        border-radius: 2px;
      }
    }

    .trust-subtitle {
      font-size: 18px;
      color: #7f8c8d;
      margin: 0;
      font-weight: 400;
      letter-spacing: 0.5px;
    }
  }

  .trust-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;
    align-items: start;
  }

  .trust-card-wrapper {
    height: 100%;
  }

  @media (max-width: 1024px) {
    padding: 60px 0;

    .container {
      padding: 0 20px;
    }

    .trust-section-header {
      margin-bottom: 40px;

      .trust-main-title {
        font-size: 28px;
      }

      .trust-subtitle {
        font-size: 16px;
      }
    }

    .trust-content {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }

  @media (max-width: 768px) {
    padding: 40px 0;

    .container {
      padding: 0 16px;
    }

    .trust-section-header {
      margin-bottom: 32px;

      .trust-main-title {
        font-size: 24px;
      }

      .trust-subtitle {
        font-size: 14px;
      }
    }

    .trust-content {
      gap: 20px;
    }
  }
`
