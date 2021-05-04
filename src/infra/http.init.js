import axios from 'axios'
import {AuthService}  from '@/services/auth.service'; 

export class Http {
  constructor(status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_ROOT_API
    });
    return this.init();
  }

  init() {   
    if (this.isAuth && AuthService.hasToken()) {
      this.instance.interceptors.request.use(request => {  
        request.headers.authorization =`Bearer ${AuthService.getToken()}`;
        return request;
      }, error => { 
        return Promise.reject(error);
      });
    }
    return this.instance;
  }
}