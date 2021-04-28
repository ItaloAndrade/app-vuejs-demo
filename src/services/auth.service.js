import axios from 'axios'  

import { API_URL } from '../.env';
import { ErrorWrapper, ResponseWrapper } from './util' ;
import $router from '@/router';

export class AuthService {

  static get entity () {
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
        ...response.data.data,
        ...{
          token: response.token,
          logout: false
        }

      }
      $router.push({
        name: 'Dashboard'
        , replace: true
      }).catch(() => {});
      return  new ResponseWrapper(response, user); 
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
        ...response.data.data,
        ...{
          token: response.token,
          logout: false
        }
      }
      $router.push({
        name: 'Dashboard'
        , replace: true
      }).catch(() => {});
      return  new ResponseWrapper(response, user); 
    } catch (error) { 
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }


  static  logout() {
    try { 
      AuthService.setToken(null); 
      $router.push({
        name: 'SignIn',
         replace: true
      }).catch(() => {});
    } catch (error) {
      throw new Error(error);
    }
  }
 
  static hasToken = () =>
    Boolean(localStorage.getItem('marvelToken') !== 'undefined' &&
    !!localStorage.getItem('marvelToken'))

  static setToken = (status) => localStorage.setItem('marvelToken', status)

  static getToken = () =>  String(localStorage.getItem('marvelToken'))

   
}