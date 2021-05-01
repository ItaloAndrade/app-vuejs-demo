<template>
    <v-container fluid>
        <v-row dense>
            <v-col v-for="(card, i) in cards" :key="i" :cols="card.flex">
                <v-card :elevation="5">
                    <v-img :src="card.src" class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px">
                        <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn   :elevation="10" class="mx-2" fab dark small color="pink">
                            <v-icon disabled  color="blue-grey darken-4">
                                mdi-heart
                            </v-icon>
                        </v-btn>
                          <v-btn   :elevation="10" class="mx-2" fab dark small color="pink">
                            <v-icon   >
                                mdi-heart
                            </v-icon>
                        </v-btn>
                        <v-btn :elevation="10" class="mx-2" fab dark small color="purple">
                            <v-icon disabled >
                                mdi-share-variant
                            </v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'ItemComic',
        data: () => ({
            cards: [{
                    title: 'Pre-fab homes',
                    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                    flex: 3
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                    flex: 3
                },
                {
                    title: 'Best airlines',
                    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                    flex: 3
                },
                { 
                    title: 'Pre-fab homes',
                    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                    flex: 3
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                    flex: 3
                },
                {
                    title: 'Best airlines',
                    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                    flex: 3
                },

                {
                    title: 'Pre-fab homes',
                    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                    flex: 3
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                    flex: 3
                },
                {
                    title: 'Best airlines',
                    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                    flex: 3
                },

                {
                    title: 'Pre-fab homes',
                    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                    flex: 3
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                    flex: 3
                },
                {
                    title: 'Best airlines',
                    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                    flex: 3
                },

                {
                    title: 'Pre-fab homes',
                    src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
                    flex: 3
                },
                {
                    title: 'Favorite road trips',
                    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
                    flex: 3
                },
                {
                    title: 'Best airlines',
                    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
                    flex: 3
                },

            ],
        }),
    }
</script>

<style>

</style>  