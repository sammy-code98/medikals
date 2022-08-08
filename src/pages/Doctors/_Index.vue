<template>
  <q-page>
    <div
      class="text-center text-subtitle2 text-font text-grey-7 q-mt-md q-mx-md q-pb-sm"
    >
      Get medical advice , prescribtions, test and referrals from our team of
      seasoned
      <span class="text-accent text-weight-bold">{{ specTitle }}</span>
    </div>
    <div v-for="appoint in appointment" :key="appoint.name">
      <router-link :to="`/doctor/${specTitle}/${appoint.name}`">
        <DoctorCard v-bind="appoint" />
      </router-link>
    </div>
  </q-page>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import DoctorCard from "../../components/DoctorCard.vue";
let appointment = [
  { name: "Dr. Emma Uchewa" },
  { name: "Dr. Nze Chimdi" },
  { name: "Dr. Peculiar Chidinma" },
  { name: "Dr. George I" },
];

export default {
  components: { DoctorCard },
  setup() {
    const route = useRoute();
    let specTitle = ref("");

    // get speciality params
    function getSpecTitle() {
      specTitle.value = route.params.speciality;
    }
    // shuffle doc cards
    function shuffledAppointment() {
      appointment.sort(() => Math.random() - 0.5);
    }

    onMounted(() => {
      getSpecTitle();
      shuffledAppointment();
    });

    // watch for changes
    watchEffect(() => {
      getSpecTitle();
      shuffledAppointment();
    });

    return {
      appointment,
      specTitle,
      shuffledAppointment,
    };
  },
};
</script>
