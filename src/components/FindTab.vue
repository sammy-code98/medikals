<template>
  <div class="menu-slide  q-px-md q-gutter-md">
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
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
    <q-btn
      outline
      unelevated
      color="grey-7"
      no-caps
      class="text-font border"
      label="Outline"
    />
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let gender = ref("");
    return {
      tab: ref("clothes"),
      gender,
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
