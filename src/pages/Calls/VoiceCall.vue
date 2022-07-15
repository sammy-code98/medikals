<template>
  <div>
    <!-- <q-btn flat round dense icon="mdi-less-than" color="grey-7" to="/chats" /> -->
    <q-img src="~assets/callBg.svg" style="height: 83vh">
      <div class="absolute-full">
        <div class="row justify-center q-mt-xl">
          <q-avatar size="120px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>

        <div class="text-center text-font q-mt-xl">
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
