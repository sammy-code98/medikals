<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        name="me"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['Greetings Dr.', 'hey, how are you?']"
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

      <q-chat-message
        :name="drName"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="allTexts"
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
import { db } from "src/boot/firebase";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";

export default {
  setup() {
    const route = useRoute();
    let drName = ref("");
    const content = ref(null);

    function getDrName() {
      drName = route.params.private;
    }

    async function getDbText() {
      let allTexts = [];
      const q = query(collection(db, "chats"));
      onSnapshot(q, (snap) => {
        snap.forEach((doc) => {
          allTexts.push({
            id: doc.id,
            content: doc.data().content,
            // date: doc.data().date.toDate().toDateString(),
          });
        });
        content.value = allTexts;
        console.log(content);
      });
    }

    onMounted(() => {
      getDrName();
      getDbText();
    });

    watchEffect(() => getDrName());
    return {
      drName,
      getDrName,
      content,
    };
  },
};
</script>
