<template>
  <div class="q-px-md q-mt-md">
    <q-card class="bg-white border shadow-8 q-mb-md" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-3 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/boy-avatar.png"
          />
        </q-card-section>
        <q-card-section>
          <div class="row justify-between no-wrap">
            <div class="col-auto">
              <div class="text-h6 text-font text-accent">
                {{ name }}
              </div>
              <div class="text-caption text-font text-grey-7">
                {{ field }}
              </div>
            </div>
          </div>
          <q-rating v-model="ratingModel" size="1em" :max="5" color="yellow" />
          <span class="text-font text-grey-7 q-mx-md"
            >{{ Math.floor(Math.random() * 5) + 1 }}.0 | 2.5k Reviews</span
          >
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
export default {
  props: {
    name: { type: String, required: true },
    // field: { type: String, required: true },
  },
  setup() {
    const route = useRoute();
    let field = ref("");

    function getField() {
      field.value = route.params.speciality;
    }

    onMounted(() => {
      getField();
    });

    watchEffect(() => getField());
    return {
      ratingModel: ref(5),
      field,
    };
  },
};
</script>
<style lang="scss" scoped>
.border {
  border-radius: 8px;
}
</style>
