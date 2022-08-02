<template>
  <div class="fullscreen text-accent text-center flex flex-center">
    <div>
      <img
        class="q-ml-xl"
        alt="Quasar logo"
        src="~assets/heart.svg"
        style="width: 300px; height: 300px"
      />

      <div style="font-size: 20vh" class="text-font">404</div>

      <div class="text-h5" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-lg"
        color="accent"
        text-color="white"
        unelevated
        to="/dashboard"
        label="Take a ride back Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { useMeta} from "quasar"
const metaData = {
  title:"Medikals || 404"
}
export default {
  name: "Error404",
  setup() {
    useMeta(metaData)
  }
}
;
</script>
