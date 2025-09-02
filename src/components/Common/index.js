// 通用组件库索引文件
// 提供统一的组件导入入口

// 布局组件
export { default as Header } from '../Layout/Header'
export { default as Footer } from '../Layout/Footer'

// 通用功能组件
export { default as ScrollToTop } from './ScrollToTop'
export { default as ErrorBoundary } from './ErrorBoundary'
export { default as EChartsNetworkMap } from './EChartsNetworkMap'

// 卡片组件
export { default as NewsCard } from './NewsCard'
export { default as ProductCard } from './ProductCard'
export { default as ServiceCard } from './ServiceCard'
export { default as TestimonialCard } from './TestimonialCard'

// 样式导出
export * from './styles'

// Home页面组件 (从新的模块化结构导出)
export * from '../Home'

// 组件使用说明
/*
使用示例：

1. 页面滚动管理 (ScrollToTop)
import { ScrollToTop } from '@/components/Common'

2. 错误边界 (ErrorBoundary)
import { ErrorBoundary } from '@/components/Common'

3. 网络地图 (EChartsNetworkMap)
import { EChartsNetworkMap } from '@/components/Common'

4. 各种卡片组件
import { NewsCard, ProductCard, ServiceCard, TestimonialCard } from '@/components/Common'

5. Home页面模块化组件
import { HeroSection, ServicesSection, PriceWidget } from '@/components/Common'

组件特性：
- 所有组件都支持响应式设计
- 使用统一的设计系统（CSS变量）
- 支持动画效果（framer-motion）
- 遵循Ant Design设计规范
- 针对石化行业进行定制化设计
- 模块化设计，便于维护和复用
*/