<template>
  <div>
    <q-img
      src="https://cdn.quasar.dev/img/avatar.png"
      img-class="my-custom-image"
      style="height: 83vh"
    >
      <div class="absolute-full">
        <div class="row justify-end q-mt-xl">
          <q-avatar rounded size="100px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>

        <div class="absolute-bottom text-center text-font q-mb-md">
          <div class="text-h5">{{ callerName }}</div>
          <div class="text-subtitle1">40:00</div>
        </div>
      </div>
    </q-img>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";

export default {
  setup() {
    const route = useRoute();
    let callerName = ref("");

    function getHeader() {
      callerName = route.params.callerId;
    }
    onMounted(() => {
      getHeader();
    });

    watchEffect(() => getHeader());
    return {
      callerName,
    };
  },
};
</script>

<style scoped>
.my-custom-image {
  filter: brightness(1.75);
}
</style>
