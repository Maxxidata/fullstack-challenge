import { Card, Col, Row } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../../../components/Header';
import { IEdit } from '../../../../shared/Interfaces/Edit.interface';
import Form from '../../components/Form';

const Edit: React.FC = () => {
  const { id } = useParams<IEdit>();

  return (
    <>
      <Header title='Profissões' />

      <div className='professional-type-wrapper'>
        <Row gutter={16} className='professional-type-row'>
          <Col span={16}>
            <Card
              title='Editar Profissão'
              hoverable
            >
              <div className='professional-type-list-container'>
                <Form id={Number(id)} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Edit;
