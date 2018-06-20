<template>
  <v-flex sm4 >
      <v-card class="elevation-4">
          <v-card-media 
            class="white--text"
            height="200px"
            :src="getCountryImage(match[`${team}_team`].code)">
          </v-card-media>
          <v-card-title primary-title  style=" display: flex;flex-wrap: wrap;justify-content: center; align-items: center;">
            <div>
              <h3 class="headline mb-0">{{match[`${team}_team`].country}}</h3>
            </div>    
          </v-card-title>
          <v-card-title primary-title  style=" display: flex;flex-wrap: wrap;justify-content: center; align-items: center;">
            <div>
              <h3 class="headline mb-0" style="font-size: 45px!important;color: blue;">{{match[`${team}_team`].goals}}</h3>
            </div>    
          </v-card-title>
          <!-- <v-card-title style=" display: flex;flex-wrap: wrap;justify-content: center; align-items: center;">
            <div v-for="match_events in goalEvents(match.home_team_events)" :key="match_events.id" >
              <div class="grey--text" >{{match_events.player}}</div><br/>
            </div>
          </v-card-title> -->
      </v-card>
  </v-flex>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

import { getCountryImg } from "~/plugins/country_code.js";

@Component({})
export default class extends Vue {
  @Prop() match: any;
  @Prop() team: string;

  getCountryImage(iso) {
    return getCountryImg(iso);
  }
}
</script>

