<template>
  <Camera ref="videoRef" :onReady="ready = true"/>
  <ul>
    <li v-for="person in persons">
      {{ person.firstname }}
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
    this.getPerson()
  },
  methods: {
    async getPerson() {
      const result = await pb.collection('person').getList(1, 20);
      this.persons = result.items
    },
    async update() {
      this.frameRequestID = window.requestAnimationFrame(this.update);
      let now = Date.now();
      let delta = now - this.then;

      if (delta > interval) {
        this.then = now - (delta % interval);
        await this.predict();
      }
    },
    async predict() {
      if (this.model && this.$refs.videoRef && this.$refs.videoRef.videoWidth) {
        let prediction = await this.model.predict(this.$refs.videoRef);
        prediction.forEach(predict => {
          console.log('predict', predict.className)
          if (predict.probability > .8 && predict.className !== 'Thrash') {
            clearTimeout(timeout);
            this.exp = predict.className;
          } else if (!(predict.probability > .8 && predict.className === 'Thrash')) {
            this.exp = '';
          }
        })
      }
    }
  }
}
</script>