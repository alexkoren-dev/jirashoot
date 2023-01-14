import React, { useState, useEffect } from 'react';
import { Tabs, Layout, message } from 'antd';
import Settings from './Settings';
import Jira from './Jira';

const { TabPane } = Tabs;

const { Content } = Layout;


const Sidebar = (props) => {
  const [activeKey, setActiveKey] = useState('settings')
  const [jiraSetting, onSettingChange] = useState()

  useEffect(() => {
    if(!jiraSetting || !jiraSetting.host || !jiraSetting.username || !jiraSetting.password)
      setActiveKey('settings')
    else setActiveKey('jira')
  }, [jiraSetting])
  
  const invalidSettings = !jiraSetting || !jiraSetting.host || !jiraSetting.username || !jiraSetting.password
  
  return (
    <Layout>
      <Tabs activeKey={activeKey} centered moreIcon={null} onChange={setActiveKey} addIcon={null} hideAdd={true}>
        <TabPane tab="Jira" key="jira" disabled={invalidSettings}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {
              activeKey === 'jira' && <Jira {...props} jiraSetting={jiraSetting} backtoSettings={() => {
                message.error('Saved credentials is not correct. Please set again.')
                onSettingChange(null)
              }}/>
            }
          </Content>
        </TabPane>
        <TabPane tab="Settings" key="settings">
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Settings onSettingChange={onSettingChange} />
          </Content>
        </TabPane>
      </Tabs>
    </Layout>
  )
}

export default Sidebar;
