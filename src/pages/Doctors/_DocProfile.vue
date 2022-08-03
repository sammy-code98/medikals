<template>
  <div class="row q-pa-md ">
    <div class="col-5">
      <q-img
        src="https://cdn.quasar.dev/img/boy-avatar.png"
        class="rounded-borders"
        height="230px"
      />
    </div>
    <div class="col"></div>
    <div class="col-6">
      <div class="text-font text-accent text-h6">{{ name }}</div>
      <div class="text-font text-grey-7 text-subtitle1">{{ field }}</div>
      <div class="row">
        <q-btn text-color="yellow" flat round icon="mdi-star" />
        <div class="q-mx-md">
          <div class="text-font text-grey-7 text-subtitle2">Rating</div>
          <div class="text-font text-accent text-subtitle1">5.0 out of 5</div>
        </div>
      </div>
      <div class="row q-mt-sm">
        <q-btn text-color="primary" flat round icon="mdi-hospital-building" />
        <div class="q-mx-md">
          <div class="text-font text-grey-7 text-subtitle2">Patients</div>
          <div class="text-font text-accent text-subtitle1">2500</div>
        </div>
      </div>
      <div class="row q-mt-sm">
        <q-btn text-color="accent" flat round icon="mdi-timeline" />
        <div class="q-mx-md">
          <div class="text-font text-grey-7 text-subtitle2">Experience</div>
          <div class="text-font text-accent text-subtitle1">20 years</div>
        </div>
      </div>
    </div>
  </div>
  <div class="text-h5 text-font q-mx-md q-mt-md">About Doctor</div>
  <div class="text-font text-subtitle1 text-grey-7 q-mx-md">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quis fugiat
    nihil ipsa ipsam itaque rem laboriosam maiores quasi soluta amet, facere
    earum, doloribus reprehenderit nulla nostrum. Iusto, nostrum totam.
  </div>
  <div class="text-h5 text-font q-mx-md q-mt-md">Working time</div>
  <div class="text-font text-subtitle1 text-grey-7 q-mx-md q-mt-sm">
    Monday - Friday (8:00am to 4:30pm)
  </div>
  <div class="text-h5 text-font q-mx-md q-mt-md">Communication</div>
  <div class="q-px-md">
    <div class="row q-mt-sm">
      <q-btn
        text-color="accent"
        flat
        round
        icon="mdi-chat-processing-outline"
      />
      <div class="q-mx-md">
        <div class="text-font text-subtitle1">Messaging</div>
        <div class="text-font text-grey-7 text-subtitle2">
          Let's chat and share some Photos
        </div>
      </div>
    </div>
    <div class="row q-mt-sm">
      <q-btn text-color="accent" flat round icon="mdi-phone-outline" />
      <div class="q-mx-md">
        <div class="text-font text-subtitle1">Audio call</div>
        <div class="text-font text-grey-7 text-subtitle2">
          Directly call your doctor
        </div>
      </div>
    </div>
    <div class="row q-mt-sm">
      <q-btn text-color="accent" flat round icon="mdi-video-outline" />
      <div class="q-mx-md">
        <div class="text-font text-subtitle1">Video call</div>
        <div class="text-font text-grey-7 text-subtitle2">
          See your doctor live
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import {useMeta} from "quasar"
const metaData = {
  title: "Medikals || DocProfile"
}
export default {
  setup() {
    useMeta(metaData)
    const route = useRoute();
    let field = ref("");
    let name = ref("");

    function getField() {
      field.value = route.params.speciality;
    }
    function getName() {
      name.value = route.params.profile;
    }

    onMounted(() => {
      getField();
      getName();
    });

    watchEffect(() => {
      getField();
      getName();
    });
    return {
      field,
      name,
      getName,
      getField,
    };
  },
};
</script>
