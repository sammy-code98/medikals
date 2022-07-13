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
