import mock from './mock'

const database = [
  {
    id: '1',
    description: 'Médico(a)',
    status: true
  },
  {
    id: '2',
    description: 'Professor(a)',
    status: true
  }

]

mock.onGet('/professional-types').reply(() => [200, { items: database }])
