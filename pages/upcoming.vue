<template>
  <div>
    <v-layout row wrap>
       <v-flex xs4 offset-xs4 sm4 offset-sm4>
          <v-text-field v-model="search" solo :label="$t('match.search')" ></v-text-field>
        </v-flex>
    </v-layout> 
    <v-layout row wrap>
          <v-flex v-for="match in upcomingMatches" :key="match.fifa_id"  xs4 sm4 class="pa-4" >
                  <v-card>
                      <v-card-title primary-title >
                          <v-layout row align-center justify-space-around>
                              <v-flex  x4> 
                                  <img  :src="getCountryImage(match.away_team.code)" class="icon-image" />
                                  <div > {{match.away_team.country}}</div>
                              </v-flex>
                              <v-flex  x1 style="text-align:center"> 
                                    <h2>{{getDate(match.datetime)}}</h2>
                                  <span>{{getTime(match.datetime)}}</span>  
                              </V-flex>       
                              <v-flex  x4 style="text-align:right"> 
                                  <img  :src="getCountryImage(match.home_team.code)" class="icon-image" />
                                  <div> {{match.home_team.country}}</div>
                              </v-flex>
                          </v-layout>
                      </v-card-title>
                  </v-card>
          </v-flex>
    </v-layout>
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State, Getter } from "vuex-class";
import { Route } from "vue-router";
import moment from "moment";
import { getCountryImg } from "~/plugins/country_code.js";
@Component({
  components: {
    // Card
  }
})
export default class extends Vue {
  @State matches;
  search: string = "";
  @Getter("getFutureGames") getFutureGames;
  fetch({ store }) {
    store.dispatch("getAllMatch");
  }

  getCountryImage(iso) {
    return getCountryImg(iso);
  }
  get upcomingMatches() {
    if (!this.search) {
      return this.getFutureGames;
    }
    return this.getFutureGames.filter(item => {
      return (
        item.away_team.country
          .toLowerCase()
          .indexOf(this.search.toLowerCase()) > -1 ||
        item.home_team.country
          .toLowerCase()
          .indexOf(this.search.toLowerCase()) > -1
      );
    });
  }
  getTime(date) {
    const stillUtc = moment.utc(date).toDate();
    return moment(stillUtc)
      .local()
      .format("hh:mm A");
  }
  getDate(date) {
    const stillUtc = moment.utc(date).toDate();
    return moment(stillUtc)
      .local()
      .format("Do MMM");
  }
}
</script>
<style>
.icon-image {
  width: 45px;
  height: 45px;
}
</style>
