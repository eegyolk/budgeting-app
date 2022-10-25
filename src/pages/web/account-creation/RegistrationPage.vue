<template>
  <q-page class="q-pa-md flex flex-center">
    <RegistrationSection />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import RegistrationSection from "src/components/sections/account-creation/RegistrationSection.vue";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    RegistrationSection,
  },
});
</script>

<style lang="scss" scoped></style>
