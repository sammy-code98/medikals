<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="chevron_left"
          color="grey-7"
          to="/dashboard"
        />
        <q-space />
        <span class="text-accent text-h6 text-font">{{ $route.name }}</span>
        <q-space />

        <q-btn flat round dense icon="mdi-dots-vertical" color="grey-7" />
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square class="q-pa-md">
        <q-btn
          color="accent"
          label="Make an Appointment"
          class="full-width text-font text-subtitle1~"
          dense
          no-caps
          @click="prompt = true"
        />
      </q-card>

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-form @submit.prevent="makeAppointment">
            <q-card-section>
              <div class="text-h6 text-accent text-center">
                Make An Appointment
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-input
                dense
                outlined
                class="text-font text-subtitle1 q-mb-md"
                v-model="docName"
              />

              <q-input
                dense
                outlined
                class="text-font text-subtitle1 q-mb-md"
                v-model="docField"
              />

              <q-input
                dense
                outlined
                autofocus
                v-model="date"
                class="text-font text-subtitle1 q-mb-md"
                type="date"
                hint="Pick an Appointment Date"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please pick a date',
                ]"
              />
              <q-input
                dense
                outlined
                v-model="time"
                type="time"
                hint="Pick an Appointment Time"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please pick a time',
                ]"
              />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Cancel" v-close-popup />
              <q-btn
                flat
                label="Add Appointment"
                type="submit"
              />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuasar } from "quasar";

export default {
  name: "MainLayout",
  setup() {
    const route = useRoute();
    const router = useRouter();
    let name = ref("");
    let field = ref("");
    const $q = useQuasar();

    function getName() {
      name.value = route.params.profile;
    }

    function getField() {
      field.value = route.params.speciality;
    }

    function makeAppointment() {
      $q.notify({
        message: "Appointment Booked  Successfully",
        position: "top-right",
        color: "accent",
      });
      router.push("/appointments");
    }
    onMounted(() => {
      getName();
      getField();
    });
    watchEffect(() => {
      getName();
      getField();
    });
    return {
      prompt: ref(false),
      name,
      date: ref(""),
      time: ref(""),
      docName: ref(name),
      docField: ref(field),
      getName,
      getField,
      makeAppointment,
    };
  },
};
</script>
