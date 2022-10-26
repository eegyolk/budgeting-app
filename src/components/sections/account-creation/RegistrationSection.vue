<template>
  <div class="q-pa-md" style="width: 320px">
    <div class="row text-center">
      <div class="col col-sm">
        <img
          src="~assets/account-creation/register-img.svg"
          style="width: 200px; height: 200px"
        />
      </div>
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="text-h6 text-weight-medium text-grey-8">
          Create your account
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
          Full Name
        </span>

        <q-input
          placeholder="Your full name"
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

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <q-toggle color="primary" keep-color dense />

        <span class="q-px-xs text-caption text-grey-8">I accept the</span>

        <q-btn
          label="Terms"
          class="text-caption text-weight-bold"
          color="primary"
          padding="none"
          no-caps
          flat
          unelavated
          @click="onShowTermsOfService"
        />

        <span class="q-px-xs text-caption text-grey-8">and</span>

        <q-btn
          label="Privacy Policy"
          class="text-caption text-weight-bold"
          color="primary"
          padding="none"
          no-caps
          flat
          unelavated
          @click="onShowPrivacyPolicy"
        />

        <span class="text-caption text-grey-8">.</span>
      </div>
    </div>

    <div class="row q-pt-md">
      <q-btn
        class="full-width"
        color="primary"
        label="Register"
        no-caps
        @click="onRegister"
      />
    </div>

    <div class="row text-center q-pt-md">
      <div class="col col-sm">
        <span class="q-px-xs text-caption text-grey-8">
          Already have an account?
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
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import TermsOfServiceDialog from "components/dialogs/TermsOfServiceDialog.vue";
import PrivacyPolicyDialog from "components/dialogs/PrivacyPolicyDialog.vue";
import QuickDialog from "components/QuickDialog.vue";

export default defineComponent({
  name: "RegistrationSection",

  setup() {
    const $q = useQuasar();
    const router = useRouter();

    return {
      onShowTermsOfService() {
        $q.dialog({
          component: QuickDialog,
          componentProps: {
            subComponent: TermsOfServiceDialog,
          },
        });
      },

      onShowPrivacyPolicy() {
        $q.dialog({
          component: QuickDialog,
          componentProps: {
            subComponent: PrivacyPolicyDialog,
          },
        });
      },

      onRegister() {
        router.push({ name: "w-verify-account" });
      },
    };
  },
});
</script>

<style lang="scss" scoped></style>
