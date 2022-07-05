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
          <span class="q-ma-sm text-accent text-subtitle1 text-font"
            >Lagos, Nigeria</span
          >
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
        <q-tabs class="text-primary">
          <q-route-tab icon="mdi-home" exact to="/dashboard" />

          <q-route-tab icon="mdi-chat-processing-outline" exact to="/chat" />

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
      <Search class="q-mt-sm" />
      <div class="row justify-between q-pa-md">
        <div class="text-accent text-font text-h6 text-weight-thin">
          Upcoming Events
        </div>
        <div
          class="text-primary text-font text-weight-bold cursor-pointer q-mt-sm"
        >
          See all
        </div>
      </div>
      <EventCard v-bind="eventData" />

      <div class="row justify-between q-pa-md">
        <div class="text-accent text-font text-h6 text-weight-thin q-mt-md">
          Let's find you a doctor
        </div>
        <div class="q-mt-sm">
          <q-btn flat color="primary" round icon="mdi-tune-variant" />
        </div>
      </div>
      <FindTab />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Search from "../components/SearchInput.vue";
import location from "../components/LocationBtn.vue";
import EventCard from "../components/EventCard.vue";
import FindTab from "../components/FindTab.vue";

const eventData = {
  name: "Dr. Samuel Ugo Uzor",
  field: "Dentist",
  date: "Mon,Jan 02, 22 01:23pm-5:00pm",
};
export default {
  name: "MainLayout",
  components: { location, Search, EventCard, FindTab },
  setup() {
    return {
      eventData,
    };
  },
};
</script>
