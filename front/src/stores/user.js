import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const users = reactive([
    {
      name: "",
      title: "",
      age: "",
    },
  ]);

  const getUserState = () => {
    axios
      .get("http://localhost:5050/users")
      .then((response) => {
        console.log(response.data);
        users = response.data;
      })
      .catch((error) => {
        //assign state validation with error
        // validation.value = error.response.data;
        console.log(err);
      });
  };

  return { users, getUserState };
});
