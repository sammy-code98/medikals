<template>
  <div class="menu-slide q-pa-sm">
    <div
      class="q-px-sm q-gutter-sm"
      v-for="(spec, indx) in speciality"
      :key="indx"
    >
      <q-btn
        outline
        flat
        color="accent"
        no-caps
        class="text-font border shadow-1"
        :to="`/doctor/${spec.title}`"
        >{{ spec.title }}</q-btn
      >
    </div>
  </div>
</template>
<script>
const speciality = [
  { title: "Gynecologist" },
  { title: "Cardiologists" },
  { title: "Pediatricians " },
  { title: "Dentists" },
  { title: "Radiologists" },
  { title: "Neurologists" },
  { title: "Obstetricians" },
  { title: "Psychiatrist" },
  { title: "Anesthesiologists" },
  { title: "Psychologist" },
  { title: "Psychiatrist" },
];
export default {
  setup() {
    return {
      speciality,
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
