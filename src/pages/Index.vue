<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <img
        alt="Quasar logo"
        src="~assets/medics.svg"
        style="width: 300px; height: 400px"
      />
      <div class="text-center text-h2 text-weight-thin fancy-font">Medicals</div>
    </div>
    <div class="row q-ma-md q-pa-md">
      <q-btn class="full-width q-ma-sm" rounded no-caps color="primary" label="Sign Up" />
      <q-btn class="full-width q-ma-sm" rounded no-caps outline color="primary" label="Sign In" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>
