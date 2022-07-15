<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="mdi-less-than"
          color="grey-7"
          to="/chats"
        />
      </q-toolbar>
    </q-header> -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- footer menu -->
    <q-footer class="bg-white">
      <q-card class="curved-card">
        <div class="row justify-center">
          <div class="q-gutter-xl q-pa-md">
            <q-btn
              round
              flat
              color="accent"
              icon="mdi-microphone-outline"
              size="md"
            />
            <q-btn
              round
              color="red"
              icon="mdi-phone-hangup-outline"
              size="30px"
            />
            <q-btn
              round
              flat
              color="accent"
              icon="mdi-video-outline"
              size="md"
            />
          </div>
        </div>
      </q-card>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MainLayout",
  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>

<style scoped>
.curved-card {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
</style>
