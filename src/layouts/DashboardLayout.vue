<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="mdi-view-grid-outline" color="black" />
        <q-space />
        <div>
          <location />

          <q-icon
            name="mdi-google-maps"
            class="text-primary"
            style="font-size: 2em"
          />
          <span class="q-ma-sm text-accent text-subtitle1 text-font">Lagos, Nigeria</span>
        </div>
        <q-space />
        <q-avatar rounded class="q-mx-sm">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square>
        <q-tabs indicator-color="transparent" class="text-black">
          <q-route-tab icon="mdi-home" to="/dashboard" active-class="text-black" exact />
          <q-route-tab
            icon="mdi-chat-processing-outline"
            active-class="text-black"
            exact
          />

          <q-route-tab
            icon="mdi-calendar-month-outline"
            active-class="text-black"
            exact
          />

          <q-route-tab
            icon="mdi-account-outline"
            active-class="text-black"
            exact
          />
        </q-tabs>
      </q-card>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import location from "../components/LocationBtn.vue";
export default {
  name: "MainLayout",
  components: { location },
  setup() {
    return {
      location,
    };
  },
};
</script>
