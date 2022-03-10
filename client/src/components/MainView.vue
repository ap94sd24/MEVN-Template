<script>
import AppointmentList from "./appointments/AppointmentList.vue";
import axios from "axios";
export default {
  components: {
    AppointmentList,
  },
  data() {
    return {
      physicians: [],
      physician: {},
    };
  },
  async created() {
    try {
      const res = await axios.get("/api/physicians");
      this.physicians = res.data;
    } catch (err) {
      console.error(err);
    }
  },

  methods: {
    onSelectPhysician(item) {
      this.physician = item;
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h1>notable</h1>
        <h5>Physicians</h5>
        <ul>
          <li v-for="item in physicians" :key="item._id">
            <span @click="onSelectPhysician(item)">{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <appointment-list :physician="physician" />
    </div>
  </div>
</template>
<style scoped>
li:hover {
  cursor: pointer;
  color: blue;
}

h1 {
  color: rgb(0, 183, 255);
}
</style>
