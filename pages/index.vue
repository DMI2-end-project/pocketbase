<script setup>
import {onMounted, onBeforeUnmount, watch} from 'vue';
import * as tmImage from '@teachablemachine/image';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Components
import Camera from "../components/Camera";

// Const
const modelURL = '/tm-models/model.json';
const metadataURL = '/tm-models/metadata.json';
let fps = 2;
let interval = 1000 / fps;

// Reactive
const persons = ref([]);

const videoComponent = ref(null);

const timeout = ref(null);
const frameRequestID = ref(null);
const model = ref(null);
const ready = ref(false);
const exp = ref('');
let then = ref(Date.now());

// Methods
const getPerson = async () => {
  const result = await pb.collection('person').getList(1, 20);
  this.persons = result.items;
}

const load = async () => {
  model.value = await tmImage.load(modelURL, metadataURL);
}

const predict = async () => {
  // predict can take in an image, video or canvas html element
  //console.log('predict', videoComponent.value, videoComponent.value.videoRef)
  if (model && videoComponent.value && videoComponent.value.videoRef && videoComponent.value.videoRef.videoWidth) {
    let rawModel = toRaw(model.value);
    let prediction = await rawModel.predict(videoComponent.value.videoRef);
    prediction.forEach(predict => {
      if (predict.probability > .8 && predict.className !== 'None') {
        console.log('predict', predict.className)
        clearTimeout(timeout.value);
        exp.value = predict.className;
      } else if (!(predict.probability > .8 && predict.className === 'None')) {
        exp.value = '';
      }
    })
  }
}

const update = async () => {
  frameRequestID.value = window.requestAnimationFrame(update);
  const now = Date.now();
  const delta = now - then.value;

  if (delta > interval) {
    then.value = now - (delta % interval);
    await predict();
  }
}

watch(ready, async (newValue, oldValue) => {
  console.log('watch', newValue, model.value)
  if (newValue && model.value) {
    update();
  }
})

// Lifecycle Hooks
onMounted(() => {
  //getPerson();
  load();
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frameRequestID.value)
})

const onReady = () => {
  console.log('ready')
  ready.value = true;
}

</script>

<template>
  <h1>Test</h1>
  <Camera ref="videoComponent" style="width: 100%; border: #00dc82 1px solid" @ready="onReady"/>
  <ul>
    <li v-for="person in persons">
      {{ person ? person.firstname : '' }}
    </li>
  </ul>
</template>