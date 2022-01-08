<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="mdi-less-than" color="black" to="/dashboard" />
        <q-space />
        <q-btn flat round dense icon="mdi-dots-vertical" color="black" />
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square class="q-pa-md">
        <q-btn
          color="primary"
          label="Make an Appointment"
          class="full-width text-font text-subtitle1~"
          dense
          no-caps
        />
      </q-card>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  setup() {
    return {};
  },
};
</script>
