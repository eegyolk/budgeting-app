<template>
  <q-layout v-if="isTracker" view="lHr LpR fFf">
    <q-header flat class="bg-white text-grey-8">
      <q-toolbar>
        <q-toolbar-title> Clever Monkey </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-btn icon="notifications" @click="toggleRightDrawer" dense flat round>
          <q-badge color="negative" floating>4</q-badge>
        </q-btn>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            :active="'w-tracker-home' === getCurrentPathName"
            to="/w/tracker/home"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>

            <q-item-section> Dashboard </q-item-section>
          </q-item>

          <q-item
            :active="'w-tracker-transactions' === getCurrentPathName"
            to="/w/tracker/transactions"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="receipt_long" />
            </q-item-section>

            <q-item-section> Transactions </q-item-section>
          </q-item>

          <q-item
            :active="'w-tracker-analytics' === getCurrentPathName"
            to="/w/tracker/analytics"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="insights" />
            </q-item-section>

            <q-item-section> Analytics </q-item-section>
          </q-item>

          <q-item
            :active="'w-tracker-reports' === getCurrentPathName"
            to="/w/tracker/reports"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="article" />
            </q-item-section>

            <q-item-section> Reports </q-item-section>
          </q-item>

          <q-item
            :active="'w-tracker-profile' === getCurrentPathName"
            to="/w/tracker/profile"
            clickable
            v-ripple
          >
            <q-item-section avatar>
              <q-icon name="account_circle" />
            </q-item-section>

            <q-item-section> Profile </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      class="bg-grey-1"
      bordered
    >
      <notification-section />
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
import NotificationSection from "components/sections/tracker/right-sidebar/NotificationSection.vue";

export default defineComponent({
  name: "WebLayout",

  components: {
    NotificationSection,
  },

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

    const getCurrentPathName = computed(() => {
      return router.currentRoute.value.name;
    });

    return {
      leftDrawerOpen,
      rightDrawerOpen,

      isTracker,
      getCurrentPathName,

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
