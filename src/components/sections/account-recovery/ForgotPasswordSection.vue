<template>
  <div class="q-pa-md" style="width: 320px">
    <div class="row text-center">
      <div class="col col-sm">
        <img
          src="~assets/account-recovery/forgot-password-img.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="text-h6 text-weight-medium text-grey-8">
          Forgot your password
        </span>
      </div>
    </div>

    <div class="row text-justify q-pt-md">
      <div class="col col-sm">
        <span class="text-caption text-grey-8">
          Don't worry! It happens all the time. Please enter the email address
          associated with your account.
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
      <q-btn class="full-width" color="primary" label="Submit" no-caps />
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="q-px-xs text-caption text-grey-8">
          Do you have your password?
        </span>

        <q-btn
          label="Login now."
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

export default defineComponent({
  name: "ForgotPasswordSection",
});
</script>

<style lang="scss" scoped></style>
