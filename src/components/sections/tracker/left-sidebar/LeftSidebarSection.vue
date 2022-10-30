<template>
  <q-drawer
    show-if-above
    v-model="leftSideBarAlwaysOpen"
    :mini="leftSidebarVisibility"
    side="left"
    bordered
  >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 50px">
      <q-list padding>
        <q-item
          :active="'w-tracker-home' === getCurrentPathName"
          to="/w/tracker/home"
          active-class="bg-grey-2 text-grey-9 text-weight-bold"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="dashboard" color="grey-9" />
          </q-item-section>

          <q-item-section> Dashboard </q-item-section>
        </q-item>

        <q-item
          :active="'w-tracker-transactions' === getCurrentPathName"
          to="/w/tracker/transactions"
          active-class="bg-grey-2 text-grey-9 text-weight-bold"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="receipt_long" color="grey-9" />
          </q-item-section>

          <q-item-section> Transactions </q-item-section>
        </q-item>

        <q-item
          :active="'w-tracker-analytics' === getCurrentPathName"
          to="/w/tracker/analytics"
          active-class="bg-grey-2 text-grey-9 text-weight-bold"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="insights" color="grey-9" />
          </q-item-section>

          <q-item-section> Analytics </q-item-section>
        </q-item>

        <q-item
          :active="'w-tracker-reports' === getCurrentPathName"
          to="/w/tracker/reports"
          active-class="bg-grey-2 text-grey-9 text-weight-bold"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="article" color="grey-9" />
          </q-item-section>

          <q-item-section> Reports </q-item-section>
        </q-item>

        <q-item
          :active="'w-tracker-profile' === getCurrentPathName"
          to="/w/tracker/profile"
          active-class="bg-grey-2 text-grey-9 text-weight-bold"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon name="account_circle" color="grey-9" />
          </q-item-section>

          <q-item-section> Profile </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <div class="absolute-top">
      <div class="row wrap justify-center items-center" style="height: 50px">
        <span class="text-subtitle1 text-grey-9 text-weight-bolder">
          Clever
        </span>
        <span class="text-subtitle1 text-grey-9 text-weight-bolder">
          Monkey
        </span>
      </div>
    </div>
  </q-drawer>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommonStore } from "src/stores/common-store";

export default defineComponent({
  name: "LeftSidebarSection",

  setup() {
    const leftSideBarAlwaysOpen = ref(true);

    const commonStore = useCommonStore();
    const { leftSidebarVisibility } = storeToRefs(commonStore);

    const router = useRouter();
    const getCurrentPathName = computed(() => {
      return router.currentRoute.value.name;
    });

    return {
      leftSideBarAlwaysOpen,
      leftSidebarVisibility,
      getCurrentPathName,
    };
  },
});
</script>

<style lang="scss" scoped></style>
