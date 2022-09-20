<template>
  <div>
    <TheTitle title="About" :breadcrumbs="breadcrumbs" />
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheTitle from '@/components/pagetitle/TheTitle.vue'
import type Breadcrumb from '@/types/design/Breadcrumb'

export default Vue.extend({
  components: { TheTitle },
  data() {
    const message: string = 'About'
    const breadcrumbs: Breadcrumb[] = [
      {
        text: 'About',
        href: '/about',
      },
    ]
    return {
      message,
      breadcrumbs,
    }
  },
})
</script>
