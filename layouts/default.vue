<template> 
  <v-app id="inspire">
    <navbar></navbar>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import Navbar from "~/components/Header.vue";
@Component({
  components: {
    Navbar
  }
})
export default class extends Vue {}
</script>