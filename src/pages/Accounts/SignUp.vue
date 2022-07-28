<template>
  <div class="row justify-center">
    <div class="col-md-6 col-xs-10 q-mt-xl">
      <div class="text-center text-h4 text-font q-pb-md text-grey-7">
        Create an account
      </div>

      <div class="q-mt-sm">
        <q-btn
          class="full-width q-pa-md q-ma-sm"
          flat
          no-caps
          style="background: #e9e8e8; color: #000"
          icon="mdi-google"
          label="Sign Up with Google"
          @click.prevent="registerWithGoogle"
        />
      </div>

      <div class="text-center text-h6 text-font text-grey-7 q-mt-lg">Or</div>
      <div class="text-center text-font text-grey-7 text-subtitle1">
        Fill the form to Create an Account
      </div>

      <q-card class="q-mt-xl" flat>
        <q-form class="q-gutter-md" @submit.prevent="register">
          <q-input
            outlined
            v-model="name"
            type="text"
            class="text-font text-subtitle1"
            placeholder="Enter your fullname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
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

          <q-input
            v-model="date"
            outlined
            type="date"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
            class="text-font text-subtitle1"
            hint="Enter your DOB"
          />

          <div>
            <q-btn
              class="full-width q-pa-sm text-font"
              label="Sign Up"
              no-caps
              dense
              type="submit"
              color="accent"
            />
          </div>
        </q-form>
      </q-card>

      <div class="q-mt-sm text-center text-grey-7 text-font text-subtitle2">
        Already have an account?
        <router-link to="/account/signin"
          ><span class="text-accent">Sign In</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { useMeta } from "quasar";
const metaData = {
  title: "Medicals || Sign Up",
};
export default {
  setup() {
    useMeta(metaData);
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const date = ref("");
    const router = useRouter();
    const auth = getAuth();

    function register() {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          console.log("Successfully registered!");
          router.push("/account/signin");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error:", error.code);
        });
    }

    function registerWithGoogle() {
      // init provider
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          // The signed-in user info.
          const user = result.user;
          // ... if success redirect user to main component
          router.push("/dashboard");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    return {
      name,
      email,
      password,
      date,
      register,
      registerWithGoogle,
      isPwd: ref(true),
    };
  },
};
</script>
