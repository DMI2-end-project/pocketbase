<template>
  <ul>
    <li v-for="person in persons">
      {{ person.firstname }}
    </li>
  </ul>
</template>

<script>
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
export default {
  name: "configurator",
  components: {},
  data() {
    return {
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
    }
  }
}
</script>