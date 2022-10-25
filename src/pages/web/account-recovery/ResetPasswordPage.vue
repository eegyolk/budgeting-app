<template>
  <q-page class="q-pa-md flex flex-center">
    <reset-password-section />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ResetPasswordSection from "components/sections/account-recovery/ResetPasswordSection.vue";

export default defineComponent({
  name: "ResetPasswordPage",
  components: {
    ResetPasswordSection,
  },
});
</script>

<style lang="scss" scoped></style>
