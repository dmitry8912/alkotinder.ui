<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Добавить новый напиток</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-form @submit="addNewDrink(drink)">
        <q-input clearable v-model="drink.label" label="Название" />
        <q-input clearable v-model="drink.strong" type="number" label="Крепость (%)" @click="drink.strong = ''" />
        <q-card-actions align="right">
          <q-btn v-close-popup color="primary" label="Сохранить" type="submit" :disable="drink.label == '' || drink.strong <=0" />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapActions } from 'vuex'
import { DrinkInterface } from 'src/store/entities/Drink'
export default defineComponent({
  name: 'AddReferenceDrinkComponent',
  data () {
    const drink: DrinkInterface = {
      label: '',
      value: '',
      strong: 0,
      id: 0
    }
    return {
      drink
    }
  },
  methods: {
    ...mapActions('references', ['addNewDrink'])
  }
})
</script>
