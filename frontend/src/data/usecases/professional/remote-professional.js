import { AxiosHttpClient } from '@/infra/usecases/http'

class RemoteProfessional {
  static getById (id) {
    return AxiosHttpClient.get(`/professionals/${id}`)
  }

  static create (data) {
    return AxiosHttpClient.post('/professionals', data)
  }

  static update (id, data) {
    return AxiosHttpClient.put(`/professionals/${id}`, data)
  }
}

export default RemoteProfessional
