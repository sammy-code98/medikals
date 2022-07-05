<template>
  <div class="q-pa-md">
    <q-card class="border" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-3 flex flex-center">
          <q-img
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/boy-avatar.png"
          />
        </q-card-section>
        <q-card-section>
          <div class="row justify-between no-wrap">
            <div class="col-auto q-mt-md">
              <div class="text-h6 text-font text-accent">
                {{ name }}
              </div>
              <div class="text-subtitle2 text-font text-accent">{{ field }}</div>
            </div>

            <div class="q-mx-md">
              <q-btn
                color="white"
                dense
                text-color="accent"
                round
                icon="mdi-video-outline"
              />
            </div>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section>
        <div class="bg-accent border">
          <q-icon
            name="mdi-clock-outline"
            style="color: #ccc; font-size: 2em"
            class="q-ma-md"
          />
          <span class="text-font text-subtitle1 text-white">{{ date }}</span>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  props: {
    name: { type: String, required: true },
    field: { type: String, required: true },
    date: { type: String, required: true },
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.border {
  border-radius: 8px;
}
</style>
