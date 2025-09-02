/**
 * Home组件模块索引文件
 */

// 主要区域组件
export { default as HeroSection } from './HeroSection'
export { default as ServicesSection } from './ServicesSection'
export { default as MapSection } from './MapSection'
export { default as TestimonialsSection } from './TestimonialsSection'
export { default as NewsSection } from './NewsSection'

// UI组件
export { default as PriceWidget } from './PriceWidget'

// 模态框组件
export { 
  QuickQuoteModal, 
  OrderTrackingModal, 
  PriceDetailModal 
} from './HomeModals'

// 样式
export * from './styles'