<template>
  <q-page class="q-pa-md flex flex-center">
    <forgot-password-section />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ForgotPasswordSection from "components/sections/account-recovery/ForgotPasswordSection.vue";

export default defineComponent({
  name: "ForgotPasswordPage",
  components: {
    ForgotPasswordSection,
  },
});
</script>

<style lang="scss" scoped></style>
