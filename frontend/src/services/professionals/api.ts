import { AxiosResponse } from 'axios';
import api from '../api';

const route = '/professional';

export default {
  findAll: (): Promise<AxiosResponse<any>> => {
    return api.get(`${route}`);
  },
};
