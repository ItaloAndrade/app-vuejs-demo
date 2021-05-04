import  {MarvelService}  from '@/services/marver.service';
import $store from '@/store'
import {  isNullUndefined } from "@/infra/util";

export default {
    namespaced: true,
    state: {
        marvel: {
            offset: 1,
            limit: 10,
            total: 0,
            count: 0,
            characters :[]
        }
    },
    getters: {
        getMarvel: (state) => state.marvel
    },
    mutations: {
        SET_CHARACTERS(state, payload) {  
            state.marvel.offset= payload.offset; 
            state.marvel.limit= payload.limit; 
            state.marvel.total= payload.total; 
            state.marvel.count= payload.count; 
            state.marvel.characters= payload.characters;
        }
    },
    actions: {
        refreshCharacters: async ({
            commit
        }, payload) => {
            const currentlist = [...payload.characters];
            const parameter = {
                limit: payload.limit,
                offset: payload.offset + 10, 
            };
            let result = await MarvelService.getCharacters(parameter);   
            const listfavoritos = $store.getters["favorito/getFavoritos"]  
            result.characters = result.characters.map(hero=> {
                hero = {...hero, isFavorite : !(isNullUndefined(listfavoritos.find(favo=>hero.id ==favo.idComic)))}
                return hero;
            }); 
            result.characters = [...currentlist,...result.characters];
            result.count = result.characters.length;
            commit('SET_CHARACTERS', {...result});
        },
        setMarvel: async ({
            commit
        }, payload) => { 
            commit('SET_CHARACTERS', {...payload});
        },
    }
}