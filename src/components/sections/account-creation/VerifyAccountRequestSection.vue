<template>
  <div class="q-pa-md" style="width: 320px">
    <div class="row text-center">
      <div class="col col-sm">
        <img
          src="~assets/account-creation/verify-account-request-img.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="text-h6 text-weight-medium text-grey-8">
          Request for verification code
        </span>
      </div>
    </div>

    <div class="row text-justify q-pt-md">
      <div class="col col-sm">
        <span class="text-caption text-grey-8">
          Your email address must be registered before you can request for
          verification code.
        </span>
      </div>
    </div>

    <div class="row q-pt-md">
      <div class="col col-sm">
        <q-input
          placeholder="Your email address"
          type="email"
          hide-bottom-space
          no-error-icon
          outlined
          dense
        />
      </div>
    </div>

    <div class="row q-pt-md">
      <q-btn
        class="full-width"
        color="primary"
        label="Submit"
        no-caps
        @click="onSubmit"
      />
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="q-px-xs text-caption text-grey-8">
          Account verified?
        </span>

        <q-btn
          label="Login"
          class="text-caption text-weight-bold"
          color="primary"
          padding="none"
          to="/w/login"
          no-caps
          flat
          unelavated
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VerifyAccountRequestSection",

  setup() {
    const router = useRouter();

    return {
      onSubmit() {
        router.push({ name: "w-verify-account" });
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
