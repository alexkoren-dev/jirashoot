import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Select, message, Result } from 'antd';
import { ExpandOutlined, SelectOutlined} from '@ant-design/icons'
import { getApi, postApi, fileUpload } from '../utils/api';
import Logo from './Logo'

const { Option } = Select;

const Jira = ({ screenshot, editType, setEditType, jiraSetting={}, backtoSettings }) => {
    const [projects, setProjects] = useState([]);
    const [assignees, setAssignees] = useState([]);
    const [types, setTypes] = useState([]);
    const [currentProject, setCurrentProject] = useState(null);
    const [loading, setLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const { host, username, password } = jiraSetting || {}

    const getIsseVisibleLink = () => {
      return `${host}/browse/${showSuccess.key}`
    }

    useEffect(() => {
      const getProjects = async () => {
        try {
          const res = await getApi(`/projects?username=${username}&host=${host}&password=${password}`)
          if(res.code === 400)
            throw Error
          else {
            setProjects(res)
            if(res.length > 0)
              setCurrentProject(res[0].id)
          }
        } catch (error) {
          backtoSettings()
        }
      }

      getProjects()
    }, [])

    useEffect(() => {
      const getAssignees = async () => {
        try {
          const res = await getApi(`/projects/${currentProject}/assignees?username=${username}&host=${host}&password=${password}`)
          if(res.code === 400)
            throw Error
          else setAssignees(res)
        } catch (error) {
          backtoSettings()
        }
      }

      const getIssueTypes = async () => {
        try {
          const res = await getApi(`/projects/${currentProject}/issue-types?username=${username}&host=${host}&password=${password}`)
          if(res.code === 400)
            throw Error
          else setTypes(res)
          console.log(res)
        } catch(error) {
          backtoSettings()
        }
      }

      if(projects.length > 0) {
        getAssignees()
        getIssueTypes()
      }
    }, [projects])

    const onFinish = async (values) => {
      const { assignee, description, project, summary, type } = values

      const formData = new FormData()
      formData.append('image', screenshot)
      formData.append('assignee', assignee)
      formData.append('description', description)
      formData.append('project', project)
      formData.append('summary', summary)
      formData.append('type', type)
      formData.append('host', host)
      formData.append('username', username)
      formData.append('password', password)

      try {
        setLoading(true)
        const res = await fileUpload('/issues', formData)

        if(!res.id) {
          throw res.message || 'Something went wrong!'
        } else {
          setShowSuccess(res)
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
        message.error(error)
      }
    };
  
    const onFinishFailed = async (errorInfo) => {
      console.log('Failed:', errorInfo)
    };

    if(showSuccess)
      return (
        <Result
          status="success"
          title="Successfully Created a New Issue!"
          subTitle={<div><a href={getIsseVisibleLink()} target="_blank" style={{wordBreak: 'break-all'}}>{getIsseVisibleLink()}</a></div>}
          extra={[
            <a href={getIsseVisibleLink()} target="_blank" key="go">
              <Button type="primary" key="console">
                Go Issue
              </Button>
            </a>,
            <Button onClick={() => setShowSuccess(null)} key="new">New issue</Button>,
          ]}
        />
    )

    return (
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
          <div style={{display: 'flex', marginRight: 20}}>
            <Button
              type={editType === "crop" ? "primary" : "default"}
              htmlType="button"
              style={{marginRight: 15}}
              shape="circle" icon={<ExpandOutlined />}
              size="large"
              onClick={() => setEditType("crop")}
            >
            </Button>
            <Button
              type={editType === "draw" ? "primary" : "default"}
              size="large"
              htmlType="button"
              shape="circle" icon={<SelectOutlined />}
              onClick={() => setEditType("draw")}
            >
            </Button>
          </div>
          <Logo width="70" height="70"/>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Project"
            name="project"
            rules={[{ required: true, message: 'Please select the project' }]}
            style={{marginBottom: 15}}
          >
            <Select
              showSearch
              size="large"
              placeholder="Select the project"
              onChange={(option) => setCurrentProject(option)}
          >
              {
                projects.map(p => <Option id={p.id} key={p.id} value={p.id}>{p.name}</Option>)
              }
              
          </Select>
          </Form.Item>
    
          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: 'Please select the type' }]}
            style={{marginBottom: 15}}
          >
            <Select
              showSearch
              size="large"
              placeholder="Select the type"
          >
            {
              types.filter(p => p.scope && p.scope.project.id === currentProject).map(p => <Option value={p.id} key={p.id}>{p.name}</Option>)
            }
            {
              types.filter(p => !p.scope).map(p => <Option value={p.id} key={p.id}>{p.name}</Option>)
            }
          </Select>
          </Form.Item>

          <Form.Item
            label="Assignee"
            name="assignee"
            rules={[{ required: true, message: 'Please select assignee' }]}
            style={{marginBottom: 15}}
          >
            <Select
              showSearch
              size="large"
              placeholder="Select the project"
          >
              {
                assignees.map(p => <Option value={p.accountId} key={p.accountId}>{p.displayName}</Option>)
              }
              
          </Select>
          </Form.Item>
    
          <Form.Item
            label="Summary"
            name="summary"
            rules={[{ required: true, message: 'Please input your password!' }]}
            style={{marginBottom: 15}}
          >
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>
    
          <Form.Item style={{marginTop: 15, textAlign: 'center'}}>
            <Button type="primary" htmlType="submit" size="large" loading={loading}>
              Create issue
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  };

  export default Jira