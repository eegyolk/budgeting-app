<template>
  <div class="q-pa-md" style="width: 320px">
    <div class="row text-center">
      <div class="col col-sm">
        <img
          src="~assets/account-recovery/reset-password-img.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="text-h6 text-weight-medium text-grey-8">
          Reset your password
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
      <div class="col col-sm">
        <span
          :class="{
            'text-body2': true,
            'text-grey-8': true,
            'text-red-10': false,
          }"
        >
          Confirm Password
        </span>

        <q-input
          placeholder="Confirm your password"
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
      <q-btn
        class="full-width"
        color="primary"
        label="Reset"
        no-caps
        @click="onReset"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ResetPasswordSection",

  setup() {
    const router = useRouter();

    return {
      onReset() {
        router.push({ name: "w-login" });
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
