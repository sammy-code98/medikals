<template>
  <div class="menu-slide q-pa-sm">
    <div
      class="q-px-sm q-gutter-sm"
      v-for="(spec, indx) in specialities"
      :key="indx"
    >
      <q-btn
        :color="getCurrentSpec(spec.title) ? 'accent' : 'grey-7'"
        flat
        no-caps
        :class="
          getCurrentSpec(spec.title)
            ? 'text-weight-bold border shadow-2'
            : 'border'
        "
        class="text-font"
        :to="`/doctor/${spec.title}`"
        >{{ spec.title }}</q-btn
      >
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import specialities from "../data/specialities";
export default {
  setup() {
    const route = useRoute();


    function getCurrentSpec(spec) {
      if (route.params.speciality && specialities) {
        if (spec == route.params.speciality) {
          return true;
        } else {
          return false;
        }
      }
    }
    return {
      specialities,
      getCurrentSpec,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-slide {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  font-family: "Sniglet", cursive;
}
.menu-slide::-webkit-scrollbar {
  display: none;
}
.border {
  border-radius: 8px;
}
</style>
