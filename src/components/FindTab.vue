<template>
  <div class="menu-slide q-px-md q-gutter-md">
    <q-btn
      outline
      flat
      color="accent"
      no-caps
      class="text-font border shadow-1"
      label="Gynecologist"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Psychologist"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Anesthesiologists"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Psychiatrist"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Obstetricians"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Neurologists"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Radiologists"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Dentists"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Pediatricians "
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Cardiologists "
    />
  </div>
</template>
<script>
export default {
  setup() {
    return {};
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
