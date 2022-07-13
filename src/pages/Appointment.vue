<template>
  <div class="q-mt-sm">
    <EventCard v-for="event in eventData" :key="event.name" v-bind="event" />
  </div>
</template>
<script>
const eventData = [
  {
    name: "Dr. Emma Uchewa",
    field: "Dentist",
    date: "Mon,Jan 02, 22 01:23pm-5:00pm",
  },
  {
    name: "Dr. Emma Uchewa",
    field: "Dentist",
    date: "Mon,Jan 02, 22 01:23pm-5:00pm",
  },
  {
    name: "Dr. Emma Uchewa",
    field: "Dentist",
    date: "Mon,Jan 02, 22 01:23pm-5:00pm",
  },
  {
    name: "Dr. Emma Uchewa",
    field: "Dentist",
    date: "Mon,Jan 02, 22 01:23pm-5:00pm",
  },
];
import EventCard from "../components/EventCard.vue";
import { useMeta } from "quasar";
const metaData = {
  title: "Medicals || Appointments",
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
