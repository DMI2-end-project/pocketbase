<template>
  <video ref="videoRef" class="absolute w-full h-full top-0 left-0 object-cover object-center"
         autoPlay muted playsInline/>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

const videoRef = ref();

onMounted(() => {
  const constraints = {
    audio: false,
    video: {
      facingMode: "environment"
    }
  };
  console.log('window.navigator.mediaDevices', window.navigator, window.navigator.mediaDevices)

  //Starting with Chrome 47, getUserMedia() requests are only allowed from secure origins: HTTPS or localhost.
  if (window.navigator && window.navigator.mediaDevices) {
    window.navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);
  }
})

onBeforeUnmount(() => {
  videoRef.value.pause();

  const stream = getStream();
  if (stream) {
    const tracks = stream.getTracks();
    for (const track of tracks) {
      track.stop();
    }
  }

  videoRef.value.srcObject = null;
})

const getStream = () => {
  return (
      (videoRef.value.srcObject instanceof MediaStream) ? videoRef.value.srcObject : null
  );
}
const handleError = () => {
}
const handleSuccess = async (stream) => {
  videoRef.value.srcObject = stream;
  await videoRef.value.play();
  /*if (onReady) {
    onReady();
  }*/
}
</script>

<style scoped>

</style>