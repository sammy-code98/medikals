<template>
  <div>
    <SearchInput class="q-mt-sm" />
    <div class="row justify-between q-pa-md">
      <div class="text-accent text-font text-h6 text-weight-thin">
        Upcoming Events
      </div>
      <div class="text-primary text-font text-weight-bold cursor-pointer q-mt-sm">
        See all
      </div>
    </div>
    <EventCard/>
     <div class="row justify-between q-pa-md">
      <div class="text-accent text-font text-h6 text-weight-thin q-mt-md">
        Let's find you a doctor
      </div>
      <div class="q-mt-sm">
          <q-btn flat color="primary" round icon="mdi-tune-variant" />
      </div>
    </div>
    <FindTab/>

  </div>
</template>
<script>
import SearchInput from "../components/SearchInput.vue";
import EventCard from "../components/EventCard.vue"
import FindTab from "../components/FindTab.vue"
export default {
  components: {
    SearchInput,
    EventCard,
    FindTab
  },
  setup() {},
};
</script>
