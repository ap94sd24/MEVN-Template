<script>
import axios from "axios";
export default {
  props: ["physician"],
  data() {
    return {
      appointments: [],
    };
  },
  watch: {
    physician(newObj, oldObj) {
      if (newObj !== oldObj) {
        axios
          .get(`/api/appointments/${this.physician._id}`)
          .then((response) => {
            this.appointments = response.data;
          })
          .catch((err) => console.error(err));
      }
    },
  },
};
</script>
<template>
  <div class="col-9">
    <h2>{{ physician.name }}</h2>
    <span>{{ physician.email }}</span>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Time</th>
          <th scope="col">Kind</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in appointments" :key="item._id">
          <th scope="row">{{ idx + 1 }}</th>
          <td>{{ item.clientName }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
