<template>
  <v-list  expand
      nav :dense="dense" class="layout-drawer"> 
    <div v-for="item in routes.filter(item => !item.hidden)" :key="item.title">
      <v-list-item v-if="!item.meta.hasSubMenu" :to="item.path" ripple="ripple" :active-class="`success  `">
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
        
          <v-list-item class="text-center" :to="child.path" v-for="child in item.children" :key="child.title" :active-class="`success white--text `" ripple="ripple">
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
  
  export default {
    name: 'DrawerList',
     components: {},
    props: {
      dense: Boolean,  
      routes: {
        type: Array,
        default: () => {},
      },
      
    },
    data: () => ({})
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