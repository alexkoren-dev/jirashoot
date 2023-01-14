import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import { getApi} from '../utils/api';

const Settings = ({ onSettingChange }) => {
  const [form] = Form.useForm();
  const [isSaving, setIsSaving] = useState(false)

  const onFinish = async (values) => {
    const {host, username, password} = values

    try {
      setIsSaving(true)
      const res = await getApi(`/projects?username=${username}&host=${host}&password=${password}`)
      if(res.code === 400)
        throw Error
      else {
        chrome.storage.local.set({'jira-settings': JSON.stringify({
          host,
          username,
          password
        })}, () => {
          message.info('Jira credentials saved successfully!')
        })
    
        onSettingChange(values)
        setIsSaving(false)
      }
    } catch (error) {
      setIsSaving(false)
      message.error('This credential is not correct. Plase try to use correct one.')
    }
  };
  
  useEffect(() => {
    chrome.storage.local.get(['jira-settings'], async (result) => {
      if(result['jira-settings']) {
        const settings = JSON.parse(result['jira-settings'])
        form.setFieldsValue(settings)
        // setInitialState(settings)
        onSettingChange(settings)
      }
    })
  }, [])

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      layout="vertical"
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label="URL"
        name="host"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{marginBottom: 15}}
      >
        <Input size="large" placeholder='https://your-domain.atlassian.net'/>
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        style={{marginBottom: 15}}
      >
        <Input size="large"/>
      </Form.Item>

      <Form.Item
        label="API Token"
        name="password"
        rules={[{ required: true, message: 'Please input your API token!' }]}
      >
        <Input.Password size="large"/>
      </Form.Item>

      <Form.Item style={{textAlign: 'center'}}>
        <Button type="primary" htmlType="submit" size="large" style={{minWidth: 120, margin: '0 auto'}} loading={isSaving}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Settings
