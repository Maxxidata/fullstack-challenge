import { Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import ProfessionalList from '../Professionals/components/List';
import ProfessionalTypeList from '../ProfessionalTypes/components/List';

import './index.css'
import ProfessionalsProfessionalTypes from '../ProfessionalsProfessionalTypes';

const Home: React.FC = () => {
  return (
    <>
      <Header title='Início' onBack={false} />
      <div className='home-wrapper'>
        <Row gutter={16} className='home-row'>
          <Col span={16}>
            <ProfessionalsProfessionalTypes />
          </Col>
        </Row>
        <Row gutter={16} className='home-row'>
          <Col span={8}>
            <ProfessionalList
              title={<Link to='/professionals'>Profissionais</Link>} 
            />
          </Col>

          <Col span={8}>
            <ProfessionalTypeList 
              title={<Link to="/professional-types">Profissões</Link>}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
