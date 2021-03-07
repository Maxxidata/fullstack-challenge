import { Col, Row } from 'antd';
import React from 'react';
import Header from '../../components/Header';
import List from './components/List';

import './index.css';

const Professionals: React.FC = () => {
  return (
    <>
      <Header title='Profissionais' />

      <div className='professional-wrapper'>
        <Row gutter={16} className='professional-row'>
          <Col span={16}>
            <List />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Professionals;
