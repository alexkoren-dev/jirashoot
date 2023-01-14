import React, { useState } from 'react';
import {Row, Col} from 'antd'
import MainSection from '../components/MainSection';
import Sidebar from '../components/Sidebar';
import './Antd.css';
import './App.css';

const App = () => {
  const [screenshot, setScreenshot] = useState()
  const [editType, setEditType] = useState('crop')
  return (
    <div>
      <Row className='app-container'>
        <Col span={18} md={17} lg={19}>
          <MainSection onChange={setScreenshot} editType={editType} />
        </Col>
        <Col span={6} md={7} lg={5}>
          <Sidebar screenshot={screenshot} editType={editType} setEditType={setEditType} />
        </Col>
    </Row>
  </div>
  );
}

export default App;
