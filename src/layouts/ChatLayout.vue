<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="chevron_left"
          color="grey-7"
          to="/chats"
        />
        <q-space />
        <span class="text-accent text-h6 text-font">{{ msgHeader }}</span>
        <q-space />

        <q-btn
          flat
          round
          dense
          icon="mdi-phone-outline"
          text-color="accent"
          :to="`/voiceCall/${msgHeader}`"
        />

        <q-btn
          flat
          round
          dense
          icon="mdi-video-outline"
          text-color="accent"
          :to="`/videoCall/${msgHeader}`"
        />
      </q-toolbar>
    </q-header>

    <!-- footer menu -->
    <q-footer class="bg-white" bordered>
      <q-card flat square class="q-pa-md">
        <q-input
          outlined
          rounded
          dense
          v-model="newText"
          max
          placeholder="Type your message"
          @keyup.enter="createNewText()"
        >
          <template v-slot:before>
            <q-icon name="mdi-plus" color="accent" />
          </template>
          <template v-slot:after>
            <q-btn
              round
              dense
              flat
              icon="send"
              color="primary"
              :disable="!newText"
              @click="createNewText"
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
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import { db } from "src/boot/firebase";
import { getAuth } from "firebase/auth";

import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
export default {
  name: "MainLayout",
  setup() {
    const newText = ref("");
    const route = useRoute();
    let msgHeader = ref("");
    let authUser = ref({});

    function getHeader() {
      msgHeader = route.params.private;
    }

    async function createNewText() {
      const docRef = await addDoc(collection(db, "chats"), {
        content: newText.value,
        date: new Date(),
      });
      newText.value = "";
    }

    onMounted(() => {
      getHeader();
    });

    watchEffect(() => getHeader());

    return {
      newText,
      msgHeader,
      createNewText,
      authUser,
    };
  },
};
</script>
