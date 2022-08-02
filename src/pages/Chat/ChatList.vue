<template>
  <div class="q-mt-sm">
    <div
      class="q-ma-md text-font text-weight-meduim text-subtitle1 text-grey-7"
    >
      Your Messages
    </div>
    <div v-for="message in messages" :key="message.name">
      <router-link :to="`/chat/${message.name}`">
        <q-list bordered padding>
          <q-item clickable v-ripple>
            <q-item-section top avatar>
              <q-avatar rounded>
                <img :src="message.img" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ message.name }}</q-item-label>
              <q-item-label caption lines="2">{{ message.msg }}</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useMeta } from "quasar";
import messages from "../../data/messages";
const metaData = {
  title: "Medikals || Chats",
};

export default {
  setup() {
    useMeta(metaData);
    return {
      messages,
    };
  },
};
</script>
