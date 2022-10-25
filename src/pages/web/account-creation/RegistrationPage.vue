<template>
  <q-page class="q-pa-md flex flex-center">
    <registration-section />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import RegistrationSection from "components/sections/account-creation/RegistrationSection.vue";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    RegistrationSection,
  },
});
</script>

<style lang="scss" scoped></style>
