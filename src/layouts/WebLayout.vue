<template>
  <q-layout v-if="isTracker" view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Clever Monkey
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

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
import { defineComponent, computed, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "WebLayout",

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

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
      leftDrawerOpen,
      rightDrawerOpen,
      isTracker,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
