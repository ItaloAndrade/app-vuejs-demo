import {
  FavoritosService
} from '@/services/favorito.service'; 
import $store from '@/store'

export default {
  namespaced: true,
  state: {
    favoritos: [], 
  },
  getters: { 
    getFavoritos: (state) => state.favoritos,   
  },
  mutations: { 
    SET_FAVORITOS(state, payload) { 
        state.favoritos = payload;
      }
  },
  actions: {
    delete: async ({
      commit,state
    }, payload) => {
      try {  
        console.log(payload);
          await FavoritosService.remove(payload);
          const newList = state.favoritos.filter(obj=>obj._id !== payload) 
          await commit('SET_FAVORITOS',[...newList]); 
      } catch (err) {  
        commit('snackbar/SHOW_MESSAGE', {
          message: err.message,
          color: "pink accent-3",
          timeout: 3500
        }, {
          root: true
        });
      }
    }, 
    get: async ({
      commit
    }) => {
      try {  
 
          const clientId = $store.getters["user/id"];
          const response =  await FavoritosService.getByClient(clientId);  
          const listFavoritos = response == [] ? [] : [...response.data.doc]
          await commit('SET_FAVORITOS',[...listFavoritos]); 
      } catch (err) {  
        commit('snackbar/SHOW_MESSAGE', {
          message: err.message,
          color: "pink accent-3",
          timeout: 3500
        }, {
          root: true
        });
      }
    },
    clean: async ({
      commit
    }) => {
          await commit('SET_FAVORITOS',[]); 
    },
    add: async ({
      commit,state
    }, payload) => {
      try {  
        
        if(state.favoritos.find(obj=>obj.idComic == payload.id))
        {
          commit('snackbar/SHOW_MESSAGE', {
            message: "Favorito já adicionado  ! ",
            color: "green accent-5",
            timeout: 3500
          }, {
            root: true
          });
          return;
        }
        
        let newFavorito = {idComic : payload.id,idUsuario :$store.getters["user/id"] ,
          nomeComic :payload.name,img : payload.thumbnail.path+'.'+payload.thumbnail.extension,active : true }
          const response =   await FavoritosService.create(newFavorito);
          const favorito = {...response.data.doc};  
          const newList = state.favoritos.filter(obj=>obj.idComic !== newFavorito.idComic);
          newList.push(favorito); 
          await commit('SET_FAVORITOS',[...newList]); 
          commit('snackbar/SHOW_MESSAGE', {
            message: "Favorito adicionado ! ",
            color: "green accent-5",
            timeout: 3500
          }, {
            root: true
          });
      } catch (err) {   
        commit('snackbar/SHOW_MESSAGE', {
          message: "Erro ao favoritar ",
          color: "pink accent-3",
          timeout: 3500
        }, {
          root: true
        });
      }
    }, 
  }
}