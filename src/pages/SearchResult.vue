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
        <router-link :to="`/doctor/${specTitle}/${search.name}`">
          <q-card class="my-card">
            <q-card-section class="row justify-center">
              <q-avatar size="80px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </q-card-section>
            <q-card-section>
              <div class="text-h6 text-center text-accent text-font q-mt-md">
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
        </router-link>
      </div>
    </div>
    <!-- error page if no search word was found -->
    <div class="row justify-center" v-if="mySearch && !filteredSearch().length">
      <SearchNotFound />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from "vue";
import { useMeta } from "quasar";
import { useRoute } from "vue-router";
import SearchNotFound from "../components/SearchNotFound.vue";
import searchResult from "../data/searchResult";
const metaData = {
  title: "Medikals || Search Results",
};

let mySearch = ref("");

export default {
  components: { SearchNotFound },
  setup() {
    useMeta(metaData);
    const route = useRoute();
    let specTitle = ref("");

    // get speciality params
    function getSpecTitle() {
      specTitle.value = route.params.speciality;
    }

    function filteredSearch() {
      return searchResult.filter((search) => {
        return (
          search.name.toLowerCase().includes(mySearch.value.toLowerCase()) ||
          search.field.toLowerCase().includes(mySearch.value.toLowerCase())
        );
      });
    }

    onMounted(() => {
      getSpecTitle();
    });

    // watch for changes
    watchEffect(() => getSpecTitle());

    return {
      searchResult,
      filteredSearch,
      mySearch,
      specTitle,
    };
  },
};
</script>

<style lang="scss">
.my-card {
  height: 100%;
}
</style>
