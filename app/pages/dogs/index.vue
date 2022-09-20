<template>
  <div>
    <TheTitle title="Dogs" :breadcrumbs="breadcrumbs" />
    <b-container>
      <b-row>
        <b-col lg="9">
          <h2 class="mb-0">Some dogs' breed</h2>
          <hr />
          <b-row>
            <b-col md="6" lg="4" v-for="dog in dogs.all" :key="dog.breed">
              <TheCard :dog="dog" />
            </b-col>
          </b-row>
        </b-col>
        <TheSidebar />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheTitle from '@/components/pagetitle/TheTitle.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import TheCard from '@/components/modules/dogs/TheCard.vue'
import type Breadcrumb from '@/types/design/Breadcrumb'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  components: {
    TheTitle,
    TheSidebar,
    TheCard,
  },
  data() {
    const breadcrumbs: Breadcrumb[] = [{ text: 'Dogs', href: '/dogs' }]
    return {
      breadcrumbs,
    }
  },

  async fetch() {
    await this.$store.dispatch('dogs/fetchDogs')
  },

  computed: {
    ...mapState(['dogs']),
  },
  methods: {
    ...mapMutations('dogs', ['fetchDogs']),
  },
})
</script>
