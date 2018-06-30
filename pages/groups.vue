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
                    <td> <img  style="width: 25px;height: 25px;" :src="getCountryImage(props.item.fifa_code)" class="icon-image" /> <span style="margin-left: 10%;">{{props.item.country}}</span> </td>  
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
  getCountryImage(iso) {
    return getCountryImg(iso);
  }
}
</script>
<style>
.icon-image {
  border-radius: 4px;
  vertical-align: middle;
}
</style>
