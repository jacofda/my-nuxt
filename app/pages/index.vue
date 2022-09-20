<template>
  <div>
    <TheTitle title="Homepage" :breadcrumbs="breadcrumbs" />
    {{ message }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheTitle from '@/components/pagetitle/TheTitle.vue'
import type Breadcrumb from '@/types/design/Breadcrumb'

export default Vue.extend({
  data() {
    const message: string = 'Ciaooo'
    const name: string = 'IndexPage'
    const breadcrumbs: Breadcrumb[] = []
    return {
      message,
      name,
      breadcrumbs,
    }
  },
  components: { TheTitle },
})
</script>
