import { defineStore } from "pinia";
import { ref, shallowRef } from "vue";

export const useCommonStore = defineStore("common", () => {
  const leftSidebarVisibility = ref(true);
  const rightSidebarVisibility = ref(false);
  const rightSidebarComponent = shallowRef({});

  const toggleLeftSidebarVisibility = () => {
    leftSidebarVisibility.value = !leftSidebarVisibility.value;
  };

  const toggleRightSidebarVisibility = () => {
    rightSidebarVisibility.value = !rightSidebarVisibility.value;
  };

  const setRightSidebarComponent = (value) => {
    rightSidebarComponent.value = value;
  };

  return {
    leftSidebarVisibility,
    rightSidebarVisibility,
    rightSidebarComponent,
    toggleLeftSidebarVisibility,
    toggleRightSidebarVisibility,
    setRightSidebarComponent,
  };
});
