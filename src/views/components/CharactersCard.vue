<template>
<v-container justify="center" fluid>
    <v-row>
        <v-col @mouseover="show = i;" @mouseout="show = false;" v-for="(card, i) in getMarvel.characters" :key="i"   class="something-i-need-to-animate">
            <v-card class="pa-3 elevation-3 mt-10" max-width="250px">
                <div class="d-flex grow flex-wrap ">
                    <v-img :src="card.thumbnail.path + '.' + card.thumbnail.extension" class="elevation-23 head-card white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                    </v-img>
                </div>
                  <div class="body-1 ma-2"> 
                    {{card.name}}
                </div> 
                <v-card-actions> 
                     <div class="body-2 ma-2"> 
                    {{ new Date(card.modified ) | dateFormat('DD/MM/YYYY') }}
                </div>  
                    <v-spacer></v-spacer>
                    <v-btn   :elevation="10" @click="addFavorito(card)" class="mx-2" fab dark small color="primary" >
                        <v-icon :class="{'btn-disable': !card.isFavorite }" >
                            mdi-heart
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <infinite-loading style="visibility: hidden;" @infinite="infiniteHandler" />
    </v-row>
    <v-row justify="center" v-if="infiniteHandler">
        <v-progress-circular indeterminate color="primary" class="bottom" />
    </v-row>
</v-container>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";

import InfiniteLoading from 'vue-infinite-loading';
import NProgress from 'nprogress';
export default {
    name: 'Characters',
    components: {
        InfiniteLoading
    },
    data() {
        return {
            show: false,
            isLoading: false,
            bottom: false
        }
    },
    methods: {
        async infiniteHandler($state) {
            NProgress.start();
            await this.getMore();
            let currentList = this.getMarvel;
            if (currentList.count == currentList.total) {
                $state.complete();
                this.NProgress.configure({
                    showSpinner: false
                });
                NProgress.done();
            } else {
                $state.loaded();
                NProgress.done();
            }
        },
        ...mapActions({
            refreshCharacters: "marvel/refreshCharacters",
            setMarvel: "marvel/setMarvel",
        }),
        ...mapActions({
            addFavorito: "favorito/add", 
        }),
        async getMore() {
            let currentList = this.getMarvel;
            await this.refreshCharacters(currentList);
        }
    },
    beforeDestroy() {
        this.setMarvel({
            offset: 1,
            limit: 10,
            total: 0,
            count: 0,
            characters: []
        });
    },
    computed: {
        ...mapGetters("marvel", [
            'getMarvel',
        ]),
    },
    created() {
        NProgress.configure({
            showSpinner: true
        }); // NProgress Configuration

        this.getMore();
    },
}
</script>

<style lang="sass" scoped> 
    @import '~vuetify/src/styles/styles.sass'

    .head-card 
     background-color: var(--v-success-base) !important 
     border-radius: 18px 
     top: -35px !important
     position: relative !important

    .btn-disable
      color: rgb(206 199 199 / 50%) !important

</style>
