import React, { useState } from 'react'
import { Row, Col, Card, Button, Modal, Form, Input, Select, Upload, message, Tag } from 'antd'
import { 
  EnvironmentOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  DollarOutlined,
  SendOutlined,
  UploadOutlined,
  HeartOutlined,
  TrophyOutlined,
  SafetyOutlined,
  BookOutlined,
  CoffeeOutlined,
  PlayCircleOutlined
} from '@ant-design/icons'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet-async'
// 样式导入
import { StyledCareers } from '../styles/pages/CareersStyles'

const { TextArea } = Input
const { Option } = Select

const Careers = () => {
  const [applicationVisible, setApplicationVisible] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState(null)
  const [videoVisible, setVideoVisible] = useState(false)
  const [form] = Form.useForm()
  
  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.1 })
  const { ref: videoRef, inView: videoInView } = useInView({ threshold: 0.1 })
  const { ref: positionsRef, inView: positionsInView } = useInView({ threshold: 0.1 })
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ threshold: 0.1 })
  const { ref: cultureRef, inView: cultureInView } = useInView({ threshold: 0.1 })

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

  const handleApplicationSubmit = async (values) => {
    try {
      // 模拟提交申请
      await new Promise(resolve => setTimeout(resolve, 1000))
      message.success('申请已提交，我们会在3个工作日内联系您！')
      setApplicationVisible(false)
      form.resetFields()
    } catch (error) {
      message.error('提交失败，请稍后重试')
    }
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
      <section className="hero-section" ref={heroRef}>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">加入我们</h1>
            <p className="hero-subtitle">
              在第三代家族企业中开启您的职业新篇章<br />
              我们寻找有激情、有专业能力的人才加入天骏石化大家庭
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture Video */}
      <section className="culture-video" ref={videoRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={videoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '3rem', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              color: 'var(--color-text-primary)'
            }}>
              企业文化
            </h2>
            <div className="video-placeholder" onClick={handleVideoPlay}>
              <PlayCircleOutlined className="play-icon" />
              <div className="video-title">了解天骏石化企业文化</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="positions-section" ref={positionsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '3rem', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              color: 'var(--color-text-primary)'
            }}>
              招聘职位
            </h2>
            <Row gutter={[24, 24]}>
              {positions.map((position, index) => (
                <Col xs={24} md={12} xl={8} key={position.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={positionsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="position-card">
                      <div className="position-header">
                        <h3 className="position-title">{position.title}</h3>
                        <div className="position-department">{position.department}</div>
                        <div className="position-tags">
                          {position.tags.map((tag, tagIndex) => (
                            <Tag key={tagIndex} color="blue">{tag}</Tag>
                          ))}
                        </div>
                      </div>
                      
                      <div className="position-details">
                        <div className="detail-item">
                          <EnvironmentOutlined />
                          <span>{position.location}</span>
                        </div>
                        <div className="detail-item">
                          <ClockCircleOutlined />
                          <span>{position.type} • {position.experience}</span>
                        </div>
                        <div className="detail-item">
                          <DollarOutlined />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                      
                      <div className="position-requirements">
                        <div className="requirements-title">岗位要求</div>
                        <ul className="requirements-list">
                          {position.requirements.slice(0, 3).map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        type="primary" 
                        className="apply-btn"
                        onClick={() => handleApply(position)}
                      >
                        立即申请
                      </Button>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>
      </section>

      {/* Employee Benefits */}
      <section className="benefits-section" ref={benefitsRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ 
              textAlign: 'center', 
              marginBottom: '3rem', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              color: 'var(--color-text-primary)'
            }}>
              员工福利
            </h2>
            <Row gutter={[32, 32]}>
              {benefits.map((benefit, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="benefit-card">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <h3 className="benefit-title">{benefit.title}</h3>
                      <p className="benefit-desc">{benefit.desc}</p>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <Modal
        title={`申请职位：${selectedPosition?.title || ''}`}
        open={applicationVisible}
        onCancel={() => setApplicationVisible(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleApplicationSubmit}
        >
          <Form.Item
            name="name"
            label="姓名"
            rules={[{ required: true, message: '请输入姓名' }]}
          >
            <Input placeholder="请输入您的姓名" />
          </Form.Item>
          
          <Form.Item
            name="phone"
            label="联系电话"
            rules={[
              { required: true, message: '请输入联系电话' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
            ]}
          >
            <Input placeholder="请输入联系电话" />
          </Form.Item>
          
          <Form.Item
            name="email"
            label="邮箱地址"
            rules={[
              { required: true, message: '请输入邮箱地址' },
              { type: 'email', message: '请输入正确的邮箱地址' }
            ]}
          >
            <Input placeholder="请输入邮箱地址" />
          </Form.Item>
          
          <Form.Item
            name="education"
            label="学历"
            rules={[{ required: true, message: '请选择学历' }]}
          >
            <Select placeholder="请选择学历">
              <Option value="高中">高中</Option>
              <Option value="大专">大专</Option>
              <Option value="本科">本科</Option>
              <Option value="硕士">硕士</Option>
              <Option value="博士">博士</Option>
            </Select>
          </Form.Item>
          
          <Form.Item
            name="experience"
            label="工作经验"
            rules={[{ required: true, message: '请输入工作经验' }]}
          >
            <TextArea rows={3} placeholder="请简述您的相关工作经验" />
          </Form.Item>
          
          <Form.Item
            name="resume"
            label="简历附件"
            rules={[{ required: true, message: '请上传简历' }]}
          >
            <Upload
              beforeUpload={() => false}
              accept=".pdf,.doc,.docx"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>上传简历</Button>
            </Upload>
          </Form.Item>
          
          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Button style={{ marginRight: 8 }} onClick={() => setApplicationVisible(false)}>
              取消
            </Button>
            <Button type="primary" htmlType="submit" icon={<SendOutlined />}>
              提交申请
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Culture Video Modal */}
      <Modal
        title="企业文化视频"
        open={videoVisible}
        onCancel={() => setVideoVisible(false)}
        footer={null}
        width={800}
      >
        <div style={{ 
          height: '450px', 
          background: '#f0f0f0', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderRadius: '8px'
        }}>
          <div style={{ textAlign: 'center', color: '#999' }}>
            <PlayCircleOutlined style={{ fontSize: '4rem', marginBottom: '1rem' }} />
            <div>企业文化宣传视频</div>
            <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>展示天骏石化的企业价值观和团队文化</div>
          </div>
        </div>
      </Modal>
    </StyledCareers>
  )
}

export default Careers