<template>
  <div
    class="full-width"
    style="height: 50px; border-bottom: 1px solid #e0e0e0"
  >
    <q-toolbar>
      <q-btn class="q-mr-sm" color="grey-9" icon="menu" round dense flat>
        <tool-tip-generic> Menu </tool-tip-generic>
      </q-btn>

      <q-separator vertical inset />

      <q-btn-dropdown
        class="q-mx-sm bg-grey-2"
        color="grey-9"
        icon="more_vert"
        label="Workspace"
        rounded
        no-caps
        flat
        dense
      >
        <q-list class="q-qutter-none rounded-borders" bordered padding>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <q-icon name="person_pin" class="q-pr-sm" />Personal
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <q-icon name="storefront" class="q-pr-sm" />My Business
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <q-icon name="add_circle" class="q-pr-sm" />Add workspace
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-list>
      </q-btn-dropdown>

      <q-space />

      <q-chip
        class="q-mx-sm"
        icon="today"
        color="grey-2"
        text-color="grey-9"
        :clickable="false"
        :ripple="false"
        rounded
      >
        <span class="q-ml-sm">Oct. 29, 2022</span>
        <tool-tip-generic> Today is Oct. 29, 2022 </tool-tip-generic>
      </q-chip>

      <q-space />

      <q-btn-dropdown
        class="q-mx-sm bg-grey-2"
        color="grey-9"
        icon="add_circle"
        label="Create"
        dropdown-icon="more_vert"
        rounded
        no-caps
        flat
        dense
      >
        <q-list class="q-qutter-none rounded-borders" bordered padding>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <q-icon name="account_balance_wallet" class="q-pr-sm" />Income
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <q-icon name="add_shopping_cart" class="q-pr-sm" />Expense
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced />

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>
                  <q-icon name="event" class="q-pr-sm" />Reminder
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-item clickable v-close-popup>
            <q-item-section>
              <q-item-label>
                <q-icon name="flag" class="q-pr-sm" />Goal
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-separator vertical inset />

      <q-btn
        class="q-ml-sm"
        color="grey-9"
        icon="notifications"
        round
        dense
        flat
      >
        <q-badge color="red" floating>4</q-badge>
        <tool-tip-generic> Notifications </tool-tip-generic>
      </q-btn>

      <q-btn class="q-mx-sm" color="grey-9" icon="settings" round dense flat>
        <tool-tip-generic> Settings </tool-tip-generic>
      </q-btn>

      <q-separator vertical inset />

      <q-btn class="q-ml-sm" color="grey-9" round dense flat>
        <q-avatar size="sm">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <tool-tip-generic> Profile </tool-tip-generic>
      </q-btn>
    </q-toolbar>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from "vue";
import { useRouter } from "vue-router";
import ToolTipGeneric from "components/generics/ToolTipGeneric.vue";

export default defineComponent({
  name: "HeaderSection",

  components: {
    ToolTipGeneric,
  },

  setup() {
    const dateToday = ref("Oct 29, 2022");

    const router = useRouter();
    const getTitle = computed(() => {
      return router.currentRoute.value.meta.title;
    });

    return {
      dateToday,
      getTitle,
    };
  },
});
</script>

<style lang="scss" scoped></style>
