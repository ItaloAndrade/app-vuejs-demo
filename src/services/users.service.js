import {BaseService} from './base.service'
import {
  ErrorWrapper,
  ResponseWrapper
} from '../infra/util'

import {API_URL} from '../.env';
import {AuthService}
from '@/services/auth.service'; 

export class UsersService extends BaseService {
  static get entity() {
    return `${API_URL}/user`;
  }

  static async getCurrent() {
    try {
      
      const response = await this.request({
        auth: true
      }).get(`${this.entity}/current`)
      let user = new ResponseWrapper(response, response.data.data);
      user = { 
        ...user.data,
        ...{token: AuthService.getToken() ,roles:['admin']}
      }   
 
      return user;
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}