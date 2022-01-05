<template>
  <div class="q-pa-md">
    <q-card class="bg-accent border" flat bordered>
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
              <div class="text-h6  text-font text-white">
                Dr. Emmanuel Uchewa
              </div>
              <div class="text-caption text-font text-white">Dentist</div>
            </div>

            <div class="q-mx-md">
              <q-btn
                color="white"
                dense
                text-color="primary"
                round
                icon="mdi-video-outline"
              />
            </div>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section>
        <div class="bg-primary border">
          <q-icon
            name="mdi-clock-outline"
            style="color: #ccc; font-size: 2em"
            class="q-ma-md"
          />
          <span class="text-font text-subtitle1 text-white"
            >Mon,Jan 02, 22 01:23pm-5:00pm</span
          >
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style lang="scss" scoped>
.border {
  border-radius: 8px;
}
</style>
