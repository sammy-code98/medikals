<template>
  <div class="row justify-center">
    <div class="col-md-6 col-xs-10 q-mt-xl">
      <div class="text-center text-h4 text-font q-pb-md text-grey-7">
        Sign In
      </div>
      <div class="text-center text-font text-grey-7 text-subtitle1">
        Health is Wealth, Sign In and get an appointment booked with the best
        medical practicioners in your area
      </div>
      <q-card class="q-mt-xl" flat>
        <q-form class="q-gutter-md" @submit.prevent="login">
          <q-input
            outlined
            v-model="email"
            class="text-font text-subtitle1"
            type="email"
            placeholder="Enter your Email Address"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            v-model="password"
            outlined
            class="text-font text-subtitle1"
            :type="isPwd ? 'password' : 'text'"
            placeholder="Enter your Password"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <div
            v-if="errMsg"
            class="text-center text-font text-negative text-subtitle1"
          >
            {{ errMsg }}
          </div>
          <div
            class="text-right text-font text-accent text-weight-meduim text-subtitle2"
          >
            <router-link to="/account/forgot-password"
              >Forgot Password?</router-link
            >
          </div>
          <div>
            <q-btn
              class="full-width q-pa-sm text-font"
              label="Sign In"
              no-caps
              dense
              type="submit"
              color="accent"
              :loading="submitting"
            >
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
          </div>
        </q-form>
      </q-card>
      <div class="q-mt-sm text-center text-grey-7 text-font text-subtitle2">
        Don't have an account yet?
        <router-link to="/account/signup">
          <span class="text-accent">Sign Up</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeUnmount } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { useMeta, useQuasar } from "quasar";

const metaData = {
  title: "Medikals || Sign In",
};
export default {
  setup() {
    useMeta(metaData);
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const auth = getAuth();
    const errMsg = ref("");
    const $q = useQuasar();
    const submitting = ref(false);

    // loader
    let timer;
    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    function showLoading() {
      $q.loading.show({
        message: "Sign In  in progress. Hang on...",
      });
      // hide in 3s
      timer = setTimeout(() => {
        $q.loading.hide();
        timer = void 0;
      }, 5000);
    }

    function login() {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          // btn loading state

          submitting.value = true;
          setTimeout(() => {
            // delay simulated, we are done,
            // now restoring submit to its initial state
            submitting.value = false;
          }, 5000);
          showLoading();
          $q.notify({
            message: "Sign In  Successfully",
            position: "top-right",
            color: "accent",
          });
          console.log("Successfully logged in!");

          router.push("/dashboard");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              errMsg.value = "Invalid Email";
              break;
            case "auth/user-not-found":
              errMsg.value = "No account with that email was found";
              break;
            case "auth/wrong-password":
              errMsg.value = "Incorrect password";
              break;
            default:
              errMsg.value = "Email or password was incorrect";
              break;
          }
        });
    }

    return {
      email,
      password,
      errMsg,
      isPwd: ref(true),
      login,
      showLoading,
      submitting,
    };
  },
};
</script>
