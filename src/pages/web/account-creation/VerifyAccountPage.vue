<template>
  <q-page class="q-pa-md flex flex-center">
    <verify-account-section />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import VerifyAccountSection from "components/sections/account-creation/VerifyAccountSection.vue";

export default defineComponent({
  name: "VerifyAccountPage",
  components: {
    VerifyAccountSection,
  },
});
</script>

<style lang="scss" scoped></style>
