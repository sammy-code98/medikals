<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="mdi-view-grid-outline" color="black" />
        <q-space />
        <q-input
          class="q-ma-sm"
          dense
          rounded
          outlined
          v-model="text"
          placeholder="Search Medics Messenger"
        />
        <q-space />
        <q-avatar rounded class="q-mx-sm">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square>
        <q-tabs
          class="text-grey-7"
          active-class="text-accent"
          indicator-color="transparent"
        >
          <q-route-tab icon="mdi-home" exact to="/dashboard" />

          <q-route-tab icon="mdi-chat-processing-outline" exact to="/chats" />

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
import { ref } from "vue";
export default {
  name: "MainLayout",
  setup() {
    return {
      text: ref(""),
    };
  },
};
</script>
