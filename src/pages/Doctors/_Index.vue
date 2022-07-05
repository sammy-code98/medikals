<template>
  <q-page>
    <div class="text-center text-h6 q-mt-md q-pb-sm">hello</div>
    <div v-for="appoint in appointment" :key="appoint.name">
      <router-link :to="`/doctor/${appoint.field}/${appoint.name}`">
        <DoctorCard v-bind="appoint" />
      </router-link>
    </div>
  </q-page>
</template>
<script>
import DoctorCard from "../../components/DoctorCard.vue";
const appointment = [
  { name: "Dr. Emma Uchewa", field: "Dentist" },
  { name: "Dr. Daniel Uchewa", field: "Therapist" },
  { name: "Dr. Emma Oko", field: "Dentist" },
  { name: "Dr. Emmam Uchewa", field: "Optometrist" },
];
export default {
  components: { DoctorCard },
  setup() {
    return {
      appointment,
    };
  },
};
</script>
