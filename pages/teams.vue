<template>
  <div>
    <v-layout row wrap>
     
    </v-layout>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Getter } from "vuex-class";
import { Route } from "vue-router";
import { getCountryImg } from "~/plugins/country_code.js";
@Component({
  components: {}
})
export default class extends Vue {
  //   @State matches;
  //   search: string = "";
  //   @Getter("getFutureGames") getFutureGames;
  fetch({ store }) {
    store.dispatch("getAllTeams");
  }
}
</script>
<style>
.icon-image {
  width: 45px;
  height: 45px;
}
</style>
