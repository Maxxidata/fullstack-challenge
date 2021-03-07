import { Col, Row } from 'antd';
import React from 'react';
import Header from '../../components/Header';
import List from './components/List';

import './index.css';

const ProfessionalTypes: React.FC = () => {
  return (
    <>
      <Header title='Profissões' />

      <div className='professional-type-wrapper'>
        <Row gutter={16} className='professional-type-row'>
          <Col span={16}>
            <List />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProfessionalTypes;
