import styled from 'styled-components'

export const StyledNotFound = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);

  .not-found-container {
    text-align: center;
    max-width: 500px;
    width: 100%;
  }

  .error-title {
    font-size: 120px;
    font-weight: 700;
    color: var(--color-primary, #1890ff);
    margin: 0;
    line-height: 1;
    background: linear-gradient(45deg, #1890ff, #722ed1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: pulse 2s ease-in-out infinite alternate;

    @media (max-width: 768px) {
      font-size: 80px;
    }
  }

  .error-subtitle {
    font-size: 24px;
    color: var(--color-text-secondary, #666);
    margin: 16px 0 32px 0;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .error-description {
    font-size: 16px;
    color: var(--color-text-tertiary, #999);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .actions-container {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;

    .ant-btn {
      min-width: 120px;
      height: 40px;
      border-radius: 6px;
      font-weight: 500;
      
      &.ant-btn-primary {
        background: linear-gradient(45deg, #1890ff, #40a9ff);
        border: none;
        box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
        
        &:hover {
          background: linear-gradient(45deg, #40a9ff, #1890ff);
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(24, 144, 255, 0.4);
        }
      }

      &:not(.ant-btn-primary) {
        border-color: #d9d9d9;
        color: var(--color-text-secondary, #666);
        
        &:hover {
          border-color: var(--color-primary, #1890ff);
          color: var(--color-primary, #1890ff);
          transform: translateY(-1px);
        }
      }
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      
      .ant-btn {
        width: 200px;
      }
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  /* 添加一些装饰性元素 */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(24, 144, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: float 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 30%;
    right: 20%;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(114, 46, 209, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
    animation: float 4s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% {
      transform: translate(-50%, -50%) translateY(0px);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-20px);
    }
  }
`