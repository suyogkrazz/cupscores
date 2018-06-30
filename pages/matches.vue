<template>
  <div>
    <v-layout row wrap>
       <v-flex xs4 offset-xs4 sm4 offset-sm4>
          <v-text-field v-model="search" solo :label="$t('match.search')" ></v-text-field>
        </v-flex>
    </v-layout>
    <v-dialog v-model="matchDialog" max-width="500px">
        <v-card v-if="selectedMatch" class="pa-4">
          <stats :match="selectedMatch"></stats>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop="matchDialog=false">{{$t('menu.close')}}</v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>    
    <v-layout row wrap>
          <v-flex v-for="match in filteredMatches" :key="match.fifa_id"  xs4 sm4 class="pa-4"  @click.stop="openDetails(match)">
                  <v-card>
                      <v-card-title primary-title >
                          <v-layout row align-center justify-space-around>
                              <v-flex  x4> 
                                  <img  :src="getCountryImage(match.away_team.code)" class="icon-image" />
                                  <div > {{match.away_team.country}}</div>
                              </v-flex>
                              <v-flex  x3> 
                                  <h1 :class="{ 'grey--text': (match.away_team.country != match.winner) }">{{match.away_team.goals}}</h1>
                              </V-flex>    
                              <v-flex  x1 style="text-align:center"> 
                                  <h1>-</h1>  
                              </V-flex>    
                              <v-flex  x3 style="text-align:right"> 
                                  <h1 :class="{ 'grey--text': (match.home_team.country != match.winner)}">{{match.home_team.goals}}</h1>
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
import { State } from "vuex-class";
import { Route } from "vue-router";
import { getCountryImg } from "~/plugins/country_code.js";
import Stats from "~/components/Stats.vue";
@Component({
  components: {
    Stats
  }
})
export default class extends Vue {
  @State matches;
  selectedMatch: any = null;
  matchDialog: boolean = false;
  search: string = "";
  fetch({ store }) {
    store.dispatch("getAllMatch");
  }
  get filteredMatches() {
    if (!this.search) {
      return this.matches;
    }
    return this.matches.filter(item => {
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
  openDetails(match) {
    if (match.home_team_statistics) {
      this.selectedMatch = match;
      this.matchDialog = true;
    }
  }

  getCountryImage(iso) {
    return getCountryImg(iso);
  }
}
</script>
<style>
.icon-image {
  width: 45px;
  height: 45px;
}
</style>
