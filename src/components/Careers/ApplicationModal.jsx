import React from 'react'
import { Modal, Form, Input, Select, Upload, Button } from 'antd'
import { SendOutlined, UploadOutlined } from '@ant-design/icons'

const { TextArea } = Input
const { Option } = Select

const ApplicationModal = ({ 
  applicationVisible, 
  setApplicationVisible, 
  selectedPosition, 
  form, 
  handleApplicationSubmit 
}) => {
  return (
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
  )
}

export default ApplicationModal
