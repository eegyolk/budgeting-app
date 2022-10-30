<template>
  <q-drawer
    show-if-above
    v-model="rightSidebarVisibility"
    side="right"
    class="bg-white"
    bordered
  >
    <component v-if="hasLoadedComponent" :is="rightSidebarComponent" />
  </q-drawer>
</template>

<script>
import { defineComponent, computed } from "vue";
import { storeToRefs } from "pinia";
import { useCommonStore } from "src/stores/common-store";

export default defineComponent({
  name: "RightSidebarSection",

  setup() {
    const commonStore = useCommonStore();
    const { rightSidebarVisibility, rightSidebarComponent } =
      storeToRefs(commonStore);
    const hasLoadedComponent = computed(() => {
      return rightSidebarComponent.value.hasOwnProperty("name");
    });

    return {
      rightSidebarVisibility,
      rightSidebarComponent,
      hasLoadedComponent,
    };
  },
});
</script>

<style lang="scss" scoped></style>
