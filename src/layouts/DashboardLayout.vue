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
          <q-route-tab icon="search" exact to="/search" />

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
        <div class="q-mx-md q-mt-sm text-font text-grey-7 text-h6">
          Hi <span class="text-h5 text-accent">{{ email.split("@")[0] }} </span> !👋
        </div>
        <div class="q-mx-md text-font text-grey-7 text-h4">
          Keep taking care of your health
        </div>
      </div>
      <div class="row justify-between q-pa-md">
        <div class="text-accent text-font text-h6 text-weight-thin">
          Upcoming Appointments
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
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";

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
  components: { location, EventCard, FindTab },
  setup() {
    const userName = ref("");
    const email = ref("");
    const auth = getAuth();
    const user = auth.currentUser;

    onMounted(() => {
      if (user) {
        email.value = user.email;
      } else {
        console.log("no username");
      }
    });

    return {
      eventData,
      email,
    };
  },
};
</script>
