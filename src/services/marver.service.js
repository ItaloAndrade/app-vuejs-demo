 import {
     BaseService
 } from './base.service'
 import {
     ResponseWrapperMarvel
 } from '../infra/util'
 import {
     API_URLMARVEL,
     APIKEY,
     HASH
 } from '../.env';

 export class MarvelService extends BaseService {


     static async getCharacters(params = {}) {

         try { 
             params = {
                 ...params,
                 apikey: APIKEY,
                 hash: HASH,
                 ts: 1
             }
             const response = await this.request({
                 auth: false
             }).get(`${API_URLMARVEL}?${this.querystring(params)}`) 
             let characters = new ResponseWrapperMarvel(response.data); 
             return characters
         } catch (error) {
             throw new Error('ERRO ACESS API MARVEL !!!');
         }
     }
 }