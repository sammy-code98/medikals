<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn flat round dense icon="mdi-view-grid-outline" color="grey-7" />
        <q-space />
        <div>
          <location />
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
        <q-tabs
          class="text-grey-7"
          active-class="text-accent"
          indicator-color="transparent"
        >
          <q-route-tab icon="mdi-home" to="/dashboard" />

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
      <div>
        <div class="q-mx-md q-mt-sm text-font text-grey-7 text-subtitle1">
          Hi there! 👋
        </div>
        <div class="q-mx-md text-font text-grey-7 text-h4">
          Keep taking care of your health
        </div>
      </div>
      <Search class="q-mt-sm" />
      <div class="row justify-between q-pa-md">
        <div class="text-accent text-font text-h6 text-weight-thin">
          Upcoming Events
        </div>
        <router-link to="/appointments">
          <div
            class="text-primary text-font text-weight-bold cursor-pointer q-mt-sm"
          >
            See all
          </div>
        </router-link>
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
