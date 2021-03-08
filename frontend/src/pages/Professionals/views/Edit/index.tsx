import { Card, Col, Row } from 'antd';
import React from 'react';

import Header from '../../../../components/Header';
import Form from '../../components/Form';

const Update: React.FC = () => {
  return (
    <>
      <Header title='Profissionais' />

      <div className='professional-wrapper'>
        <Row gutter={16} className='professional-row'>
          <Col span={16}>
            <Card
              title='Editar Profissional'
              hoverable
            >
              <div className='professional-list-container'>
                <Form />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Update;
