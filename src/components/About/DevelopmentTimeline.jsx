import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const DevelopmentTimeline = () => {
  const { ref: timelineRef, inView: timelineInView } = useInView({ threshold: 0.1 })

  const timelineData = [
    { year: '2014.06', title: '公司成立', subtitle: '产品上市', desc: '公司正式成立，首款产品成功上市，标志着我们进入市场的重要里程碑。' },
    { year: '2015.07', title: '平台建设', subtitle: '搭建平台', desc: '建立完善的业务平台，为后续发展奠定坚实的技术和运营基础。' },
    { year: '2017.02', title: '品牌推广', subtitle: '线上宣传', desc: '全面启动品牌推广战略，通过多渠道营销提升品牌知名度和市场影响力。' },
    { year: '2019.07', title: '企业发展', subtitle: '规模扩张', desc: '业务规模快速扩张，团队不断壮大，企业进入高速发展阶段。' },
    { year: '2020.04', title: '研发创新', subtitle: '技术突破', desc: '加大研发投入，实现多项技术突破，产品创新能力显著提升。' },
    { year: '2021.09', title: '推出新品', subtitle: '产品升级', desc: '推出新一代产品，技术更加先进，功能更加完善，市场竞争力进一步增强。' }
  ]

  return (
    <section className="development-history-section" ref={timelineRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">我们的发展历史</h2>
        </motion.div>

        <div className="development-timeline">
          <div className="timeline-bg-decoration">
            <div className="bg-circle left"></div>
            <div className="bg-circle right"></div>
            <div className="bg-lines"></div>
          </div>

          <div className="timeline-main">
            <div className="timeline-connector"></div>

            <div className="timeline-nodes">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-node"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="node-content">
                    <div className="node-year">{item.year}</div>
                    <div className="node-title">{item.title}</div>
                    {item.subtitle && <div className="node-subtitle">{item.subtitle}</div>}
                    <div className="node-desc">{item.desc}</div>
                  </div>
                  <div className="timeline-dot"></div>
                  <div className="node-spacer"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentTimeline