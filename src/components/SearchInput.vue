<template>
  <div class="q-pa-md">
    <q-input
      v-model="search"
      round
      dense
      outlined
      type="search"
      placeholder="Search a doctor or nurse"
      class="text-font text-subtitle1 shadow-4"
    >
      <template v-slot:prepend>
        <q-icon name="search" class="text-primary" />
      </template>
    </q-input>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      search: ref(""),
    };
  },
};
</script>
