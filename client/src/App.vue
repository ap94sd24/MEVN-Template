<script>
//import { RouterLink, RouterView } from "vue-router";
import MainView from "./components/MainView.vue";
import axios from "axios";

export default {
  components: {
    MainView,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("/api/test");

      console.log("res data --> " + JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.error(err);
    }
  },
};
</script>

<template>
  <main-view />
</template>
<style></style>
