<template>
  <div class="q-pa-md relative-position">
    <div class="outer-circle shadow-1">
      <div class="inner-circle">
        <q-avatar size="150px" class="q-ma-lg">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>

      </div>
    </div>
  </div>
  <div class="q-mt-sm">
    <div class="text-center text-font text-grey-7 text-h6">John Doe</div>
    <div class="text-center text-font text-accent text-subtitle1">
      JohnDoe@gmail.com
    </div>
  </div>
  <div>
    <q-card
      class="q-ma-md"
      flat
      v-for="profile in profileData"
      :key="profile.icon"
    >
      <q-item v-ripple>
        <q-item-section avatar>
          <q-btn round flat color="accent" :icon="profile.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-font text-grey-7 text-subtitle1">{{
            profile.title
          }}</q-item-label>
        </q-item-section>
        <q-space />
        <q-btn round flat color="accent" icon="mdi-chevron-right" />
      </q-item>
    </q-card>
  </div>
</template>

<script>
const profileData = [
  { icon: "mdi-lock-outline", title: "Privacy & Settings" },
  { icon: "mdi-database", title: "Personal Data" },
  { icon: "mdi-email-sync", title: "Email and Payment" },
  { icon: "mdi-google-maps", title: "My Location" },
  { icon: "mdi-calendar", title: "My Schedule" },
    { icon: "mdi-cog-outline", title: "Settings" },

];
export default {
  setup() {
    return {
      profileData,
    };
  },
};
</script>

<style lang="scss" scoped>
.outer-circle {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 1px solid $accent;
  margin: auto;
}
.inner-circle {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 20px auto;
  border: 1px solid $primary;
}
.change-icon {
  transform: translateY(-50%);
}
</style>
