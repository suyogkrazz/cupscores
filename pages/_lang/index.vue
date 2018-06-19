<template>
    <v-toolbar color="blue darken-1 white--text" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
     
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
       <v-toolbar-title>{{ $t('home.title') }}</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon>
                    <v-avatar>
                        <img src="~/assets/fifa.png">
                    </v-avatar>
      </v-btn>
    </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Route } from "vue-router";

@Component({
  components: {}
})
export default class extends Vue {
  @State locale;
  $route: Route;
  items: Array<any> = [
    { title: "नेपाली", locale: "np" },
    { title: "English", locale: "en" }
  ];
  changeLang(path) {
    this.$router.replace({ path: path });
  }
}
</script>
<style scoped>
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
</style>