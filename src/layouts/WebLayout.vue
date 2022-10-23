<template>
  <q-layout view="lHh Lpr lFf">
    <p>Web Layout</p>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WebLayout",
});
</script>
