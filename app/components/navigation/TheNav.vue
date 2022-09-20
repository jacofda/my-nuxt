<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <TheLogo />
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <TheMenu />
  </b-navbar>
</template>

<script lang="ts">
import TheLogo from '@/components/navigation/TheLogo.vue'
import TheMenu from '@/components/navigation/TheMenu.vue'

export default {
  components: {
    TheLogo,
    TheMenu,
  },
}
</script>
