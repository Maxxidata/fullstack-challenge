import mock from './mock'

const database = {
  professionalTypes: [
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
}

mock
  .onGet('/professional-types')
  .reply(() => [200, { items: database.professionalTypes }])

mock.onGet(/\/professional-types\/\d+/).reply((request) => {
  const id = request.url.split('/')[2]
  const professional = database.professionalTypes.find(
    (record) => record.id.toString() === id
  )

  if (professional == null) {
    return [404]
  }

  return [200, professional]
})

mock.onPost('/professional-types').reply((request) => {
  const professional = JSON.parse(request.data)
  database.professionalTypes.push({
    id: database.professionalTypes.length + 1,
    ...professional
  })
  return [200, professional]
})

mock.onPut(/\/professional-types\/\d+/).reply((request) => {
  const id = request.url.split('/')[2]
  const professional = JSON.parse(request.data)

  if (database.professionalTypes.find((record) => record.id === id) == null) {
    return [404]
  }

  database.professionalTypes = database.professionalTypes.map((record) => {
    if (record.id === id) {
      return professional
    }

    return record
  })

  return [200, professional]
})
