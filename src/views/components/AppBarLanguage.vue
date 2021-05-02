<template>
<v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{on}">
        <v-btn icon text v-on="on">
            <v-icon>
                mdi-translate
            </v-icon>
        </v-btn>
    </template>
    <v-list class="pa-0">
        <v-list-item v-for="(item,index) in locales" :key="index" ripple="ripple" :target="item.target" rel="noopener" @click="changeLocale(item)">
            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</v-menu>
</template>

<script>
import {
    locales
} from '@/locate/';
import {
    mapActions
} from 'vuex';

export default {
    name: 'AppBarLanguage',
    data: () => ({
        locales,
    }),
    methods: {
        ...mapActions({
            changeLocale: "settings/changeLocale"
        }),
    }
};
</script>
