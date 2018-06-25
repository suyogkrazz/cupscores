<template>
  <v-layout row wrap>
        <v-flex v-for="match in upcomingMatches" :key="match.fifa_id"  xs4 sm4 class="pa-4" >
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
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";
import { Route } from "vue-router";
import { getCountryImg } from "~/plugins/country_code.js";
@Component({
  components: {
    // Card
  }
})
export default class extends Vue {
  @State matches;
  nuxtI18n= {
    paths: {
      en: '/about-us', // -> accessible at /about-us (no prefix since it's the default locale)
      np: '/a-propos'
    }
  }
  fetch({ store }) {
    store.dispatch("getAllMatch");
  }

  getCountryImage(iso) {
    return getCountryImg(iso);
  }
  get upcomingMatches(){
      return this.matches.filter(match=>match.status == "future")
  }
}
</script>
<style>
.icon-image {
  width: 45px;
  height: 45px;
}
</style>
