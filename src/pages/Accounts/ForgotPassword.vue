<template>
  <q-page class="flex flex-center">

   <div>
     <div class="text-center text-h4 text-font text-grey-7 q-pa-md">
      Forgot Password ?
    </div>
    <div class="text-center text-grey-7 text-subtitle2 text-font q-mx-md">
      Don't worry it happens. Please enter the address associated with your
      account
    </div>
    <div class="q-pa-md">
      <q-card class="q-mt-md" flat>
        <q-form class="q-gutter-md" >
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

          <div>
            <q-btn
              class="full-width q-pa-sm text-font"
              label="Submit"
              no-caps
              dense
              type="submit"
              color="accent"
            />
          </div>
        </q-form>
      </q-card>
    </div>
   </div>
  </q-page>
</template>

<script>
import { useMeta } from "quasar";
import { ref } from "vue";

const metaData = {
  title: "Forgot Password ",
};
export default {
  setup() {
    useMeta(metaData);
    const email = ref("");

    return {
      email,
    };
  },
};
</script>
