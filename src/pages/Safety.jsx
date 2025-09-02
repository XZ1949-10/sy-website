import React, { useState } from 'react'
import { message } from 'antd'
import { Helmet } from 'react-helmet-async'
// API集成导入
import { useAPI } from '../hooks/useAPI'
import api from '../services/api'
// 组件导入
import {
  SafetyHero,
  CertificationSection,
  SafetyStats,
  TrainingSection,
  PolicySection,
  EmergencyBanner,
  DocumentPreviewModal
} from '../components/Safety'
// 样式导入
import { StyledSafety } from '../styles/pages/SafetyStyles'

const Safety = () => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewDocument, setPreviewDocument] = useState(null)
  const [downloadingFile, setDownloadingFile] = useState(null)

  // API数据获取 - 保持向后兼容的回退机制
  const { data: apiSafetyPolicies } = useAPI(api.safety.getPolicies, { immediate: true })
  const { data: apiCertifications } = useAPI(api.safety.getCertifications, { immediate: true })

  // 智能回退机制：优先使用API数据，如果没有则使用静态数据
  const certifications = apiCertifications || [
    {
      icon: <AuditOutlined />,
      title: 'ISO 9001:2015',
      desc: '质量管理体系认证',
      status: '有效期至2025年12月',
      type: 'success'
    },
    {
      icon: <SafetyOutlined />,
      title: 'ISO 14001:2015',
      desc: '环境管理体系认证',
      status: '有效期至2025年10月',
      type: 'success'
    },
    {
      icon: <TrophyOutlined />,
      title: 'OHSAS 18001',
      desc: '职业健康安全管理体系',
      status: '有效期至2025年8月',
      type: 'success'
    },
    {
      icon: <FileProtectOutlined />,
      title: '危险化学品经营许可证',
      desc: '0#柴油经营资质',
      status: '有效期至2026年3月',
      type: 'processing'
    },
    {
      icon: <CheckCircleOutlined />,
      title: '港口经营许可证',
      desc: '危险货物港口作业许可',
      status: '有效期至2025年6月',
      type: 'success'
    },
    {
      icon: <TeamOutlined />,
      title: '安全生产标准化',
      desc: '三级企业认证',
      status: '有效期至2025年9月',
      type: 'success'
    }
  ]

  const safetyStats = [
    {
      icon: <SafetyOutlined />,
      title: '安全运营天数',
      value: 1256,
      suffix: '天'
    },
    {
      icon: <TeamOutlined />,
      title: '安全培训小时',
      value: 8640,
      suffix: '小时'
    },
    {
      icon: <CheckCircleOutlined />,
      title: '安全检查次数',
      value: 324,
      suffix: '次'
    },
    {
      icon: <TrophyOutlined />,
      title: '安全奖项',
      value: 12,
      suffix: '项'
    }
  ]

  const policies = apiSafetyPolicies || [
    {
      id: 'hse-manual',
      icon: <FileProtectOutlined />,
      title: 'HSE管理手册',
      desc: '包含健康、安全、环境管理的完整体系文件',
      size: '2.5 MB',
      downloadUrl: '/documents/hse-manual.pdf'
    },
    {
      id: 'emergency-plan',
      icon: <SafetyOutlined />,
      title: '应急预案',
      desc: '各类事故应急处理预案及操作指南',
      size: '1.8 MB',
      downloadUrl: '/documents/emergency-plan.pdf'
    },
    {
      id: 'safety-procedures',
      icon: <AuditOutlined />,
      title: '安全作业规程',
      desc: '详细的安全操作标准和规范要求',
      size: '3.2 MB',
      downloadUrl: '/documents/safety-procedures.pdf'
    }
  ]

  // 事件处理函数
  const handleDownloadDocument = (policy) => {
    setDownloadingFile(policy.id)
    // 模拟下载
    setTimeout(() => {
      message.success(`${policy.title} 下载成功！`)
      setDownloadingFile(null)
    }, 1000)
  }

  const handlePreviewDocument = (policy) => {
    setPreviewDocument(policy)
    setPreviewVisible(true)
  }

  return (
    <StyledSafety>
      <Helmet>
        <title>安全与合规 - 舟山天骏石油化工有限公司</title>
        <meta name="description" content="舟山天骏石化严格遵守安全生产法规，持有完备的资质认证，建立了完善的HSE管理体系，确保每一滴燃油的安全品质。" />
      </Helmet>

      {/* Hero Section */}
      <SafetyHero />

      {/* 认证展示 */}
      <CertificationSection certifications={certifications} />

      {/* 安全统计 */}
      <SafetyStats safetyStats={safetyStats} />

      {/* 安全培训进度 */}
      <TrainingSection />

      {/* 政策文件下载 */}
      <PolicySection 
        policies={policies} 
        handleDownloadDocument={handleDownloadDocument}
        handlePreviewDocument={handlePreviewDocument}
        downloadingFile={downloadingFile}
      />

      {/* 紧急联系横幅 */}
      <EmergencyBanner />

      {/* 文档预览模态框 */}
      <DocumentPreviewModal 
        previewVisible={previewVisible}
        setPreviewVisible={setPreviewVisible}
        previewDocument={previewDocument}
        handleDownloadDocument={handleDownloadDocument}
        downloadingFile={downloadingFile}
      />
    </StyledSafety>
  )
}

export default Safety