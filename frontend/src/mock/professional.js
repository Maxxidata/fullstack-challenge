import mock from './mock'

const database = {
  professionals: [
    {
      id: '1',
      name: 'Mike',
      phone: '(45) 9999-9999',
      email: 'mike@gmail.com',
      professionalType: {
        id: '1',
        description: 'Médico(a)'
      },
      status: true
    },
    {
      id: '2',
      name: 'Pedro',
      phone: '(45) 9999-9999',
      email: 'pedro@gmail.com',
      professionalType: {
        id: '2',
        description: 'Professor(a)'
      },
      status: false
    }
  ]
}

mock
  .onGet('/professional/professionals')
  .reply(() => [200, database.professionals])

mock.onGet(/\/professional\/professionals\/\d+/).reply((request) => {
  const id = request.url.split('/')[2]
  const professional = database.professionals.find(
    (record) => record.id.toString() === id
  )

  if (professional == null) {
    return [404]
  }

  return [200, professional]
})

mock.onPost('/professional/professionals').reply((request) => {
  const professional = JSON.parse(request.data)
  database.professionals.push({
    id: database.professionals.length + 1,
    ...professional
  })
  return [200, professional]
})

mock.onPut(/\/professional\/professionals\/\d+/).reply((request) => {
  const id = request.url.split('/')[2]
  const professional = JSON.parse(request.data)

  if (database.professionals.find((record) => record.id === id) == null) {
    return [404]
  }

  database.professionals = database.professionals.map((record) => {
    if (record.id === id) {
      return professional
    }

    return record
  })

  return [200, professional]
})
