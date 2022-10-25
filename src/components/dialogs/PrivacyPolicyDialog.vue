<template>
  <div class="q-pa-md bg-white" style="width: 768px">
    <div class="row text-center">
      <div class="col col-sm">
        <img
          src="~assets/account-creation/privacy-policy-img.svg"
          style="width: 100px; height: 100px"
        />
      </div>
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="text-h6 text-weight-medium text-grey-8">
          Privacy Policy
        </span>
      </div>
    </div>

    <div class="row text-justify q-pt-md">
      <p class="text-body2 text-grey-8" v-for="n in 15" :key="n">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
        perferendis totam, ea at omnis vel numquam exercitationem aut, natus
        minima, porro labore.
      </p>
    </div>

    <div class="row justify-center q-pt-md">
      <q-btn
        color="primary"
        label="I have read and understand"
        no-caps
        @click="onReadAndUnderstand"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrivacyPolicyDialog",

  setup(props, { emit }) {
    return {
      onReadAndUnderstand() {
        emit("input");
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
