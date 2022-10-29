<template>
  <div class="full-width">
    <div
      class="q-px-md row items-center"
      style="height: 50px; border-bottom: 1px solid #e0e0e0"
    >
      <div class="col col-sm text-left">
        <span class="text-subtitle1 text-grey-9 text-weight-bold">
          Notifications
        </span>
      </div>

      <div class="col-6 col-sm-6 text-right">
        <span
          class="text-caption text-grey-9 text-weight-bold cursor-pointer"
          style="text-decoration: underline"
        >
          Mark all as read
        </span>
      </div>
    </div>

    <div class="bg-white">
      <q-card class="full-width" flat>
        <q-card-section class="q-pt-sm">
          <q-tabs
            v-model="tabModel"
            class="q-mb-md text-grey-6"
            indicator-color="red"
            active-class="bg-grey-2 text-grey-9 text-weight-medium"
            style="
              border: 1px solid #ededed;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
            "
            no-caps
            dense
            shrink
          >
            <q-tab name="unread" label="Unread">
              <q-badge color="red" floating>4</q-badge>
            </q-tab>
            <q-tab name="archived" label="Archived" />
            <q-tab name="all" label="All" />
          </q-tabs>

          <div
            class="q-mb-sm bg-grey-2 row items-center rounded-borders"
            style="border: 1px solid #ededed"
          >
            <div
              class="col-1 col-sm-1 rounded-borders"
              style="width: 2px; height: 30px; margin-left: -2px"
            ></div>
            <div class="col col-sm q-pl-md q-mr-xs">
              <div class="row">
                <div class="col col-sm">
                  <q-badge color="red" label="Reminder" rounded />
                </div>

                <div class="text-right">
                  <span class="text-caption text-grey-9 text-weight-medium">
                    1 min ago
                  </span>
                  <q-btn-dropdown
                    color="grey-9"
                    dropdown-icon="more_vert"
                    padding="none"
                    size="sm"
                    dense
                    flat
                  >
                    <q-btn-group dense outline>
                      <q-btn
                        color="white"
                        text-color="green"
                        icon="archive"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Archive</tool-tip-generic>
                      </q-btn>

                      <q-btn
                        color="white"
                        text-color="red"
                        icon="delete"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Delete</tool-tip-generic>
                      </q-btn>
                    </q-btn-group>
                  </q-btn-dropdown>
                </div>
              </div>

              <div class="row q-mr-sm ellipsis-2-lines">
                <span class="text-caption text-grey-9 text-weight-medium">
                  Pay credit card
                </span>
                <span class="text-caption text-grey-8">
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum repellendus sit voluptate voluptas eveniet porro.
                </span>
              </div>
            </div>
          </div>

          <div
            class="q-mb-sm bg-grey-2 row items-center rounded-borders"
            style="border: 1px solid #ededed"
          >
            <div
              class="col-1 col-sm-1 rounded-borders"
              style="width: 2px; height: 30px; margin-left: -2px"
            ></div>
            <div class="col col-sm q-pl-md q-mr-xs">
              <div class="row">
                <div class="col col-sm">
                  <q-badge color="red" label="Reminder" rounded />
                </div>

                <div class="text-right">
                  <span class="text-caption text-grey-9 text-weight-medium">
                    1 min ago
                  </span>
                  <q-btn-dropdown
                    color="grey-9"
                    dropdown-icon="more_vert"
                    padding="none"
                    size="sm"
                    dense
                    flat
                  >
                    <q-btn-group dense outline>
                      <q-btn
                        color="white"
                        text-color="green"
                        icon="archive"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Archive</tool-tip-generic>
                      </q-btn>

                      <q-btn
                        color="white"
                        text-color="red"
                        icon="delete"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Delete</tool-tip-generic>
                      </q-btn>
                    </q-btn-group>
                  </q-btn-dropdown>
                </div>
              </div>

              <div class="row q-mr-sm ellipsis-2-lines">
                <span class="text-caption text-grey-9 text-weight-medium">
                  Pay credit card
                </span>
                <span class="text-caption text-grey-8">
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum repellendus sit voluptate voluptas eveniet porro.
                </span>
              </div>
            </div>
          </div>

          <div
            class="q-mb-sm bg-grey-2 row items-center rounded-borders"
            style="border: 1px solid #ededed"
          >
            <div
              class="col-1 col-sm-1 rounded-borders"
              style="width: 2px; height: 30px; margin-left: -2px"
            ></div>
            <div class="col col-sm q-pl-md q-mr-xs">
              <div class="row">
                <div class="col col-sm">
                  <q-badge color="amber" label="News & Tips" rounded />
                </div>

                <div class="text-right">
                  <span class="text-caption text-grey-9 text-weight-medium">
                    1 min ago
                  </span>
                  <q-btn-dropdown
                    color="grey-9"
                    dropdown-icon="more_vert"
                    padding="none"
                    size="sm"
                    dense
                    flat
                  >
                    <q-btn-group dense outline>
                      <q-btn
                        color="white"
                        text-color="green"
                        icon="archive"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Archive</tool-tip-generic>
                      </q-btn>

                      <q-btn
                        color="white"
                        text-color="red"
                        icon="delete"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Delete</tool-tip-generic>
                      </q-btn>
                    </q-btn-group>
                  </q-btn-dropdown>
                </div>
              </div>

              <div class="row q-mr-sm ellipsis-2-lines">
                <span class="text-caption text-grey-9 text-weight-medium">
                  Pay credit card
                </span>
                <span class="text-caption text-grey-8">
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum repellendus sit voluptate voluptas eveniet porro.
                </span>
              </div>
            </div>
          </div>

          <div
            class="q-mb-sm bg-grey-2 row items-center rounded-borders"
            style="border: 1px solid #ededed"
          >
            <div
              class="col-1 col-sm-1 rounded-borders"
              style="width: 2px; height: 30px; margin-left: -2px"
            ></div>
            <div class="col col-sm q-pl-md q-mr-xs">
              <div class="row">
                <div class="col col-sm">
                  <q-badge color="amber" label="News & Tips" rounded />
                </div>

                <div class="text-right">
                  <span class="text-caption text-grey-9 text-weight-medium">
                    1 min ago
                  </span>
                  <q-btn-dropdown
                    color="grey-9"
                    dropdown-icon="more_vert"
                    padding="none"
                    size="sm"
                    dense
                    flat
                  >
                    <q-btn-group dense outline>
                      <q-btn
                        color="white"
                        text-color="green"
                        icon="archive"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Archive</tool-tip-generic>
                      </q-btn>

                      <q-btn
                        color="white"
                        text-color="red"
                        icon="delete"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Delete</tool-tip-generic>
                      </q-btn>
                    </q-btn-group>
                  </q-btn-dropdown>
                </div>
              </div>

              <div class="row q-mr-sm ellipsis-2-lines">
                <span class="text-caption text-grey-9 text-weight-medium">
                  Pay credit card
                </span>
                <span class="text-caption text-grey-8">
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum repellendus sit voluptate voluptas eveniet porro.
                </span>
              </div>
            </div>
          </div>

          <div
            class="q-mb-sm bg-grey-2 row items-center rounded-borders"
            style="border: 1px solid #ededed"
          >
            <div
              class="col-1 col-sm-1 rounded-borders"
              style="width: 2px; height: 30px; margin-left: -2px"
            ></div>
            <div class="col col-sm q-pl-md q-mr-xs">
              <div class="row">
                <div class="col col-sm">
                  <q-badge color="amber" label="News & Tips" rounded />
                </div>

                <div class="text-right">
                  <span class="text-caption text-grey-9 text-weight-medium">
                    1 min ago
                  </span>
                  <q-btn-dropdown
                    color="grey-9"
                    dropdown-icon="more_vert"
                    padding="none"
                    size="sm"
                    dense
                    flat
                  >
                    <q-btn-group dense outline>
                      <q-btn
                        color="white"
                        text-color="green"
                        icon="archive"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Archive</tool-tip-generic>
                      </q-btn>

                      <q-btn
                        color="white"
                        text-color="red"
                        icon="delete"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Delete</tool-tip-generic>
                      </q-btn>
                    </q-btn-group>
                  </q-btn-dropdown>
                </div>
              </div>

              <div class="row q-mr-sm ellipsis-2-lines">
                <span class="text-caption text-grey-9 text-weight-medium">
                  Pay credit card
                </span>
                <span class="text-caption text-grey-8">
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum repellendus sit voluptate voluptas eveniet porro.
                </span>
              </div>
            </div>
          </div>

          <div
            class="q-mb-sm bg-grey-2 row items-center rounded-borders"
            style="border: 1px solid #ededed"
          >
            <div
              class="col-1 col-sm-1 rounded-borders"
              style="width: 2px; height: 30px; margin-left: -2px"
            ></div>
            <div class="col col-sm q-pl-md q-mr-xs">
              <div class="row">
                <div class="col col-sm">
                  <q-badge color="light-blue" label="Team Updates" rounded />
                </div>

                <div class="text-right">
                  <span class="text-caption text-grey-9 text-weight-medium">
                    1 min ago
                  </span>
                  <q-btn-dropdown
                    color="grey-9"
                    dropdown-icon="more_vert"
                    padding="none"
                    size="sm"
                    dense
                    flat
                  >
                    <q-btn-group dense outline>
                      <q-btn
                        color="white"
                        text-color="green"
                        icon="archive"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Archive</tool-tip-generic>
                      </q-btn>

                      <q-btn
                        color="white"
                        text-color="red"
                        icon="delete"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Delete</tool-tip-generic>
                      </q-btn>
                    </q-btn-group>
                  </q-btn-dropdown>
                </div>
              </div>

              <div class="row q-mr-sm ellipsis-2-lines">
                <span class="text-caption text-grey-9 text-weight-medium">
                  Pay credit card
                </span>
                <span class="text-caption text-grey-8">
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum repellendus sit voluptate voluptas eveniet porro.
                </span>
              </div>
            </div>
          </div>

          <div
            class="q-mb-sm bg-grey-2 row items-center rounded-borders"
            style="border: 1px solid #ededed"
          >
            <div
              class="col-1 col-sm-1 rounded-borders"
              style="width: 2px; height: 30px; margin-left: -2px"
            ></div>
            <div class="col col-sm q-pl-md q-mr-xs">
              <div class="row">
                <div class="col col-sm">
                  <q-badge color="purple" label="System Updates" rounded />
                </div>

                <div class="text-right">
                  <span class="text-caption text-grey-9 text-weight-medium">
                    1 min ago
                  </span>
                  <q-btn-dropdown
                    color="grey-9"
                    dropdown-icon="more_vert"
                    padding="none"
                    size="sm"
                    dense
                    flat
                  >
                    <q-btn-group dense outline>
                      <q-btn
                        color="white"
                        text-color="green"
                        icon="archive"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Archive</tool-tip-generic>
                      </q-btn>

                      <q-btn
                        color="white"
                        text-color="red"
                        icon="delete"
                        size="sm"
                        dense
                        flat
                      >
                        <tool-tip-generic>Delete</tool-tip-generic>
                      </q-btn>
                    </q-btn-group>
                  </q-btn-dropdown>
                </div>
              </div>

              <div class="row q-mr-sm ellipsis-2-lines">
                <span class="text-caption text-grey-9 text-weight-medium">
                  Pay credit card
                </span>
                <span class="text-caption text-grey-8">
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum repellendus sit voluptate voluptas eveniet porro.
                </span>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ToolTipGeneric from "components/generics/ToolTipGeneric.vue";

export default defineComponent({
  name: "NotificationSection",

  components: {
    ToolTipGeneric,
  },

  setup() {
    return {
      tabModel: ref("unread"),
    };
  },
});
</script>

<style lang="scss" scoped></style>
