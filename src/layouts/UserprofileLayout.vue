<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="mdi-less-than"
          color="black"
          to="/dashboard"
        />
        <q-space />
        <q-btn flat round dense icon="mdi-dots-vertical" color="black" />
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square>
        <q-tabs class="text-primary">
          <q-route-tab icon="mdi-home" exact to="/dashboard" />

          <q-route-tab icon="mdi-chat-processing-outline" exact />

          <q-route-tab
            icon="mdi-calendar-month-outline"
            to="/appointments"
            exact
          />

          <q-route-tab icon="mdi-account-outline" exact to="/profile" />
        </q-tabs>
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
