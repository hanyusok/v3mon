<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios.get("http://localhost:5050/users").then((response) => {
      console.log(response.data);
      this.users = response.data;
    });
  },
};
</script>
<template>
  <div v-for="user in users" :key="user.id">
    <h2>{{ user.name }}</h2>
    <p>{{ user.title }}</p>
  </div>
</template>
