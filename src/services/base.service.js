import qs from 'qs' 
import { Http } from '../infra/http.init'
import { ResponseWrapper, ErrorWrapper } from '../infra/util'
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
export class BaseService {
  
   /**
   * ------------------------------
   * @HELPERS
   * ------------------------------
   */

  static get entity () {
    throw new Error('entity getter not defined')
  }
 
  static request (status = { auth: false }) {
    return new Http(status)
  }

  static responseWrapper (...rest) {
    return new ResponseWrapper(...rest)
  }

  static errorWrapper (...rest) {
    return new ErrorWrapper(...rest)
  }

  static querystring (obj) {
    return qs.stringify(obj, {
      encode: false
    })
  }

  static async getByParameters (parameters = {}) {
   
    const params = { ...parameters }

    try {
      const response = await this.request({auth: true}).get(`${this.entity}`, { params })
      return new ResponseWrapper(response, response.data.data) 
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getById (id = window.required()) {
    try {
      const response = await this.request({auth: true}).get(`${this.entity}/${id}`)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
      
    }
  }
 
  static async create (data = {}) {
    try { 
      NProgress.start();
      const response = await this.request({ auth: true }).post(`${this.entity}`, data)
      setTimeout(() => {
        NProgress.done();
      }, 500);
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async update (id, data = {}) {
   
    try {
      const response = await this.request({ auth: true }).patch(`${this.entity}/${id}`, data)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }

  static async remove (id) {
    
    try {
      const response = await this.request({ auth: true }).delete(`${this.entity}/${id}`)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      throw new ErrorWrapper(error)
    }
  }
}
