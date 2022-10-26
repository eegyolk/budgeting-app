<template>
  <q-page class="q-pa-md flex flex-center">
    <verify-account-request-section />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VerifyAccountRequestSection from "components/sections/account-creation/VerifyAccountRequestSection.vue";

export default defineComponent({
  name: "VerifyAccountRequestPage",
  components: {
    VerifyAccountRequestSection,
  },
});
</script>

<style lang="scss" scoped></style>
