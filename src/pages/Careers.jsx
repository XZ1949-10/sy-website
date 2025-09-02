import React, { useState } from 'react'
import { Form, message } from 'antd'
import { 
  HeartOutlined,
  TrophyOutlined,
  SafetyOutlined,
  BookOutlined,
  CoffeeOutlined
} from '@ant-design/icons'
import { Helmet } from 'react-helmet-async'
// 模块化组件导入
import {
  CareersHero,
  CultureVideo,
  PositionsSection,
  BenefitsSection,
  ApplicationModal,
  CultureVideoModal
} from '../components/Careers'
// 样式导入
import { StyledCareers } from '../styles/pages/CareersStyles'

const Careers = () => {
  const [applicationVisible, setApplicationVisible] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [videoVisible, setVideoVisible] = useState(false)
  const [form] = Form.useForm()

  const positions = [
    {
      id: 'safety-manager',
      title: '安全管理专员',
      department: '安全管理部',
      location: '舟山市定海区',
      type: '全职',
      experience: '3-5年',
      salary: '8K-12K',
      tags: ['安全管理', '危化品', '应急预案'],
      requirements: [
        '安全工程或相关专业本科以上学历',
        '持有注册安全工程师证书优先',
        '3年以上危化品企业安全管理经验',
        '熟悉危化品相关法律法规',
        '具备应急预案编制和演练经验',
        '责任心强，沟通协调能力优秀'
      ],
      responsibilities: [
        '负责公司安全生产管理制度的制定和执行',
        '组织开展安全检查和隐患排查治理',
        '编制和完善应急预案，组织应急演练',
        '负责安全教育培训和安全文化建设',
        '配合政府部门开展安全监督检查'
      ]
    },
    {
      id: 'logistics-coordinator',
      title: '物流调度员',
      department: '运营部',
      location: '舟山市定海区',
      type: '全职',
      experience: '2-3年',
      salary: '6K-8K',
      tags: ['物流调度', '运输管理', '客户服务'],
      requirements: [
        '物流管理或相关专业大专以上学历',
        '2年以上物流调度或运输管理经验',
        '熟悉危化品运输相关规定',
        '具备良好的沟通协调能力',
        '熟练使用办公软件和调度系统',
        '工作细致认真，抗压能力强'
      ],
      responsibilities: [
        '负责客户订单的调度和配送安排',
        '协调车辆和司机资源，优化配送路线',
        '跟踪订单执行情况，及时处理异常',
        '维护客户关系，处理客户投诉',
        '完成运输数据统计和分析'
      ]
    },
    {
      id: 'sales-representative',
      title: '销售代表',
      department: '销售部',
      location: '舟山市定海区',
      type: '全职',
      experience: '1-3年',
      salary: '8K-15K',
      tags: ['B2B销售', '客户开发', '业绩导向'],
      requirements: [
        '市场营销或相关专业大专以上学历',
        '1年以上B2B销售经验，石化行业优先',
        '具备敏锐的市场洞察力和客户开发能力',
        '良好的谈判技巧和客户关系维护能力',
        '目标导向，抗压能力强',
        '有驾照，能适应区域内出差'
      ],
      responsibilities: [
        '负责区域内客户开发和维护',
        '完成公司下达的销售目标',
        '收集市场信息和竞争对手动态',
        '参与商务谈判和合同签署',
        '处理客户投诉和售后服务'
      ]
    },
    {
      id: 'financial-analyst',
      title: '财务分析师',
      department: '财务部',
      location: '舟山市定海区',
      type: '全职',
      experience: '3-5年',
      salary: '10K-15K',
      tags: ['财务分析', '成本控制', '预算管理'],
      requirements: [
        '财务、会计或相关专业本科以上学历',
        '持有CPA或中级会计师证书优先',
        '3年以上财务分析或成本管理经验',
        '熟练使用Excel、SAP等财务软件',
        '具备良好的数据分析和报告撰写能力',
        '工作严谨细致，具备团队合作精神'
      ],
      responsibilities: [
        '负责公司财务数据分析和报告',
        '参与预算编制和成本控制',
        '协助管理层进行经营决策分析',
        '监控应收账款和现金流',
        '完成税务申报和审计配合'
      ]
    },
    {
      id: 'hr-specialist',
      title: '人力资源专员',
      department: '人力资源部',
      location: '舟山市定海区',
      type: '全职',
      experience: '2-4年',
      salary: '6K-9K',
      tags: ['人事管理', '招聘', '薪酬福利'],
      requirements: [
        '人力资源管理或相关专业本科学历',
        '2年以上人力资源管理经验',
        '熟悉劳动法律法规和人事政策',
        '具备招聘、培训、绩效管理经验',
        '良好的沟通能力和服务意识',
        '熟练使用HR相关软件系统'
      ],
      responsibilities: [
        '负责公司招聘和人才引进',
        '制定和执行培训计划',
        '管理员工薪酬福利和绩效考核',
        '处理员工关系和劳动争议',
        '完善人力资源管理制度'
      ]
    },
    {
      id: 'it-engineer',
      title: 'IT工程师',
      department: '信息技术部',
      location: '舟山市定海区',
      type: '全职',
      experience: '2-5年',
      salary: '8K-12K',
      tags: ['系统维护', '网络管理', '信息安全'],
      requirements: [
        '计算机科学或相关专业本科学历',
        '2年以上IT运维或系统管理经验',
        '熟悉Windows/Linux系统管理',
        '掌握网络配置和安全管理',
        '具备数据库管理和备份经验',
        '学习能力强，责任心强'
      ],
      responsibilities: [
        '负责公司IT基础设施维护',
        '管理企业网络和信息安全',
        '维护各类业务系统正常运行',
        '为员工提供技术支持服务',
        '参与信息化项目建设'
      ]
    }
  ]

  const benefits = [
    {
      icon: <HeartOutlined />,
      title: '完善保障',
      desc: '五险一金、补充医疗保险、意外伤害保险，全方位保障员工权益'
    },
    {
      icon: <TrophyOutlined />,
      title: '激励机制',
      desc: '绩效奖金、年终奖励、股权激励，让努力的你获得应有回报'
    },
    {
      icon: <BookOutlined />,
      title: '学习发展',
      desc: '内训课程、外部培训、学历提升补贴，持续提升个人能力'
    },
    {
      icon: <CoffeeOutlined />,
      title: '工作环境',
      desc: '现代化办公环境、弹性工作制、团队建设活动'
    },
    {
      icon: <SafetyOutlined />,
      title: '职业发展',
      desc: '明确的晋升通道、导师制培养、跨部门轮岗机会'
    },
    {
      icon: <HeartOutlined />,
      title: '员工关怀',
      desc: '生日福利、节日礼品、健康体检、员工旅游'
    }
  ]

  const handleApply = (position) => {
    setSelectedPosition(position)
    setApplicationVisible(true)
  }

  const handleApplicationSubmit = (values) => {
    // 模拟提交申请
    setTimeout(() => {
      message.success('申请已提交，我们会在3个工作日内联系您！')
      setApplicationVisible(false)
      form.resetFields()
    }, 1000)
  }

  const handleVideoPlay = () => {
    setVideoVisible(true)
  }

  return (
    <StyledCareers>
      <Helmet>
        <title>招聘信息 - 舟山天骏石油化工有限公司</title>
        <meta name="description" content="加入天骏石化团队，在专业的危化品企业中发展您的职业生涯。我们提供有竞争力的薪酬、完善的福利和广阔的发展空间。" />
      </Helmet>

      {/* Hero Section */}
      <CareersHero />

      {/* Company Culture Video */}
      <CultureVideo handleVideoPlay={handleVideoPlay} />

      {/* Job Positions */}
      <PositionsSection positions={positions} handleApply={handleApply} />

      {/* Employee Benefits */}
      <BenefitsSection benefits={benefits} />

      {/* Application Modal */}
      <ApplicationModal 
        applicationVisible={applicationVisible}
        setApplicationVisible={setApplicationVisible}
        selectedPosition={selectedPosition}
        form={form}
        handleApplicationSubmit={handleApplicationSubmit}
      />

      {/* Culture Video Modal */}
        <CultureVideoModal 
          videoVisible={videoVisible}
          setVideoVisible={setVideoVisible}
        />
    </StyledCareers>
  )
}

export default Careers