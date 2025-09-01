import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Avatar, Modal, Row, Col, Button } from 'antd'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const LeadershipSection = ({ apiLeadershipTeam = null }) => {
  const { ref: leadershipRef, inView: leadershipInView } = useInView({ threshold: 0.1 })
  const [selectedLeader, setSelectedLeader] = useState(null)
  const [leaderModalVisible, setLeaderModalVisible] = useState(false)
  const navigate = useNavigate()

  const leadership = (Array.isArray(apiLeadershipTeam) ? apiLeadershipTeam : null) || [
    {
      name: '张董事长',
      title: '董事长兼总经理',
      bio: '公司创始人，34年石化行业经验，带领公司从小型加油站发展为区域领先的燃油供应商。',
      avatar: '张',
      phone: '138****1234',
      email: 'chairman@tianjun-petro.com'
    },
    {
      name: '张总经理',
      title: '执行总经理',
      bio: '第二代接班人，工商管理硕士，负责公司日常运营管理和战略规划实施。',
      avatar: '总',
      phone: '139****5678',
      email: 'gm@tianjun-petro.com'
    },
    {
      name: '李运营总监',
      title: '运营总监',
      bio: '15年物流运营经验，负责公司配送网络建设和运营效率优化。',
      avatar: '李',
      phone: '137****9012',
      email: 'ops@tianjun-petro.com'
    }
  ]

  const handleLeaderClick = (leader) => {
    setSelectedLeader(leader)
    setLeaderModalVisible(true)
  }

  return (
    <>
      <section className="leadership-section" ref={leadershipRef}>
        <div className="container">
          <motion.div
            className="leadership-header"
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="leadership-badge">LEADERSHIP TEAM</div>
            <h2 className="leadership-main-title">管理团队</h2>
            <p className="leadership-main-subtitle">
              经验丰富的管理团队，引领公司稳健发展，为客户提供专业的燃油供应服务
            </p>
          </motion.div>

          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className="modern-leadership-card"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={leadershipInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleLeaderClick(leader)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-glow-effect"></div>
                <div className="leader-avatar-wrapper">
                  <div className="avatar-bg-gradient"></div>
                  <div className="leader-avatar-modern">
                    <Avatar size={100}>{leader.avatar}</Avatar>
                  </div>
                  <div className="avatar-ring"></div>
                </div>
                <div className="leader-content">
                  <h3 className="leader-name-modern">{leader.name}</h3>
                  <div className="leader-title-badge">{leader.title}</div>
                  <div className="leader-divider"></div>
                  <p className="leader-bio-modern">{leader.bio}</p>
                  <div className="leader-contact-modern">
                    <div className="contact-item-modern">
                      <div className="contact-icon-wrapper">
                        <PhoneOutlined />
                      </div>
                      <span>{leader.phone}</span>
                    </div>
                    <div className="contact-item-modern">
                      <div className="contact-icon-wrapper">
                        <MailOutlined />
                      </div>
                      <span>{leader.email}</span>
                    </div>
                  </div>
                </div>
                <div className="card-border-gradient"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 领导团队详情模态框 */}
      <Modal
        title="领导团队详情"
        open={leaderModalVisible}
        onCancel={() => setLeaderModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setLeaderModalVisible(false)}>
            关闭
          </Button>,
          <Button key="contact" type="primary" onClick={() => {
            setLeaderModalVisible(false)
            navigate('/contact')
          }}>
            联系我们
          </Button>
        ]}
        width={600}
      >
        {selectedLeader && (
          <div style={{ padding: '16px 0' }}>
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8} style={{ textAlign: 'center' }}>
                <Avatar size={120} style={{ backgroundColor: '#1890ff', fontSize: '36px', marginBottom: '16px' }}>
                  {selectedLeader.avatar}
                </Avatar>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ marginBottom: '8px', fontSize: '18px', fontWeight: 'bold' }}>
                    {selectedLeader.name}
                  </h3>
                  <div style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600',
                    display: 'inline-block'
                  }}>
                    {selectedLeader.title}
                  </div>
                </div>
              </Col>
              <Col xs={24} md={16}>
                <div style={{ padding: '0 16px' }}>
                  <h4 style={{ marginBottom: '12px', color: '#1890ff' }}>个人简介</h4>
                  <p style={{ lineHeight: '1.6', marginBottom: '20px', color: '#666' }}>
                    {selectedLeader.bio}
                  </p>
                  
                  <h4 style={{ marginBottom: '12px', color: '#1890ff' }}>联系方式</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <PhoneOutlined style={{ color: '#52c41a' }} />
                      <span>{selectedLeader.phone}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <MailOutlined style={{ color: '#52c41a' }} />
                      <span>{selectedLeader.email}</span>
                    </div>
                  </div>
                  
                  <div style={{
                    marginTop: '20px',
                    padding: '12px',
                    background: '#f6f8fa',
                    borderRadius: '8px',
                    borderLeft: '4px solid #1890ff'
                  }}>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>专业领域</div>
                    <div style={{ fontSize: '14px', fontWeight: '500' }}>
                      {selectedLeader.title.includes('董事长') ? '企业管理 • 战略规划' : 
                       selectedLeader.title.includes('总经理') ? '运营管理 • 团队建设' : 
                       '物流管理 • 运营优化'}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Modal>
    </>
  )
}

export default LeadershipSection