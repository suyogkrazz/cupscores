<template>
  <div>
    <v-layout row wrap>    
        <v-flex xs8 sm8 offset-sm2 class="mt-3 mb-3" v-for="group in groups" :key="group.id">
            <v-flex xs12 class="pa-3">
                <h2>{{$t('menu.group')}} {{group.letter}}</h2>
            </v-flex>
            <v-data-table
                :headers="headers"
                :items="group.ordered_teams"
                hide-actions
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.country }}</td>  
                    <td class="text-xs-center">{{ props.item.wins }}</td>
                    <td class="text-xs-center">{{ props.item.losses }}</td>
                    <td class="text-xs-center">{{ props.item.draws }}</td>
                    <td class="text-xs-center">{{ props.item.goals_for }}</td>
                    <td class="text-xs-center">{{ props.item.goals_against }}</td>
                    <td class="text-xs-center">{{ props.item.goal_differential }}</td>
                    <td class="text-xs-center">{{ props.item.points }}</td>
                </template>
            </v-data-table>
        </v-flex>
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
  @State groups;
  headers = [
    {
      text: "Team",
      sortable: false,
      value: "country"
    },
    { text: "W", value: "wins", align: "center" },
    { text: "L", value: "losses", align: "center" },
    { text: "D", value: "draws", align: "center" },
    {
      text: "GF",
      value: "goals_for",
      align: "center"
    },
    {
      text: "GA",
      value: "goals_against",
      align: "center"
    },
    {
      text: "GD",
      value: "goal_differential",
      align: "center"
    },
    { text: "PTS", value: "points", align: "center" }
  ];

  fetch({ store }) {
    store.dispatch("getAllGroups");
  }
}
</script>
<style>
.icon-image {
  width: 45px;
  height: 45px;
}
</style>
