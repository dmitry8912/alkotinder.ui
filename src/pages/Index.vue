<template>
  <q-page padding>

    <q-card class="q-mb-md">
      <progress-component
        size="100px"
        :remains="progress.remains"
        :percent="65"
      />

      <q-separator />

      <q-list>
          <bage-component
          v-for="record in todayBages"
          :key="record.name"
          :icon="record.icon"
          :color="record.color"
          :name="record.name"
          :value="record.value"
        />
      </q-list>
    </q-card>

    <q-card class="q-mb-md">
      <q-list>
        <bage-component
          v-for="record in recordBages"
          :key="record.name"
          :icon="record.icon"
          :color="record.color"
          :name="record.name"
          :value="record.value"
        />
      </q-list>
    </q-card>

    <advice-component
      :img="advice.img"
      :advice="advice.advice" />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="local_bar" color="primary" @click="addDrink = true" />
    </q-page-sticky>

    <q-dialog v-model="addDrink">
      <add-drink-component @close="addDrink = false" />
    </q-dialog>

  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import AdviceComponent from 'components/Advice.vue'
import BageComponent from 'components/Bage.vue'
import ProgressComponent from 'components/Progress.vue'
import AddDrinkComponent from 'components/dialogs/AddDrink.vue'

export default Vue.extend({
  components: { AdviceComponent, BageComponent, ProgressComponent, AddDrinkComponent },
  computed: {
    ...mapGetters('achievements', ['todayTagretCompletePercentage']),
    ...mapState('achievements', ['progress', 'advice', 'recordBages', 'todayBages'])
  },
  data () {
    return {
      addDrink: false
    }
  }
})
</script>
