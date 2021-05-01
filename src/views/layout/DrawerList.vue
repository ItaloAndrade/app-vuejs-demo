<template>
  <v-list :dense="dense" class="layout-drawer">
    <div v-for="item in routes.filter(item => !item.hidden)" :key="item.title">
      <v-list-item v-if="!item.meta.hasSubMenu" :to="item.path" ripple="ripple">
        <v-list-item-icon class="layout-drawer__icon">
          <v-icon>{{ item.meta.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t( item.meta.title ) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group v-else :prepend-icon="item.meta.icon">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>
              {{$t(item.meta.title)  }} 
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="child in item.children" :key="child.title" ripple="ripple">
          <v-list-item-content>
            <v-list-item-title>
              {{$t(child.meta.title )}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>
<script>
  import {
    resolve
  } from 'path';

  export default {
    name: 'DrawerList',
    props: {
      dense: Boolean,
      iconShow: Boolean,
      isNest: Boolean,
      routes: {
        type: Array,
        default: () => {},
      },
      basePath: {
        type: String,
        default: '',
      },
    },
    data() {
      this.onlyOneChild = null;
      return {};
    },
    created() {
      console.log(this.routes)
    },
    methods: {
      isVisibleItem(item) {
        return item.children.length == 0;
      },
      hasOneVisibleChild(children = [], parent) {

        /***/
        const visibleChildren = children.filter((item) => {
          if (item.hidden) return false;
          this.onlyOneChild = item;
          return true;
        });

        /** se e */
        if (visibleChildren.length === 1) {
          this.onlyOneChild.path = resolve(parent.path, this.onlyOneChild.path);
          this.onlyOneChild.meta.icon = this.onlyOneChild.meta.icon || parent.meta.icon || '';
          return true;
        }
        // Show parent if there are no child router to display
        if (visibleChildren.length === 0) {
          this.onlyOneChild = {
            ...parent,
            noVisibleChildren: true
          };
          return true;
        }

        return false;
      },
      resolvePath(path) {
        if (this.isExternal(path)) {
          return path;
        }
        return resolve(this.basePath, path);
      },
      getListIcon(item) {
        return item.meta.icon;
      },
      getListTitle(item) {
        return item.meta ? this.$t(item.meta.title) : '';
      },
    },
  };
</script>

<style>
  .layout-drawer {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  .layout-drawer__icon {
    margin-bottom: 8px;
    margin-top: 8px;
  }
</style>