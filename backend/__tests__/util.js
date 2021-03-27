export const valideProfessionalType = () => {
  return {
    id: 1,
    description: 'this is a description',
    situation: true,
  }  
}

export const valideProfessional = (professionalTypeId) => {
  return {
    id: 1,
    name: 'Jonh',
    phone: '(00) 0 0000-0000',
    email: 'jonh@email.com',
    professionalTypeId: professionalTypeId,
    situation: true,
  }
}