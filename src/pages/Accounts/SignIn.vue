<template>
  <div class="row justify-center">
    <div class="col-md-6 col-xs-10 q-mt-xl">
      <div class="text-center text-h4 text-font q-pb-md text-grey-7">
        Sign In
      </div>
      <div class="text-center text-font text-subtitle1">
        Health is Wealth, Sign In and get an appointment booked witht the best
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
            outlined
            v-model="password"
            type="password"
            class="text-font text-subtitle1"
            placeholder="Enter your Password"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <div>
            <q-btn
              class="full-width q-pa-sm text-font"
              label="Sign In"
              no-caps
              dense
              type="submit"
              color="primary"
            />
          </div>
        </q-form>
      </q-card>
      <div class="q-mt-sm text-center text-font text-subtitle2">
        Don't have an account yet? <span class="text-primary">Sign Up</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const date = ref("");
    return {
      name,
      email,
      password,
      date,
    };
  },
};
</script>
