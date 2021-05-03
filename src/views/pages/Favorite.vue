<template>
    <animated-pulse tag="p">
    <v-container justify="center" fluid>
        <v-row dense>
            <v-col v-for="(card, i) in getMarvel.characters" :key="i" :cols="3" class="something-i-need-to-animate">
                <v-card :elevation="5">
                    <v-img :src="card.thumbnail.path + '.' + card.thumbnail.extension" class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        {{getMarvel.count}} --
                        {{getMarvel.total}}
                        <v-btn :elevation="10" class="mx-2" fab dark small color="pink">
                            <v-icon>
                                mdi-heart
                            </v-icon>
                        </v-btn>
                        <v-btn :elevation="10" class="mx-2" fab dark small color="purple">
                            <v-icon disabled>
                                mdi-share-variant
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
    </animated-pulse>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from "vuex";

    import InfiniteLoading from 'vue-infinite-loading';
    import NProgress from 'nprogress';
    export default {
        name: 'Favorite',
        components: {
            InfiniteLoading
        },
        data() {
            return {
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

<style>

 </style>