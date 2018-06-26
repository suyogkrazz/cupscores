<template>
          <v-card>
            <v-divider></v-divider>
            <v-list >
                <v-list-tile>
                    <v-list-tile-content>
                        <img  :src="getCountryImage(match.home_team.code)" class="icon-image" />
                    </v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.stats') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">
                        <img  :src="getCountryImage(match.away_team.code)" class="icon-image" />
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.attempts_on_goal}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.shots') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.attempts_on_goal}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.on_target}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.shots_on_target') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.on_target}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.ball_possession}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.possession') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.ball_possession}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.fouls_committed}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.fouls') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.fouls_committed}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.yellow_cards}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.yellow_cards') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.yellow_cards}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.red_cards}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.red_cards') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.red_cards}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.offsides}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.offsides') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.offsides}}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-content>{{match.home_team_statistics.corners}}</v-list-tile-content>
                    <v-list-tile-content class="align-center">{{$t('statistics.corners') }}</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{match.away_team_statistics.corners}}</v-list-tile-content>
                </v-list-tile>
             </v-list>  
          </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { getCountryImg } from "~/plugins/country_code.js";
@Component({})
export default class extends Vue {
  @Prop() match: any;
  getCountryImage(iso) {
    return getCountryImg(iso);
  }
}
</script>

