<template>
<v-main class="layout-fab">
    <v-btn v-if="settingsPanelBtn" small fab falt fixed rota top="top" right="right" color="primary" class="layout-fab__btn" @click="toggleSettingsPanel">
        <v-icon>mdi-settings</v-icon>
    </v-btn>
    <v-navigation-drawer right disable-resize-watcher temporary fixed app :value="settingsPanelShow" @input="stateSettingsPanel">
        <v-app-bar :dense="toolbarDense" color="secondary" dark>
            <v-toolbar-title>
                {{ $t('settings.title') }}
            </v-toolbar-title>
            <v-tooltip left>
                <template v-slot:activator="{on}">
                    <v-btn absolute dark fab bottom right small color="primary" v-on="on" @click.stop="setDefaultSettingsPanel">
                        <v-icon>mdi-undo-variant</v-icon>
                    </v-btn>
                </template>
                <span>{{ $t('settings.default') }}</span>
            </v-tooltip>
        </v-app-bar>

        <v-subheader class="layout-fab__header">
            {{ $t('settings.version') }}: {{ version }}
        </v-subheader>
        <v-divider />

        <v-expansion-panels accordion>
            <v-expansion-panel>
                <v-expansion-panel-header class="layout-fab__header">
                    {{ $t('settings.configlayout') }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-switch v-for="(toggle, i) in switches" :key="i" dense hide-details color="secondary" class="layout-fab__switch" :disabled="toggle.value === null" :input-value="toggle.value" :label="toggle.label" @change="toggle.change" />
                </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
                <v-expansion-panel-header class="layout-fab__header">
                    {{ $t('settings.theme') }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <app-theme cols="6" />
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-navigation-drawer>
</v-main>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import AppTheme from '@/views/components/Theme';

export default {
    name: 'FabhemaRight',
    components: {
        AppTheme
    },
    data: () => ({}),
    computed: {
        ...mapGetters("settings", [
            'version',
            'themeDark',
            'settingsPanelBtn',
            'settingsPanelShow',
            'toolbarDense',
            'navbarDense',
            'navbarLogo',
            'footerShow',
        ]),
        switches() {
            return [{
                    value: this.toolbarDense,
                    label: `${this.$t('settings.toolbarDense')}: ${this.toolbarDense ? 'on' : 'off'}`,
                    change: this.toggleToolbarDense,
                },
                {
                    value: this.navbarDense,
                    label: `${this.$t('settings.navbarDense')}: ${this.navbarDense ? 'on' : 'off'}`,
                    change: this.toggleNavbarDense,
                },
                {
                    value: this.navbarLogo,
                    label: `${this.$t('settings.navbarLogo')}: ${this.navbarLogo ? 'on' : 'off'}`,
                    change: this.toggleNavbarLogo,
                },
                {
                    value: this.settingsPanelBtn,
                    label: `${this.$t('settings.settingsBtn')}: ${this.settingsPanelBtn ? 'on' : 'off'}`,
                    change: this.toggleSettingsPanelBtn,
                },
                {
                    value: this.footerShow,
                    label: `${this.$t('settings.footer')}:  ${this.footerShow ? 'on' : 'off'}`,
                    change: this.toggleFooterToggle,
                },
                {
                    value: this.themeDark,
                    label: `${this.$t('settings.dark')}:  ${this.themeDark ? 'on' : 'off'}`,
                    change: this.toogleThemeDark,
                },
            ];
        },
    },
    methods: {
        toggleSettingsPanel() {
            this.$vuetify.goTo(0);
            this.$store.dispatch('settings/settingsPanelToggle');
        },

        stateSettingsPanel(state) {
            this.$store.dispatch('settings/settingsPanelState', {
                state
            });
        }, 
        toggleToolbarDense() {
            this.$store.dispatch('settings/toolbarDenseToggle');
        },
        toogleThemeDark() {
            this.$store.dispatch('settings/themeDarkToggle');
        },
       
        toggleNavbarDense() {
            this.$store.dispatch('settings/navbarDenseToggle');
        },
        toggleNavbarLogo() {
            this.$store.dispatch('settings/navbarLogoToggle');
        },
        toggleSettingsPanelBtn() {
            this.$store.dispatch('settings/settingsPanelBtnToggle');
        },
        toggleFooterToggle() {
            this.$store.dispatch('settings/footerToggle');
        },
        setDefaultSettingsPanel() {
            this.$store.dispatch('settings/settingsPanelDefault');
        },
    },
};
</script>

<style>
.layout-fab {
    position: absolute;
}

.layout-fab__btn {
    margin-top: 4px;
    /* fixme: vertical align */
    top:30% !important;
    right: 0 !important;
    border-radius: 3px !important;
}

.layout-fab__switch {
    margin-top: 4px;
}

.layout-fab__header {
    padding: 0 12px 0 12px !important;
}

.v-expansion-panel-content__wrap {
    padding: 0 12px 12px;
}
</style>
