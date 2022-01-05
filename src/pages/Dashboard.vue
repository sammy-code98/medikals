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
  </div>
</template>
<script>
import SearchInput from "../components/SearchInput.vue";
export default {
  components: {
    SearchInput,
  },
  setup() {},
};
</script>
