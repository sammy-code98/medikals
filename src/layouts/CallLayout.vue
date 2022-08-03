<template>
  <q-layout view="hHh lpR fFf">
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
        <span class="text-accent text-h6 text-font">{{ $route.name }}</span>
        <q-space />
        <q-btn flat round dense icon="mdi-dots-vertical" color="grey-7" />
      </q-toolbar>
    </q-header>
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

            <!-- :to="`/chat/${msgHeader}`"  -->
            <q-btn
              round
              color="red"
              icon="mdi-phone-hangup-outline"
              size="30px"
              to="/chats"
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
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
export default {
  name: "MainLayout",
  setup() {
    const route = useRoute();
    let msgHeader = ref("");

    function getHeader() {
      msgHeader = route.params.private;
    }
    onMounted(() => {
      getHeader();
    });

    watchEffect(() => getHeader());
    return {
      msgHeader,
    };
  },
};
</script>

<style scoped>
.curved-card {
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
}
</style>
