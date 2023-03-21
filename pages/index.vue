<template>
 <h1>Test</h1>
  <Camera ref="videoRef" style="width: 100%; border: #00dc82 1px solid" :onReady="ready = true"/>
  <ul>
    <li v-for="person in persons">
      {{ person ? person.firstname : '' }}
    </li>
  </ul>
</template>

<script>
import * as tmImage from '@teachablemachine/image';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

import Camera from "../components/Camera";

export default {
  name: "configurator",
  components: {
    Camera
  },
  data() {
    return {
      frameRequestID: null,
      model: null,
      ready: false,
      persons: []
    }
  },
  mounted() {
    //this.getPerson()
  },
  methods: {
    async getPerson() {
      const result = await pb.collection('person').getList(1, 20);
      this.persons = result.items
    },
  }
}
/* */
</script>