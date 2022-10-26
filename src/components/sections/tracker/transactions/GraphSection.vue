<template>
  <div class="q-pa-md full-width bg-white rounded-borders">
    <q-card class="full-width bg-grey-1" flat>
      <q-card-section class="bg-green-1 rounded-borders">
        <div class="row">
          <div class="col-6 col-sm-6">
            <q-avatar color="green-3">
              <q-icon name="insights" />
            </q-avatar>
            Graph
          </div>

          <div class="col-6 col-sm-6 text-right">
            <q-btn icon="add" color="primary" round unelevated outline />
          </div>
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
        <q-btn-toggle
          v-model="secondModel"
          class="full-width my-custom-toggle"
          spread
          no-caps
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
            { label: 'Income', value: 'one' },
            { label: 'Expenses', value: 'two' },
          ]"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "GraphSection",

  setup() {
    return {
      secondModel: ref("one"),
    };
  },
});
</script>

<style lang="scss" scoped>
.my-custom-toggle {
  border: 1px solid $primary;
}
</style>
