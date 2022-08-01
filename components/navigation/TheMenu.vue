<template>
  <b-collapse id="nav-collapse" is-nav>
    <TheLinks />

    <b-navbar-nav class="ml-auto">
      <TheMenuUser />
    </b-navbar-nav>
  </b-collapse>
</template>

<script lang="ts">
import TheMenuUser from '@/components/navigation/TheMenuUser.vue'
import TheLinks from '@/components/navigation/TheLinks.vue'
export default {
  components: {
    TheMenuUser,
    TheLinks,
  },
}
</script>
