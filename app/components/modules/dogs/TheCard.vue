<template>
  <b-card class="mb-2 p-0">
    <b-card-img :src="dog.photo" :alt="dog.breed"></b-card-img>

    <b-card-body class="p-2">
      <b-card-title>{{ dog.breed }}</b-card-title>
      <b-card-sub-title class="mb-2">{{ dog.breedType }}</b-card-sub-title>

      <ul class="tagList">
        <li v-for="temperament in dog.temperament" :key="temperament">
          <small
            ><i>{{ temperament }}</i></small
          >
        </li>
      </ul>

      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>
    </b-card-body>

    <b-button
      :to="{ name: 'dogs-id', params: { id: dog.id } }"
      class="btn-block"
      variant="dark"
      >{{ dog.breed }}</b-button
    >
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import Dog from '~/types/Dog'
export default Vue.extend({
  props: {
    dog: Object as PropType<Dog>,
  },
})
</script>
<style scoped>
.card-body {
  padding: 0;
}
.tagList {
  list-style: none;
  padding: 0;
}
.tagList li {
  margin-right: 5px;
  color: rgb(108, 117, 125);
  display: inline-flex;
  line-height: 5px;
}
.tagList li:not(:last-child):after {
  content: ', ';
}
.btn-block {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-color: rgb(52, 58, 64);
  border-width: 2px;
}
</style>
