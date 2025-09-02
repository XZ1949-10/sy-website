import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  ProductHero,
  ProductDetails,
  ProductServices,
  ProductDownloads,
  QuoteModal
} from '../components/Products'

const Products = () => {
  const [quoteModalVisible, setQuoteModalVisible] = useState(false)
  const handleQuoteSubmit = (values) => {
    setQuoteModalVisible(false)
  }

  return (
    <>
      <Helmet>
        <title>产品与服务 - 舟山天骏石油化工有限公司</title>
        <meta name="description" content="天骏石化提供优质0#柴油(GB 19147)、添加剂包装、润滑油等产品，以及批量配送、现场加油、应急供应等专业服务。" />
      </Helmet>

      <ProductHero onQuoteClick={() => setQuoteModalVisible(true)} />
      <ProductDetails />
      <ProductServices />
      <ProductDownloads />
      
      <QuoteModal 
        visible={quoteModalVisible}
        onCancel={() => setQuoteModalVisible(false)}
        onSubmit={handleQuoteSubmit}
      />
    </>
  )
}

export default Products