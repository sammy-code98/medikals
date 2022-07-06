<template>
  <q-page>
    <div
      class="text-center text-subtitle2 text-font text-grey-7 q-mt-md q-pb-sm"
    >
      Select a Doctor of your choice from our team of
      <br />
      <span class="text-accent text-weight-bold">{{ specTitle }}</span>
    </div>
    <div v-for="appoint in appointment" :key="appoint.name">
      <router-link :to="`/doctor/${appoint.field}/${appoint.name}`">
        <DoctorCard v-bind="appoint" />
      </router-link>
    </div>
  </q-page>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import DoctorCard from "../../components/DoctorCard.vue";
const appointment = [
  { name: "Dr. Emma Uchewa" },
  { name: "Dr. Daniel Uchewa" },
  { name: "Dr. Emma Oko" },
  { name: "Dr. Emmam Uchewa" },
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

    onMounted(() => {
      getSpecTitle();
    });

    // watch for changes
    watchEffect(() => getSpecTitle());

    return {
      appointment,
      specTitle,
    };
  },
};
</script>
