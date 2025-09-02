import React from 'react'
import { Row, Col, Progress, Timeline } from 'antd'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrainingSectionWrapper } from './styles'

const TrainingSection = () => {
  const { ref: trainingRef, inView: trainingInView } = useInView({ threshold: 0.1 })

  return (
    <TrainingSectionWrapper className="section" ref={trainingRef}>
      <div className="container">
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={trainingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2>安全培训体系</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
                建立全员全覆盖的安全培训体系，确保每位员工都具备必要的安全意识和操作技能。
              </p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>新员工安全培训</span>
                  <span>100%</span>
                </div>
                <Progress percent={100} strokeColor="var(--color-success)" />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>危险作业人员培训</span>
                  <span>98%</span>
                </div>
                <Progress percent={98} strokeColor="var(--color-primary)" />
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>应急演练参与率</span>
                  <span>95%</span>
                </div>
                <Progress percent={95} strokeColor="var(--color-warning)" />
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>安全考核通过率</span>
                  <span>97%</span>
                </div>
                <Progress percent={97} strokeColor="var(--color-info)" />
              </div>
            </motion.div>
          </Col>
          
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={trainingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Timeline
                items={[
                  {
                    color: 'green',
                    children: (
                      <>
                        <h4>入职安全教育</h4>
                        <p>新员工必须完成40小时安全培训</p>
                      </>
                    )
                  },
                  {
                    color: 'blue',
                    children: (
                      <>
                        <h4>岗位安全培训</h4>
                        <p>针对具体岗位进行专项安全技能培训</p>
                      </>
                    )
                  },
                  {
                    color: 'orange',
                    children: (
                      <>
                        <h4>定期考核评估</h4>
                        <p>每季度进行安全知识和技能考核</p>
                      </>
                    )
                  },
                  {
                    color: 'red',
                    children: (
                      <>
                        <h4>应急演练</h4>
                        <p>每月组织应急预案演练和实操训练</p>
                      </>
                    )
                  }
                ]}
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </TrainingSectionWrapper>
  )
}

export default TrainingSection
