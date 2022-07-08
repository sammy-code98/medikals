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
          to="/chats"
        />
        <q-space />
        <span class="text-accent text-h6 text-font">e{{ $route.name }}</span>
        <q-space />

        <q-btn flat round dense icon="mdi-dots-vertical" color="black" />
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square class="q-pa-md">
        <q-input
          outlined
          rounded
          dense
          autogrow
          v-model="newText"
          placeholder="Type your message"
        >
          <template v-slot:after>
            <q-btn
              round
              dense
              flat
              icon="send"
              color="primary"
              :disable="!newText"
            />
          </template>
        </q-input>
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
    const newText = ref("");
    return {
      newText,
    };
  },
};
</script>
