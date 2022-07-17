<template>
  <div>
    <span class="text-accent q-mt-sm text-subtitle1  text-font">Location</span>
    <q-select
      dense
      borderless
      v-model="model"
      :options="options"
      class="q-ma-sm text-subtitle2 text-font"
    >
      <template v-slot:prepend>
        <q-icon name="mdi-google-maps" class="text-primary" />
      </template>
    </q-select>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      model: ref("Lagos State"),
      options: [
        "Abia State",
        "Adamawa State",
        "Akwa Ibom State",
        "Anambra State",
        "Bauchi State",
        "Bayelsa State",
        "Benue State",
        "Borno State",
        "Cross River",
        "Delta State",
        "Ebonyi State",
        "Edo State",
        "Ekiti State",
        "Enugu State",
        "Gombe State",
        "Imo State",
        "Jigawa State",
        "Kaduna State",
        "Kano State",
        "Katsina State ",
        "Kebbi State",
        "Kogi State",
        "Kwara State",
        "Lagos State",
        "Nasarawa State",
        "Niger State",
        "Ogun State",
        "Ondo State",
        "Osun State ",
        "Oyo State ",
        "Plateau State ",
        "Rivers State ",
        "Sokoto State ",
        "Taraba State",
        "Yobe State",
        "Zamfara State",
      ],
    };
  },
};
</script>
