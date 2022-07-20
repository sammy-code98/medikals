<template>
  <div>
    <div class="q-pa-md">
      <q-input
        v-model="mySearch"
        round
        dense
        outlined
        type="search"
        placeholder="Search a doctor or nurse"
        class="text-font text-subtitle1 shadow-4"
      >
        <template v-slot:prepend>
          <q-icon name="search" class="text-primary" />
        </template>
      </q-input>
    </div>
    <div class="row q-pa-md">
      <div
        v-for="search in filteredSearch()"
        :key="search.name"
        class="col-6 q-pa-sm"
      >
        <q-card class="my-card">
          <q-card-section class="row justify-center">
            <q-avatar size="80px">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-h6 text-center text-font q-mt-md">
              {{ search.name }}
            </div>
            <div class="text-subtitle1 text-center text-font text-grey-7">
              {{ search.field }}
            </div>
            <div class="q-mt-md">
              <q-icon name="mdi-star" class="text-yellow" />
              <span class="text-font text-grey-7">5.0(230 reviews)</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- error page if no search word was found -->
    <div class="row justify-center" v-if="mySearch && !filteredSearch.length">
      <!-- <div class="text-h6 text-font text-grey-7">No Results Found</div> -->
      <SearchNotFound/>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMeta } from "quasar";
import SearchNotFound from "../components/SearchNotFound.vue";
const metaData = {
  title: "Medicals || Search Results",
};
const searchResult = [
  { name: "Dr. Emma Uchewa", field: "Gynecologist" },
  { name: "Dr. Daniel Emeka", field: "Dentist" },
  { name: "Dr. Chidinma Peculiar", field: "Pediatricians " },
  { name: "Dr. Emak", field: "Radiologists" },
  { name: "Dr. Olamide", field: "Neurologists" },
  { name: "Dr. Uwas", field: "Obstetricians" },
  { name: "Dr.  Uwa Udeh", field: "Anesthesiologists" },
  { name: "Dr. Ndidi U", field: "Psychiatrist" },
];

let mySearch = ref("");

export default {
  components: { SearchNotFound },
  setup() {
    useMeta(metaData);

    function filteredSearch() {
      return searchResult.filter((search) => {
        return (
          search.name.toLowerCase().includes(mySearch.value.toLowerCase()) ||
          search.field.toLowerCase().includes(mySearch.value.toLowerCase())
        );
      });
    }

    return {
      searchResult,
      filteredSearch,
      mySearch,
    };
  },
};
</script>

<style lang="scss">
.my-card {
  height: 100%;
}
</style>
