import { AxiosHttpClient } from '@/infra/usecases/http'

class RemoteProfessionalType {
  static getById (id) {
    return AxiosHttpClient.get(`/professional-types/${id}`)
  }

  static create (data) {
    return AxiosHttpClient.post('/professional-types', data)
  }

  static update (id, data) {
    return AxiosHttpClient.put(`/professional-types/${id}`, data)
  }
}

export default RemoteProfessionalType
