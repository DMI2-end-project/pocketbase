<script setup>
import {onMounted, onBeforeUnmount, watch} from 'vue';
import * as tmImage from '@teachablemachine/image';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Components
import Camera from "../components/Camera";

// Const
// TODO : train it better
const modelURL = '/tm-models/model.json';
const metadataURL = '/tm-models/metadata.json';
let fps = 2;
let interval = 1000 / fps;

const Experience = Object.freeze({
  NONE: 'None',
  DIGGING: 'Digging',
  WATERING: 'Watering',
  PLANTING: 'Planting'
})

// Reactive
const videoComponent = ref(null);

const timeout = ref(null);
const frameRequestID = ref(null);
const model = ref(null);
const ready = ref(false);
const action = ref('');
let then = ref(Date.now());

// Methods
const load = async () => {
  model.value = await tmImage.load(modelURL, metadataURL);
}

const predict = async () => {
  // predict can take in an image, video or canvas html element
  if (model && videoComponent.value && videoComponent.value.videoRef && videoComponent.value.videoRef.videoWidth) {
    let rawModel = toRaw(model.value);
    let prediction = await rawModel.predict(videoComponent.value.videoRef);
    prediction.forEach(predict => {
      if (predict.probability > .8) {
        clearTimeout(timeout)

        timeout.value = setTimeout(() => {
          action.value = predict.className;
        }, 2000);
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
  if (newValue && model.value) {
    update();
  }
})

watch(action, (newValue, oldValue) => {
  if (newValue !== 'None') {

  }
})

// Lifecycle Hooks
onMounted(() => {
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
  <h1>{{ action }}</h1>
  <Camera ref="videoComponent" style="width: 100%; border: #00dc82 1px solid" @ready="onReady"/>
  <div v-show="action !== Experience.NONE" class="absolute top-0 left-0 bg-black/80 flex items-center justify-center">
    <div class="bg-white p-10">{{ action }}</div>
  </div>
</template>