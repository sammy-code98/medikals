<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="mdi-less-than"
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
