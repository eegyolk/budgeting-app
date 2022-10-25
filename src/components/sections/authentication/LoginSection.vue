<template>
  <div class="q-pa-md" style="width: 320px">
    <div class="row text-center">
      <div class="col col-sm">
        <img
          src="~assets/authentication/login-img.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="text-h6 text-weight-medium text-grey-8">
          Hi, Welcome back!
        </span>
      </div>
    </div>

    <div class="row q-pt-md">
      <div class="col col-sm">
        <span
          :class="{
            'text-body2': true,
            'text-grey-8': true,
            'text-red-10': false,
          }"
        >
          Email Address
        </span>

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
      <div class="col col-sm">
        <span
          :class="{
            'text-body2': true,
            'text-grey-8': true,
            'text-red-10': false,
          }"
        >
          Password
        </span>

        <q-input
          placeholder="Your password"
          hide-bottom-space
          no-error-icon
          outlined
          dense
        >
          <template v-slot:append>
            <q-icon class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="row q-pt-md">
      <div class="col-7 col-sm-7 text-left">
        <q-toggle color="primary" keep-color dense />

        <span class="q-px-xs text-caption text-grey-8">
          Keep me signed in
        </span>
      </div>

      <div class="col-5 col-sm-5 text-right">
        <q-btn
          label="Forgot password?"
          color="primary"
          class="text-caption text-weight-bold"
          padding="none"
          to="/w/forgot-password"
          no-caps
          flat
          unelavated
        />
      </div>
    </div>

    <div class="row q-pt-md">
      <q-btn class="full-width" color="primary" label="Login" no-caps />
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="q-px-xs text-caption text-grey-8">
          Don't have an account?
        </span>

        <q-btn
          label="Register now."
          class="text-caption text-weight-bold"
          color="primary"
          padding="none"
          to="/w/register"
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
  name: "LoginSection",
});
</script>

<style lang="scss" scoped></style>
