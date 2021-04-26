import axios from 'axios' 
import $store from '../store'
import $router from '../router'

export class AuthService {

  static async login({
    email,
    password
  }) {
    try {
      const response = await axios.post(`${process.env.VUE_APP_ROOT_API}/api/auth/login`, {
        email,
        password
      }, {
        withCredentials: true /** save cookie  */
      });

     this._setAuthData({
        accessToken: response.token,
        user: response.data
      });

    } catch (error) {
      throw new Error(error);
    }
  }

  static async logout() {
    try {
      this._resetAuthData();
      $router.push({
        name: 'login'
      }).catch(() => {});
    } catch (error) {
      throw new Error(error);
    }
  }
 
  static hasToken = () =>
    Boolean(localStorage.getItem('marvelToken') !== undefined &&
      localStorage.getItem('marvelToken') !== null)

  static setToken = (status) => localStorage.setItem('marvelToken', status)

  static getToken = () =>  String(localStorage.getItem('marvelToken'))

  _resetAuthData = () => { 
    $store.dispatch('getCurrent'); 
    AuthService.setToken(null);
    AuthService.setBearer('');
  }

   _setAuthData = (accessToken, user) => {

    $store.dispatch('getCurrent', user);
    AuthService.setToken(accessToken);
    AuthService.setBearer(accessToken);

   }
}