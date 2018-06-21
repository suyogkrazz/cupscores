<template>
  <span>
    <v-navigation-drawer
        :clipped="$vuetify.breakpoint.lgAndUp"
        v-model="drawer"
        fixed
        app
      >
        <v-list dense>
          <v-list-tile v-for="item in menu" :key="item.title" @click="changeRoute($i18n.path(item.path))">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ $t(`menu.${item.title}`) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar 
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="blue darken-3"
        dark
        app
        fixed>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-btn icon>
            <v-avatar>
                <img src="~/assets/fifa.png">
            </v-avatar>
          </v-btn>
          <v-toolbar-title>{{ $t('home.title') }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu :nudge-width="90" color="blue darken-1">
            <v-toolbar-title slot="activator">
              <span>{{ $t('home.lang') }}</span>
              <v-icon dark>arrow_drop_down</v-icon>
            </v-toolbar-title>
            <v-list>
              <v-list-tile v-for="item in items" :key="item.title" @click="changeLang(`/${item.locale}`)">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
      </v-toolbar>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Route } from "vue-router";
@Component
export default class extends Vue {
  @State locale;
  $route: Route;
  items: Array<any> = [
    { title: "English", locale: "en" },
    { title: "नेपाली", locale: "np" }
  ];
  drawer: boolean = false;
  menu: Array<any> = [
    { title: "home", icon: "dashboard", path: "" },
    { title: "all_matches", icon: "flag", path: "matches" }
  ];
  changeLang(path) {
    this.$router.replace({ path: path });
  }
  changeRoute(path) {
    this.$router.push({ path: path });
  }
}
</script>
