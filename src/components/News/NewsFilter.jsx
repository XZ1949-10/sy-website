import React from 'react'
import { Input, Select } from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
import { StyledNewsFilter } from './styles'

const { Search } = Input
const { Option } = Select

const NewsFilter = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  const categories = [
    { value: 'all', label: '全部分类' },
    { value: 'company', label: '公司动态' },
    { value: 'industry', label: '行业资讯' },
    { value: 'safety', label: '安全管理' },
    { value: 'partnership', label: '合作伙伴' },
    { value: 'achievement', label: '企业荣誉' }
  ]

  return (
    <StyledNewsFilter>
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="filter-item">
              <FilterOutlined />
              <span className="filter-label">筛选：</span>
              <Select
                value={selectedCategory}
                onChange={setSelectedCategory}
                style={{ width: 200 }}
              >
                {categories.map(cat => (
                  <Option key={cat.value} value={cat.value}>{cat.label}</Option>
                ))}
              </Select>
            </div>
            
            <div className="filter-item" style={{ flex: 1, maxWidth: 400 }}>
              <SearchOutlined />
              <Search
                placeholder="搜索新闻标题或内容..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </StyledNewsFilter>
  )
}

export default NewsFilter