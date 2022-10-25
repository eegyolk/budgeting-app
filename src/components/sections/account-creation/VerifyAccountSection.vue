<template>
  <div class="q-pa-md" style="width: 320px">
    <div class="row text-center">
      <div class="col col-sm">
        <img
          src="~assets/account-creation/verify-account-img.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="text-h6 text-weight-medium text-grey-8">
          Verify your account
        </span>
      </div>
    </div>

    <div class="row text-justify q-pt-md">
      <div>
        <span class="text-body2 text-grey-8">
          We have sent verification code to your email:
        </span>
        <span class="text-body2 text-grey-8"> me@email.com </span>
      </div>
    </div>

    <div class="row q-pt-md">
      <div class="col col-sm">
        <q-input
          placeholder="Enter your verification code"
          input-class="text-center  "
          maxlength="6"
          mask="######"
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
        label="Verify"
        no-caps
        @click="onVerify"
      />
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="q-px-xs text-caption text-grey-8">
          Didn't receive code?
        </span>

        <q-btn
          label="Resend"
          class="text-caption text-weight-bold"
          color="primary"
          padding="none"
          no-caps
          flat
          unelavated
          @click="onResend"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VerifyAccountSection",

  setup() {
    const router = useRouter();

    return {
      onVerify() {
        router.replace({ name: "w-tracker-home" });
      },

      onResend() {},
    };
  },
});
</script>

<style lang="scss" scoped></style>
