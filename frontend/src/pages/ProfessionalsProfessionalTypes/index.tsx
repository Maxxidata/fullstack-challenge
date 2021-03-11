import { Card } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/modules/professionals/actions';
import { IProfessional } from '../Professionals/professional.interface';

const ProfessionalsProfessionalTypes: React.FC = () => {
  const dispatch = useDispatch();

  const professionals: IProfessional[] = useSelector((state: any) => state.professionals.data);

  useEffect(() => {
    dispatch(actions.getProfessionals());
  }, [dispatch]);

  return (
    <Card title="Profissionais - Profissões" hoverable>
      {professionals.map((professional: IProfessional) => (
        <div key={professional.id}>
          {professional.name} - {professional.professionalType.description}
        </div>
      ))}
    </Card>
  )
}

export default ProfessionalsProfessionalTypes;
