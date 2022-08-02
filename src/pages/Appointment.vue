<template>
  <div class="q-mt-sm">
    <EventCard v-for="event in eventData" :key="event.name" v-bind="event" />
  </div>
</template>
<script>
import EventCard from "../components/EventCard.vue";
import eventData from "../data/eventData";
import { useMeta } from "quasar";
const metaData = {
  title: "Medikals || Appointments",
};
export default {
  components: { EventCard },
  setup() {
    useMeta(metaData);
    return {
      EventCard,
      eventData,
    };
  },
};
</script>
