<template>
  <q-layout v-if="isTracker" view="lHr LpR fFf">
    <header-section />
    <left-sidebar-section />
    <right-sidebar-section />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

  <q-layout v-else>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import LeftSidebarSection from "components/sections/tracker/left-sidebar/LeftSidebarSection.vue";
import HeaderSection from "components/sections/tracker/header/HeaderSection.vue";
import RightSidebarSection from "components/sections/tracker/right-sidebar/RightSidebarSection.vue";

export default defineComponent({
  name: "WebLayout",

  components: {
    LeftSidebarSection,
    HeaderSection,
    RightSidebarSection,
  },

  setup() {
    const router = useRouter();
    const isTracker = computed(() => {
      if (
        router.currentRoute.value.hasOwnProperty("meta") &&
        router.currentRoute.value.meta.hasOwnProperty("isTracker")
      ) {
        return router.currentRoute.value.meta.isTracker;
      }
      return false;
    });

    return {
      isTracker,
    };
  },
});
</script>
