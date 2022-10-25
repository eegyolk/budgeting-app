<template>
  <q-page class="q-pa-md flex flex-center">
    <verify-reset-section />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VerifyResetSection from "components/sections/account-recovery/VerifyResetSection.vue";

export default defineComponent({
  name: "VerifyResetPage",
  components: {
    VerifyResetSection,
  },
});
</script>

<style lang="scss" scoped></style>
