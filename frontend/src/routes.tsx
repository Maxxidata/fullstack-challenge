import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

import Professionals from './pages/Professionals';
import AddProfessional from './pages/Professionals/views/Add';
import EditProfessional from './pages/Professionals/views/Edit';

import ProfessionalTypes from './pages/ProfessionalTypes';
import AddProfessionalType from './pages/ProfessionalTypes/views/Add';
import EditProfessionalType from './pages/ProfessionalTypes/views/Edit';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      
      <Route path="/professionals" component={Professionals} />
      <Route path="/professionals-add" component={AddProfessional} />
      <Route path="/professionals-edit/:id" component={EditProfessional} />

      <Route path="/professional-types" component={ProfessionalTypes} />
      <Route path="/professional-types-add" component={AddProfessionalType} />
      <Route path="/professional-types-edit/:id" component={EditProfessionalType} />
    </BrowserRouter>
  );
}

export default Routes;