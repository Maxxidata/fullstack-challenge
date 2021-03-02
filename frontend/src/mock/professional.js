import mock from './mock'

const database = [
  {
    id: '1',
    name: 'Mike',
    phone: '(45) 9999-9999',
    email: 'mike@gmail.com ',
    type: {
      id: '1',
      description: 'Médico(a)'
    },
    status: true
  },
  {
    id: '2',
    name: 'Pedro',
    phone: '(45) 9999-9999',
    email: 'pedro@gmail.com ',
    type: {
      id: '2',
      description: 'Professor(a)'
    },
    status: false
  }
]

mock.onGet('/professionals').reply(() => [200, { items: database }])
