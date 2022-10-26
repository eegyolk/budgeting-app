<template>
  <div class="q-pa-md full-width bg-white rounded-borders">
    <q-card class="full-width bg-grey-1" flat>
      <q-card-section class="bg-green-1 rounded-borders">
        <div class="text-left text-h6 text-grey-9 q-mb-xs">
          <q-avatar color="green-3">
            <q-icon name="insights" />
          </q-avatar>
          Graph by Week
        </div>
      </q-card-section>

      <q-card-section>
        <p class="text-center text-body2 text-grey-8" v-for="n in 5" :key="n">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat unelevated color="red" icon="date_range" label="Week" />
        <q-btn
          flat
          unelevated
          color="orange"
          icon="calendar_month"
          label="Month"
        />
        <q-btn flat unelevated color="green" icon="looks_one" label="Year" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GraphSection",
});
</script>

<style lang="scss" scoped></style>
