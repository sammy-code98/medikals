<template>
  <div>
    <DocCard />
  </div>
</template>
<script>
import { useMeta } from "quasar";
import DocCard from "./Doctors/_Index.vue";
const metaData = {
  title: "Medicals || Home",
};
export default {
  components: {
    DocCard,
  },
  setup() {
    useMeta(metaData);
  },
};
</script>
