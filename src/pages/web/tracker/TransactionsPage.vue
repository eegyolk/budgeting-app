<template>
  <q-page class="q-pa-md bg-grey-3 flex flex-center">
    <div class="row wrap justify-left full-width q-gutter-md">
      <span class="text-h5 text-weight-medium q-mb-md">Transactions</span>
    </div>

    <div class="row wrap justify-center full-width q-mb-md">
      <graph-section />
    </div>

    <div class="row wrap justify-center full-width q-mb-md">
      <lists-section />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import GraphSection from "components/sections/tracker/transactions/GraphSection.vue";
import ListsSection from "components/sections/tracker/transactions/ListsSection.vue";

export default defineComponent({
  name: "TransactionsPage",
  components: {
    GraphSection,
    ListsSection,
  },
});
</script>

<style lang="scss" scoped></style>
