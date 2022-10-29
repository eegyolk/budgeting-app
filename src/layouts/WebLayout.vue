<template>
  <q-layout v-if="isTracker" view="lHr LpR fFf">
    <q-header flat class="bg-white text-grey-8">
      <header-section />
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftSidebarVisibility"
      side="left"
      bordered
    >
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

            <q-item-section> Overview </q-item-section>
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
      v-model="rightSidebarVisibility"
      side="right"
      class="bg-white"
      bordered
    >
      <right-sidebar-section />
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
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommonStore } from "src/stores/common-store";
import HeaderSection from "components/sections/tracker/header/HeaderSection.vue";
import RightSidebarSection from "components/sections/tracker/right-sidebar/RightSidebarSection.vue";

export default defineComponent({
  name: "WebLayout",

  components: {
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
    const getCurrentPathName = computed(() => {
      return router.currentRoute.value.name;
    });

    const commonStore = useCommonStore();
    const { leftSidebarVisibility, rightSidebarVisibility } =
      storeToRefs(commonStore);

    return {
      isTracker,
      getCurrentPathName,
      leftSidebarVisibility,
      rightSidebarVisibility,
    };
  },
});
</script>
