<template>
  <div class="row justify-center">
    <div class="col-md-6 col-xs-10 q-mt-xl">
      <div class="text-center text-h4 text-font q-pb-md text-grey-7">
        Create an account
      </div>

      <q-card class="q-mt-xl" flat>
        <q-form class="q-gutter-md">
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
              color="primary"
            />
          </div>
        </q-form>
      </q-card>

      <div class="text-center text-h6 text-font text-grey-7 q-mt-lg">Or</div>

      <div class="q-mt-lg">
        <q-btn
          class="full-width q-pa-md"
          flat
          no-caps
          style="background: #e9e8e8; color: #000"
          icon="mdi-google"
          label="Sign Up with Google"
        />
      </div>

      <div class="q-mt-sm text-center text-font text-subtitle2">
        Already have an account? <span class="text-primary">Sign In</span>
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
