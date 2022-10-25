<template>
  <q-page class="q-pa-md flex flex-center">
    <LoginSection />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LoginSection from "components/sections/LoginSection.vue";

export default defineComponent({
  name: "LoginPage",
  components: {
    LoginSection,
  },
});
</script>

<style lang="scss" scoped></style>
