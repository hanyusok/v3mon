<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async refreshData() {
      axios.get("http://localhost:5050/users").then((response) => {
        console.log(response.data);
        this.users = response.data;
      });
    },
    async addNewUser() {},
  },
  mounted() {
    this.refreshData();
  },
};
</script>
<template>
  <h2>Users List</h2>
  <!-- <button @click="refreshData()">Get User list</button> -->
  <div v-for="user in users">
    <h2>{{ user.name }}</h2>
    <p>{{ user.title }}</p>
  </div>
  <h2>Add User</h2>
  <input id="newUser" />&nbsp;
  <button @click="addNewUser()">Add User</button>
</template>
