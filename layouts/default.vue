<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
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