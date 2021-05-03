import axios from 'axios'
import {  isNullUndefinedEmpty } from "@/infra/util";
import {
  API_URL
} from '../.env';
import {
  ErrorWrapper,
  ResponseWrapper
} from '../infra/util';


export class AuthService {

  static get entity() {
    return `${API_URL}/auth`;
  }

  static async login({
    email,
    password
  }) {
    try {
          
      const response = await axios.post(`${this.entity}/login`, {
        email,
        password
      });
      AuthService.setToken(response.data.token);
      const user = { 
       ...{ token: response.data.token,
          logout: false,
          roles: ['admin']},
          ...response.data.data.user
      } 
      return new ResponseWrapper(response, user);
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async register({
    email,
    name,
    role,
    status,
    password,
    passwordConfirm
  }) {
    try {
      const response = await axios.post(`${this.entity}/register`, {
        email,
        name,
        role,
        status,
        password,
        passwordConfirm
      });

      AuthService.setToken(response.data.token);
      
      const user = { 
        ...{ token: response.data.token,
           logout: false,
           roles: ['admin']},
           ...response.data.data.user
       }  
      return new ResponseWrapper(response, user);
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }


  static logout() {
    try {
      AuthService.setToken(null); 
    } catch (error) {
      throw new Error(error);
    }
  }

  static hasToken = () =>!(isNullUndefinedEmpty(this.getToken()))
     
  static setToken = (status) => localStorage.setItem('marvelToken', status)

  static getToken = () => String(localStorage.getItem('marvelToken'))

}