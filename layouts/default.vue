<template>
  <b-container class="" fluid>
    <TheNav />
    <Nuxt />
  </b-container>
</template>

<script lang="ts">
import TheNav from '@/components/navigation/TheNav.vue'
export default {
  components: {
    TheNav,
  },
}
</script>
