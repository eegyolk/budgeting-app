<template>
  <q-layout view="lHh Lpr lFf">
    <p>Info Layout</p>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoLayout",
});
</script>
