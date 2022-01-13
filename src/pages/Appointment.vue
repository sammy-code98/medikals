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
export default {
  components: { EventCard },
  setup() {
    return {
      EventCard,
      eventData,
    };
  },
};
</script>
