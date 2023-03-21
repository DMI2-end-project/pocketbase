<template>
  <ul>
    <p>person</p>
    <li v-for="person in persons">
      {{ person.firstname }}
    </li>
  </ul>
</template>

<script>
import PocketBase from 'pocketbase';
const pb = new PocketBase('https://pocketbase-dmi2.fly.dev');
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
