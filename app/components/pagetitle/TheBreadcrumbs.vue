<template>
  <b-breadcrumb :items="breadcrumbsItems" v-show="items?.length"></b-breadcrumb>
</template>

<script lang="ts">
import Vue from 'vue'
import type Breadcrumb from '@/types/design/Breadcrumb'
import type { PropType } from 'vue'

export default Vue.extend({
  props: {
    items: Array as PropType<Breadcrumb[]>,
  },
  computed: {
    breadcrumbsItems(): Breadcrumb[] {
      return [{ text: 'Home', href: '/' }, ...this.items]
    },
  },
})
</script>
