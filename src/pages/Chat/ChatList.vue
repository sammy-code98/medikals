<template>
  <div class="q-mt-sm">
    <div class="q-ma-md text-font text-weight-meduim text-subtitle1 text-grey-7">Your Messages</div>
    <div v-for="message in messages" :key="message.name">
      <router-link to="/chat">
  <q-list bordered padding>
        <q-item clickable v-ripple>
          <q-item-section top avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Single line item</q-item-label>
            <q-item-label caption lines="2"
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
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
const messages = [
  {
    name: "Dr. Emma Uchewa",
    msg: "code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.",
    img: "https://cdn.quasar.dev/img/boy-avatar.png",
  },
  {
    name: "Dr. Emmamm Uchewa",
    msg: "code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.",
    img: "https://cdn.quasar.dev/img/avatar2.jpg",
  },
  {
    name: "Dr. Emmamm Uchewam",
    msg: "code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.",
    img: "https://cdn.quasar.dev/img/avatar4.jpg",
  },
   {
    name: "Dr. Emm Uchewa",
    msg: "code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.",
    img: "https://cdn.quasar.dev/img/boy-avatar.png",
  },
   {
    name: "Dr. Emwma Uchewa",
    msg: "code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.",
    img: "https://cdn.quasar.dev/img/boy-avatar.png",
  },
   {
    name: "Dr. Emma Udchewa",
    msg: "code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.",
    img: "https://cdn.quasar.dev/img/boy-avatar.png",
  },
   {
    name: "Dr. Emmaq Uchewa",
    msg: "code and solutions to exercises for the book Eloquent JavaScript, and to directly run code in the context of chapters from that book, either to solve exercises to simply play around.",
    img: "https://cdn.quasar.dev/img/boy-avatar.png",
  },
];
export default {
  setup() {
    return {
      messages,
    };
  },
};
</script>
