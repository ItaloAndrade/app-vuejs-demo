import  {MarvelService}  from '@/services/marver.service';


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
            // eslint-disable-next-line no-debugger 
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
            const result = await MarvelService.getCharacters(parameter);   
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