<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['hey, how are you?']"
        stamp="7 minutes ago"
        sent
        bg-color="amber-7"
      />
      <q-chat-message
        :name="drName"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALLY long message to annoy you...',
        ]"
        size="6"
        stamp="4 minutes ago"
        text-color="white"
        bg-color="accent"
      />
      <q-chat-message
        :name="drName"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="['Did it work?']"
        stamp="1 minutes ago"
        size="8"
        text-color="white"
        bg-color="accent"
      />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { ref, onMounted, watchEffect } from "vue";

export default {
  setup() {
    const route = useRoute();
    let drName = ref("");

    function getDrName() {
      drName = route.params.private;
    }
    onMounted(() => {
      getDrName();
    });

    watchEffect(() => getDrName());
    return {
      drName,
      getDrName,
    };
  },
};
</script>
