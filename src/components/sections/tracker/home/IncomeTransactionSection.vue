<template>
  <div class="q-pa-md full-width bg-white rounded-borders">
    <q-card class="full-width bg-grey-1" flat>
      <q-card-section class="bg-green-1 rounded-borders">
        <div class="text-left text-h6 text-grey-9 q-mb-xs">
          <q-avatar color="green-3">
            <q-icon name="money" />
          </q-avatar>

          Latest Income
        </div>
      </q-card-section>

      <q-card-section>
        <q-item>
          <q-item-section avatar top>
            <q-icon name="account_balance" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">
              <span class="text-weight-medium">Salary 1</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="2">
              <span class="text-grey-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-icon name="event" color="black" size="24px" />
              <span class="text-weight-medium">Oct. 26, 2022</span>
            </div>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item-section avatar top>
            <q-icon name="account_balance" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">
              <span class="text-weight-medium">Salary 2</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="2">
              <span class="text-grey-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-icon name="event" color="black" size="24px" />
              <span class="text-weight-medium">Oct. 26, 2022</span>
            </div>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item-section avatar top>
            <q-icon name="account_balance" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">
              <span class="text-weight-medium">Investment 1</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="2">
              <span class="text-grey-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-icon name="event" color="black" size="24px" />
              <span class="text-weight-medium">Oct. 26, 2022</span>
            </div>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item-section avatar top>
            <q-icon name="account_balance" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">
              <span class="text-weight-medium">Investment 2</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="2">
              <span class="text-grey-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-icon name="event" color="black" size="24px" />
              <span class="text-weight-medium">Oct. 26, 2022</span>
            </div>
          </q-item-section>
        </q-item>

        <q-separator spaced />

        <q-item>
          <q-item-section avatar top>
            <q-icon name="account_balance" color="black" size="34px" />
          </q-item-section>

          <q-item-section top class="col-2 gt-sm">
            <q-item-label class="q-mt-sm">
              <span class="text-weight-medium">Side Hustle</span>
            </q-item-label>
          </q-item-section>

          <q-item-section top>
            <q-item-label lines="2">
              <span class="text-grey-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                repellendus sit voluptate voluptas eveniet porro. Rerum
                blanditiis perferendis totam, ea at omnis vel numquam
                exercitationem aut, natus minima, porro labore.
              </span>
            </q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-icon name="event" color="black" size="24px" />
              <span class="text-weight-medium">Oct. 26, 2022</span>
            </div>
          </q-item-section>
        </q-item>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat unelevated color="red" icon="date_range" label="Latest" />
        <q-btn
          flat
          unelevated
          color="green"
          icon="arrow_upward"
          label="Highest"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IncomeTransactionSection",
});
</script>

<style lang="scss" scoped></style>
