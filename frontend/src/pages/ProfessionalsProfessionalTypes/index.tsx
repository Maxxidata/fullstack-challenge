import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { ProfessionalInterface } from '../Professionals/professional.interface';

const ProfessionalsProfessionalTypes: React.FC = () => {
  const [professionals, setProfessionals] = useState<ProfessionalInterface[]>([]);

  useEffect(() => {
    loadProfessionals()
  }, [])

  const loadProfessionals = async () => {
    const response = await api.get('/professional');
    setProfessionals(response.data);
  }

  return (
    <Card title="Profissionais - Profissões" hoverable>
      {professionals.map(professional => (
        <div>
          {professional.name} - {professional.professionalType.description}
        </div>
      ))}
    </Card>
  )
}

export default ProfessionalsProfessionalTypes;
