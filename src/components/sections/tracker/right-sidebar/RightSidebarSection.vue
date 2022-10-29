<template>
  <div class="full-width">
    <notification-section />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NotificationSection from "components/sections/tracker/right-sidebar/NotificationSection.vue";

export default defineComponent({
  name: "RightSidebarSection",

  components: {
    NotificationSection,
  },
});
</script>

<style lang="scss" scoped></style>
