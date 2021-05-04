<template>
<div  class="text-center" >
    
      <template   class="text-justify" v-if="!getFavoritos.length">
        
      <h4  class="display-1 primary--text ">
          <v-icon size="52" color="primary"  >
                             mdi-heart
                        </v-icon > Sem Favoritos  ....
      </h4>
   
      
    </template>
    <v-card elevation="12" v-else>

    
    <div  dark  class="elevation-23 top-section " >
           
        <div class="subtitle-1 color-font"> <v-icon class="color-font"  >
                            mdi-heart
                        </v-icon >
                        {{$t('favorites.title')}}   </div>
    </div>
    <v-container class="card-change" fluid tag="section">
        <v-simple-table>
            <thead>
                <tr>
                    <th class="primary--text text-justify">
                        ID
                    </th>
                    <th class="primary--text text-justify">
                        Name
                    </th>
                    <th class="primary--text text-justify">
                        Criado Em
                    </th>

                    <th class="primary--text text-justify">
                        Country
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in getFavoritos" :key="item._id" >
                    <td class="  text-justify">{{index}}</td>
                    <td class="  text-justify">{{item.nomeComic}}</td>
                    <td class="  text-justify">
                        {{new Date(item.createdAt)| dateFormat('DD/MM/YYYY')}}
                    </td> 
                    <td class="text-justify">
                        <v-icon large color="primary " @click="deleteItem(item._id)">
                            mdi-close-thick
                        </v-icon>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
    </v-container>
</v-card>
</div>

</template>

<script>
import { 
    mapGetters,mapActions
} from "vuex"; 
export default {
    name: 'TableFavorite',
    components: { 
    },
    methods:{
        ...mapActions({
        'deleteItem': 'favorito/delete'
      })
    },
      computed: {
        ...mapGetters("favorito", [
            'getFavoritos',
        ]),
    },
}
</script>

<style lang="sass" scoped>

    @import '~vuetify/src/styles/styles.sass'
 
    .top-section
      padding: 26px 20px
      background-color: var(--v-success-base) !important 
      border-radius: 4px
      position: relative
      top: -33px
      margin: 0 22px
	
    .card-change
      padding: 10px		
  
    .section-table 
      position: relative
      top: -34px
	
    .color-font
     color: White !important    
</style>
