<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <img
        alt="Quasar logo"
        src="~assets/medics.svg"
        style="width: 300px; height: 400px"
      />
      <div class="text-center text-h2 text-weight-thin fancy-font text-grey-7">
        Medikals
      </div>
    </div>
    <div class="row q-ma-md q-pa-md">
      <q-btn
        class="full-width q-ma-sm text-font"
        no-caps
        color="primary"
        to="/account/signup"
        label="Sign Up"
      />
      <q-btn
        class="full-width q-ma-sm text-font"
        no-caps
        outline
        color="primary"
        to="/account/signin"
        label="Sign In"
      />
    </div>
  </q-page>
</template>

<script>
import { useMeta } from "quasar";

const metaData = {
  title: "Medikals ",
};
export default {
  name: "PageIndex",
  setup() {
    useMeta(metaData);
  },
};
</script>
