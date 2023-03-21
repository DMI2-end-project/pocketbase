<script setup>
import {onMounted, onBeforeUnmount} from 'vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

// Const

// Reactive
const persons = ref([]);

// Methods
const getPerson = async () => {
  const result = await pb.collection('person').getList(1, 20);
  this.persons = result.items;
}

// Lifecycle Hooks
onMounted(() => {
  getPerson();
})

onBeforeUnmount(() => {
})

</script>

<template>
  <h1>Home</h1>
  <ul>
    <li v-for="person in persons">
      {{ person ? person.firstname : '' }}
    </li>
  </ul>
</template>