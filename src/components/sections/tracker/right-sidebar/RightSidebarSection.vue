<template>
  <div class="full-width">
    <component v-if="hasLoadedComponent" :is="rightSidebarComponent" />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { storeToRefs } from "pinia";
import { useCommonStore } from "src/stores/common-store";

export default defineComponent({
  name: "RightSidebarSection",

  setup() {
    const commonStore = useCommonStore();
    const { rightSidebarComponent } = storeToRefs(commonStore);
    const hasLoadedComponent = computed(() => {
      return rightSidebarComponent.value.hasOwnProperty("name");
    });

    return {
      rightSidebarComponent,
      hasLoadedComponent,
    };
  },
});
</script>

<style lang="scss" scoped></style>
