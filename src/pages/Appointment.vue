<template>
  <div class="q-mt-sm">
      <EventCard/>
  </div>
</template>
<script>
import EventCard from "../components/EventCard.vue"
export default {
    components: {EventCard},
  setup() {
    return {
        EventCard,
    };
  },
};
</script>
