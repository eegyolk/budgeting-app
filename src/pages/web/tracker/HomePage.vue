<template>
  <q-page class="q-pa-md bg-grey-1 flex flex-center">
    <!-- <div class="row wrap justify-center full-width q-mb-md">
      <graph-section />
    </div>

    <div class="row wrap justify-center full-width q-mb-md">
      <income-transaction-section />
    </div>

    <div class="row wrap justify-center full-width q-mb-md">
      <expenses-transaction-section />
    </div>

    <div class="row wrap justify-center full-width q-mb-md">
      <financial-tips-section />
    </div>

    <div class="row wrap justify-center full-width q-mb-md">
      <goals-section />
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import GraphSection from "components/sections/tracker/home/GraphSection.vue";
import IncomeTransactionSection from "components/sections/tracker/home/IncomeTransactionSection.vue";
import ExpensesTransactionSection from "components/sections/tracker/home/ExpensesTransactionSection.vue";
import FinancialTipsSection from "src/components/sections/tracker/home/FinancialTipsSection.vue";
import GoalsSection from "components/sections/tracker/home/GoalsSection.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    // GraphSection,
    // IncomeTransactionSection,
    // ExpensesTransactionSection,
    // FinancialTipsSection,
    // GoalsSection,
  },
});
</script>

<style lang="scss" scoped></style>
