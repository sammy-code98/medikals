<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="mdi-less-than" color="black" to="/dashboard" />
        <q-space/>
        <div class="text-font text-dark text-h6">Doctors</div>
        <q-space />
        <q-btn flat round dense icon="mdi-dots-vertical" color="black" />
      </q-toolbar>
    </q-header>

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
