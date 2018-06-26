<template>
<v-flex xs8 sm8 offset-sm2 class="mt-3 mb-3" >
  <div v-for="match in current" :key="match.fifa_id">
  <v-card class="elevation-3 pt-5 pb-5 "  >
      <v-layout align-center>
        <v-flex>
          <h1 class="display-3" style="text-align:center">{{ $t('match.live') }}</h1>
        </v-flex>
      </v-layout>
      <v-layout class="pl-1 pr-1 mt-4" row justify-center>
        <card :match="match" :team="`home`"></card>
        <v-flex sm1 row justify-center align-center style="display: flex;align-items: center;">
            <div class="display-4 text-md-center text-xs-center mx-auto " >
              -   
              <img src="~/assets/soccer.png">
            </div>
        </v-flex>
        <card :match="match" :team="`away`"></card>
      </v-layout>
  </v-card> 
   <v-expansion-panel expand>
        <v-expansion-panel-content :value="true">
            <div slot="header" class="heading">
              <h2>{{$t('match.details') }}</h2>
            </div>
            <stats :match="match"></stats>
        </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Route } from "vue-router";
import Stats from "~/components/Stats.vue";
import Card from "~/components/Card.vue";

import { getCountryImg } from "~/plugins/country_code.js";
@Component({
  components: {
    Card,
    Stats
  }
})
export default class extends Vue {
  @State current;

  fetch({ store }) {
    store.dispatch("getCurrentMatch");
  }
  goalEvents(data: Array<any>) {
    return data.filter(d => d.type_of_event == "goal");
  }
  getCountryImage(iso) {
    return getCountryImg(iso);
  }
}
</script>


<style>
.icon-image {
  width: 35px;
  height: 35px;
}
</style>
