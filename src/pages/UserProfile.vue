<template>
  <div class="q-pa-md relative-position">
    <div class="inner-circle">
      <q-avatar size="150px" class="q-ma-lg">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
    </div>
  </div>
  <div class="q-mt-sm">
    <div class="text-center text-font text-grey-7 text-h6">
      {{ email.split("@")[0] }}
    </div>
    <div class="text-center text-font text-accent text-subtitle1">
      {{ email }}
    </div>
  </div>
  <div>
    <div flat v-for="profile in profileData" :key="profile.icon">
      <q-item v-ripple>
        <q-item-section avatar>
          <q-btn round flat color="accent" :icon="profile.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-font text-grey-7 q-mx-md text-subtitle1">{{
            profile.title
          }}</q-item-label>
        </q-item-section>
        <q-space />
        <q-btn round flat color="accent" icon="mdi-chevron-right" />
      </q-item>
    </div>
    <q-item v-ripple>
      <q-item-section avatar>
        <q-btn round flat color="accent" icon="mdi-logout" />
      </q-item-section>

      <q-item-section @click="signOut">
        <q-item-label class="text-font text-grey-7 q-mx-md text-subtitle1"
          >Logout</q-item-label
        >
      </q-item-section>
      <q-space />
      <q-btn round flat color="accent" icon="mdi-chevron-right" />
    </q-item>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAuth } from "firebase/auth";
import { useMeta } from "quasar";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const metaData = {
  title: "Medikals || UserProfile",
};
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
    useMeta(metaData);
    const email = ref("");
    const auth = getAuth();
    const user = auth.currentUser;
    const router = useRouter();
    const $q = useQuasar();

    function signOut() {
      auth.signOut();
      router.push("/").then(() => {
        $q.notify({
          message: "Sign Out Success",
          position: "top-right",
          color: "accent",
        });
      });
    }

    onMounted(() => {
      if (user) {
        email.value = user.email;
      } else {
        console.log("no username");
      }
    });
    return {
      profileData,
      email,
      signOut,
    };
  },
};
</script>

<style lang="scss" scoped>
.inner-circle {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: 20px auto;
  border: 1px solid $accent;
}
</style>
