<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :name="drName"
        avatar="https://cdn.quasar.dev/img/avatar3.jpg"
        :text="['Greetings.', 'hey, how are you?']"
        stamp="7 minutes ago"
        bg-color="amber-7"
      />
      <q-chat-message
        :name="drName"
        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
        :text="[...Array.from(contents)]"
        bg-color="accent"
        sent
        text-color="white"
        size="8"

      />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

import { ref, onMounted, watchEffect, onActivated } from "vue";
import { db } from "src/boot/firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import { formatDistance } from "date-fns";

export default {
  setup() {
    const route = useRoute();
    let drName = ref("");
    const contents = ref([]);
    const allTexts = ref([]);
    const date = ref();
    const content = ref("");

    function getDrName() {
      drName = route.params.private;
    }

    // convert time stamp
    function convertTimeStamp(val) {
      return formatDistance(val, new Date());
    }

    async function getDbText() {
      const queryDb = query(collection(db, "chats"));
      onSnapshot(queryDb, (snap) => {
        snap.forEach((doc) => {
          allTexts.value.push({
            id: doc.id,
            content: doc.data().content,
            date: convertTimeStamp(Date.now()),
          });
        });
        contents.value = allTexts.value.map((item) => item.content);
        date.value = allTexts.value.map((myDate) => myDate.date);
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
      contents,
      allTexts,
      date,
      convertTimeStamp,
      content,
    };
  },
};
</script>
