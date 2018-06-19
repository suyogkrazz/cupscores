<template>
<v-flex xs8 sm8 offset-sm2 class="mt-3 mb-3">
  <v-card class="elevation-3 pt-5 pb-5 "  >
      <v-layout align-center>
        <v-flex>
          <h1 class="display-3" style="text-align:center">{{ $t('match.live') }}</h1>
        </v-flex>
      </v-layout>
      <v-layout v-for="match in current" :key="match.fifa_id"  class="pl-1 pr-1 mt-4" row justify-center>
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
   <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header" class="heading">Detail</div>
          <v-card>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>
  
</v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Route } from "vue-router";

import Card from "~/components/Card.vue";

@Component({
  components: {
    Card
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
}
</script>
