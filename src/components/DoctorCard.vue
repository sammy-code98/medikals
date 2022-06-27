<template>
  <div class="q-pa-md q-mt-md">
    <div v-for="appoint in appointment" :key="appoint.name">
      <router-link to="/doctor-profile">
        <q-card class="bg-white border shadow-8 q-mb-md" flat bordered>
          <q-card-section horizontal>
            <q-card-section class="col-3 flex flex-center">
              <q-img
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/boy-avatar.png"
              />
            </q-card-section>
            <q-card-section>
              <div class="row justify-between no-wrap">
                <div class="col-auto">
                  <div class="text-h6 text-font text-accent">
                    {{ appoint.name }}
                  </div>
                  <div class="text-caption text-font text-grey-7">
                    {{ appoint.field }}
                  </div>
                </div>
              </div>
              <q-rating
                v-model="ratingModel"
                size="1em"
                :max="5"
                color="yellow"
              />
              <span class="text-font text-grey-7 q-mx-md"
                >5.0 | 2.5k Reviews</span
              >
            </q-card-section>
          </q-card-section>
        </q-card>
      </router-link>
    </div>
  </div>
</template>
<script>
const appointment = [
  { name: "Dr. Emma Uchewa", field: "Dentist" },
  { name: "Dr. Daniel Uchewa", field: "Therapist" },
  { name: "Dr. Emma Oko", field: "Dentist" },
  { name: "Dr. Emma Uchewa", field: "Optometrist" },
];
import { ref } from "vue";
export default {
  setup() {
    return {
      appointment,
      ratingModel: ref(5),
    };
  },
};
</script>
<style lang="scss" scoped>
.border {
  border-radius: 8px;
}
</style>
