<template>
  <b-row>
    <b-col>
      <h1 class="p-3">{{ title }}</h1>
    </b-col>
    <b-col cols="12">
      <TheBreadcrumbs :items="breadcrumbs" />
    </b-col>
  </b-row>
</template>
<script lang="ts">
import Vue from 'vue'
import TheBreadcrumbs from '@/components/pagetitle/TheBreadcrumbs.vue'
import type Breadcrumb from '@/types/design/Breadcrumb'
import type { PropType } from 'vue'
export default Vue.extend({
  components: {
    TheBreadcrumbs,
  },
  props: {
    title: String,
    breadcrumbs: Array as PropType<Breadcrumb[]>,
  },
})
</script>
