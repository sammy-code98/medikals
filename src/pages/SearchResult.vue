<template>
  <div>
    <SearchInput />
    <div class="row q-pa-md">
      <div v-for="search in searchResult" :key="search.name" class="col-6 q-pa-sm">
        <q-card>
          <q-card-section class="row justify-center">
            <q-avatar size="80px" >
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center text-font">Dr. Emma Uchewa</div>
            <div class="text-subtitle1 text-center text-font text-grey-7">
              Dentist
            </div>
            <div>
              <q-icon name="mdi-star" class="text-yellow" />
              <span class="text-font text-grey-7 q-mx-sm"
                >5.0(230 reviews)</span
              >
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import {useMeta} from 'quasar'
const metaData ={
  title: 'Medicals || Search Results'
}
const searchResult = [
  { name: "Dr. Emma Uchewa", field: "Dentist" },
  { name: "Dr.  Uchewa", field: "Dentist" },
  { name: "Dr. Emma Uchewa", field: "Dentist" },
  { name: "Dr. Emeak", field: "Dentist" },
  { name: "Dr. Olamide", field: "Dentist" },
  { name: "Dr. Emmaa", field: "Dentist" },
  { name: "Dr. Emma Uwa", field: "Dentist" },
  { name: "Dr. Ndidi U", field: "Dentist" },
];
import SearchInput from "../components/SearchInput.vue";
export default {
  components: { SearchInput },
  setup() {
    useMeta(metaData)
    return {
      searchResult,
    };
  },
};
</script>
