<template>
<v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
    <template v-slot:activator="{on}">
        <v-btn icon large text v-on="on">
            <v-avatar size="36px">
                <img v-if="avatar" :src="avatar" alt="name">
                <v-icon v-else x-large class="blue--text">
                    mdi-account
                </v-icon>
            </v-avatar>
        </v-btn>
    </template>
    <v-list class="pa-0">
        <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <img v-if="avatar" :src="avatar" alt="name">
                    <v-icon v-else x-large class="blue--text">
                        mdi-account
                    </v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{ name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-divider />
        <v-list-item v-for="(item,index) in menuitems" :key="index" :to="!item.href ? {name: item.name} : null" :href="item.href" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" @click="item.click">
            <v-list-item-action v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</v-menu>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import $router from '@/router';

export default {
    name: 'AppBarProfile',
    data() {
        return {
            menuitems: [{
                    icon: 'mdi-account',
                    href: '#',
                    title: 'toolbar.profile',
                    click: (e) => {
                        console.log(e);
                    },
                },
                {
                    icon: 'mdi-settings',
                    href: '#',
                    title: 'toolbar.settings',
                    click: () => {
                        console.log('this.toggleSettingsPanel()');
                        this.toggleSettingsPanel();
                    },
                },
                {
                    icon: 'mdi-exit-to-app',
                    href: '#',
                    title: 'toolbar.logout',
                    click: () => {
                        this.logout();
                    },
                },
            ],
        };
    },
    computed: {
        ...mapGetters("user", [
            'email',
            'name',
            'avatar',
            'status',
        ]),
    },
    methods: {
        ...mapActions({
            logOut: "user/logOut",
            settingsPanelToggle: "settings/settingsPanelToggle",
        }),
        logout() {
            this.logOut();
            $router.push({
                name: 'SignIn',
                replace: true
            }).catch(() => {});
        }, 
        toggleSettingsPanel() {
            this.$vuetify.goTo(0);
            this.settingsPanelToggle();
        },
    },
};
</script>
