<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Добавить выпивку</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-form @submit="addToProgress(drink)">
        <q-select clearable v-model="drink.drinkName" :options="drinkOpts" label="Что пьем" />
        <q-input clearable v-model="drink.strong" label="Крепость (%)" @click="drink.strong = ''" />
        <q-input clearable v-model="drink.total" label="Сколько (мл)" @click="drink.total = ''" />
        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" label="Добавить" type="submit" :disable="drink.drinkName == '' || drink.strong <= 0 || drink.total <= 0" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapActions } from 'vuex'
import { ProgressDataInterface } from '../../store/entities/ProgressData'

export default defineComponent({
  name: 'AddDrinkComponent',
  data () {
    const drink: ProgressDataInterface = {
      date: new Date(),
      drinkName: '',
      strong: 0,
      total: 0
    }
    return {
      drink,
      drinkOpts: ['Пиво', 'Коньяк', 'Виски', 'Водка', 'Эль']
    }
  },
  methods: {
    ...mapActions('achievements', ['addToProgress'])
  }
})
</script>