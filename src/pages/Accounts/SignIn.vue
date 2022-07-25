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
        <q-form class="q-gutter-md">
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

          <div>
            <q-btn
              class="full-width q-pa-sm text-font"
              label="Sign In"
              no-caps
              dense
              type="submit"
              color="accent"
            />
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
import { ref } from "vue";
import { useMeta } from "quasar";

const metaData = {
  title: "Medicals || Sign In",
};
export default {
  setup() {
    useMeta(metaData);
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const date = ref("");
    return {
      name,
      email,
      password,
      date,
      isPwd: ref(true),
    };
  },
};
</script>
