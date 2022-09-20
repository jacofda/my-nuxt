<template>
  <div>
    <TheTitle v-if="dog" :title="dog.breed" :breadcrumbs="breadcrumbs" />
        <b-container v-if="dog">
          <b-row>
            <b-col lg="9">
            
            <div class="cardWrapper"
                  @mouseover="hover = true"
                  @mouseleave="hover = false"
                  :class="{ active: hover }"
            >
              <b-card
                  overlay
                  :img-src="dog.photo"
                  :img-alt="dog.breed"
                  text-variant="white"
                  :title="dog.breed"
                  :sub-title="dog.breedType"
                />
              </div>

            </b-col>
            <TheSidebar />
          </b-row>
      </b-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Route } from 'vue-router'
import TheTitle from '@/components/pagetitle/TheTitle.vue'
import TheSidebar from '@/components/TheSidebar.vue'
import type Breadcrumb from '@/types/design/Breadcrumb'
import Dog from '@/types/Dog'
import { Context } from '@nuxt/types'

export default Vue.extend({

  components: {
    TheTitle,
    TheSidebar,
  },

  data() {
    return {
      id: parseInt(this.$route.params.id) as number,
      breadcrumbs: [] as Breadcrumb[],
      dog: {} as Dog,
      hover: false as boolean
    }
  },

  async fetch(ctx: Context) {
    this.dog = (await ctx.$axios.get<Dog>(`http://localhost:3001/dogBreeds/${ctx.route.params.id}`)).data;
    console.log(ctx.$axios);
    // this.dog = await ctx.$axios.$get<Dog>(`http://localhost:3001/dogBreeds/${this.id}`)
    this.breadcrumbs = [{ text: 'Dogs', href: '/dogs' }, {text: this.dog.breed}]
  },
  fetchOnServer: true,
})
</script>

<style scoped>
.card-img-overlay{transition: 0.3s;}
.cardWrapper .card-img-overlay{background:rgba(1,1,1,.2);}
.cardWrapper.active .card-img-overlay{background:rgba(1,1,1,0);}
h6.card-subtitle{color:rgba(255,255,255,.8) ! important}
</style>