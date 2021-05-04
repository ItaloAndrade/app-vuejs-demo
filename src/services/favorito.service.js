import {BaseService} from './base.service' 
import { ResponseWrapper } from '../infra/util'
import {API_URL} from '../.env'; 

export class FavoritosService extends BaseService {
  static get entity() {
    return `${API_URL}/favorito/`;
  } 

  static async getByClient(idClient) {
    try {
      const response = await this.request({auth: true}).get(`${this.entity}getFavoritosByUsuario/${idClient}`)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) { 
       return  [];
    }
  }
}