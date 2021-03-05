import { AxiosHttpClient } from '@/infra/usecases/http'

class RemoteProfessional {
  static getById (id) {
    return AxiosHttpClient.get(`/professional/professionals/${id}`)
  }

  static create (data) {
    return AxiosHttpClient.post('/professional/professionals', data)
  }

  static update (id, data) {
    return AxiosHttpClient.put(`/professional/professionals/${id}`, data)
  }
}

export default RemoteProfessional
