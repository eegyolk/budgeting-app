<template>
  <q-tooltip
    class="bg-grey-4 text-grey-9 text-weight-medium rounded-borders"
    :anchor="anchor"
    :self="self"
  >
    <slot />
  </q-tooltip>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolTipGeneric",

  props: {
    anchor: {
      type: String,
      default: () => {
        return "bottom middle";
      },
    },
    self: {
      type: String,
      default: () => {
        return "center middle";
      },
    },
  },
});
</script>

<style lang="scss" scoped></style>
