<script setup>
import {defineEmits, defineExpose, onBeforeUnmount, onMounted, ref} from 'vue';

const emit = defineEmits(['ready'])

const videoRef = ref(null);
defineExpose({videoRef});

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
  if (videoRef.value) {
    videoRef.value.pause();

    const stream = getStream();
    if (stream) {
      const tracks = stream.getTracks();
      for (const track of tracks) {
        track.stop();
      }
    }

    videoRef.value.srcObject = null;
  }
})

const getStream = () => {
  return (
      (videoRef.value && videoRef.value.srcObject instanceof MediaStream) ? videoRef.value.srcObject : null
  );
}
const handleError = () => {
}
const handleSuccess = async (stream) => {
  if (videoRef.value) {
    videoRef.value.srcObject = stream;
    await videoRef.value.play();
    emit('ready');
  }
}

</script>

<template>
  <video ref="videoRef" class="absolute w-full h-full top-0 left-0 object-cover object-center"
         autoPlay muted playsInline/>
</template>