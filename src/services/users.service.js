import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util' 
 
import { API_URL } from '../.env'

export class UsersService extends BaseService {
  static get entity () {
    return `${API_URL}/user`;
  } 

  static async getCurrent () {
    try { 
      const response = await this.request({ auth: true }).get(`${this.entity}/current`)  
      const user =  new ResponseWrapper(response, response.data.data);
      return user.data;
    } catch (error) { 
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}
