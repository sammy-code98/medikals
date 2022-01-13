<template>
  <div>
    <SearchInput class="q-mt-sm" />
    <div class="row justify-between q-pa-md">
      <div class="text-accent text-font text-h6 text-weight-thin">
        Upcoming Events
      </div>
      <div
        class="text-primary text-font text-weight-bold cursor-pointer q-mt-sm"
      >
        See all
      </div>
    </div>
    <EventCard v-bind="eventData" />
    <div class="row justify-between q-pa-md">
      <div class="text-accent text-font text-h6 text-weight-thin q-mt-md">
        Let's find you a doctor
      </div>
      <div class="q-mt-sm">
        <q-btn flat color="primary" round icon="mdi-tune-variant" />
      </div>
    </div>
    <FindTab />
    <DoctorCard />
  </div>
</template>
<script>
const eventData = {
  name: "Dr. Samuel Ugo Uzor",
  field: "Dentist",
  date: "Mon,Jan 02, 22 01:23pm-5:00pm",
};
import SearchInput from "../components/SearchInput.vue";
import EventCard from "../components/EventCard.vue";
import FindTab from "../components/FindTab.vue";
import DoctorCard from "../components/DoctorCard.vue";
export default {
  components: {
    SearchInput,
    EventCard,
    FindTab,
    DoctorCard,
  },
  setup() {
    return {
      eventData,
    };
  },
};
</script>
