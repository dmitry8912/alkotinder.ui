<template>
  <q-page padding>

    <q-card class="q-mb-md">
      <progress-component
        size="100px"
        :remains="targetRemains"
        :percent="targetCompletePercent"
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
        <bage-component
          :icon="danger.icon"
          :color="danger.color"
          :name="danger.name"
          :value="danger.value"
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
import { BageInterface } from '../store/entities/Bage'

export default Vue.extend({
  components: { AdviceComponent, BageComponent, ProgressComponent, AddDrinkComponent },
  computed: {
    ...mapState('achievements', ['progress', 'advice', 'recordBages', 'todayBages']),
    ...mapState('settings', ['dailyTarget', 'weight']),
    ...mapGetters('settings', ['kVidmark']),
    ...mapGetters('achievements', ['todayLitres', 'todayPureAlcohol']),
    targetCompletePercent (): number {
      return Number(parseFloat(((this.todayLitres / this.dailyTarget) * 100).toString()).toFixed(0))
    },
    targetRemains (): number {
      if (this.todayLitres < this.dailyTarget) {
        return Number(parseFloat((this.dailyTarget - this.todayLitres).toString()).toFixed(1))
      }
      return 0
    },
    danger (): BageInterface {
      return this.getDangerInfo()
    }
  },
  data () {
    return {
      addDrink: false
    }
  },
  methods: {
    getDangerInfo (): BageInterface {
      const concentration: number = this.todayPureAlcohol / (this.kVidmark * this.weight)
      let colorVal: string, valueVal: string
      colorVal = 'grey-5'
      valueVal = 'Вы еще не приблизились к пределу'
      if (concentration >= 0.3 && concentration <= 0.59) {
        colorVal = 'pink-3'
        valueVal = 'Возможны: эйфория, расслабление, говорливость, понижение сдержанности'
      }
      if (concentration >= 0.6 && concentration <= 0.9) {
        colorVal = 'red-4'
        valueVal = 'Возможны: расторможенность, экстравертность'
      }
      if (concentration >= 1 && concentration <= 1.9) {
        colorVal = 'red-6'
        valueVal = 'Возможны: переменчивость эмоций, неистовость, гнев или печаль, снижение либидо'
      }
      if (concentration >= 2 && concentration >= 2.9) {
        colorVal = 'red-14'
        valueVal = 'Возможны: потеря сознания, потеря памяти'
      }
      if (concentration >= 3) {
        colorVal = 'red-14'
        colorVal = 'red-14'
        valueVal = 'Видимо, вы уже мертвы, столько пить нельзя'
      }
      const danger: BageInterface = {
        icon: 'fas fa-skull-crossbones',
        color: colorVal,
        name: 'Опасная зона',
        value: valueVal
      }
      return danger
    }
  }
})
</script>
