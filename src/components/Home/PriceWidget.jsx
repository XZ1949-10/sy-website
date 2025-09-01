/**
 * PriceWidget组件 - 固定价格显示组件
 */
import React from 'react'
import styled from 'styled-components'

const StyledPriceWidget = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 76, 151, 0.85);
  backdrop-filter: blur(10px);
  color: white;
  padding: 12px 16px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: rgba(0, 76, 151, 0.95);
  }

  .price-label {
    font-size: 12px;
    opacity: 0.9;
  }

  .price-value {
    font-size: 18px;
    font-weight: bold;
  }

  .price-tip {
    font-size: 10px;
    opacity: 0.7;
    margin-top: 4px;
  }
`

const PriceWidget = ({ dieselPrice, onClick }) => {
  return (
    <StyledPriceWidget onClick={onClick}>
      <div className="price-label">今日0#柴油价格</div>
      <div className="price-value">¥{dieselPrice?.toFixed(2)}/升</div>
      <div className="price-tip">点击查看详情</div>
    </StyledPriceWidget>
  )
}

export default PriceWidget