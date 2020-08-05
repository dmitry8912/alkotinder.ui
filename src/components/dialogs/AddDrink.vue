<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Добавить выпивку</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-form @submit="addToProgress(drink)">
        <div class="row">
          <div class="col-10">
            <q-select clearable v-model="drink.drinkName" :options="options" use-input @filter="filterFn" behavior="menu" label="Что пьем" />
          </div>
          <div class="col q-ma-sm">
            <q-btn color="primary" label="+" @click="showReferenceDrink" />
          </div>
        </div>
        <q-input clearable v-model="strongSetting" label="Крепость (%)" @click="strongSetting = ''" />
        <q-input clearable v-model="drink.total" label="Сколько (мл)" @click="drink.total = ''" />
        <q-card-actions align="right">
          <q-btn color="primary" label="Добавить" type="submit" :disable="drink.drinkName === null || strongSetting <= 0 || drink.total <= 0" />
        </q-card-actions>
      </q-form>
    </q-card-section>
    <q-card-section>
      <div v-if="todayDrinks.length > 0">
        <div class="text-h6">Текущий прогресс</div>
        <q-list bordered separator>
          <q-slide-item @left="deleteProgress(progressEntity)" left-color="negative" v-for="progressEntity in todayDrinks" :key="progressEntity.uid">
            <template v-slot:left>
              <q-avatar color="negative" text-color="white" icon="delete" />
            </template>

            <q-item>
              <q-item-section>
                {{ progressEntity.drinkName.label }} ({{ progressEntity.drinkName.strong}}%) {{ progressEntity.total }} мл. в {{ progressEntity.date | formatDrinkDate }}
              </q-item-section>
            </q-item>
          </q-slide-item>
        </q-list>
      </div>
      <div v-else>
        <q-chat-message
          :text="['Что-то ты совсем не пьешь, давай налью?']"
        />
        <q-chat-message
          stamp="Гремит бутылками в баре"
        >
          <q-spinner-dots size="2rem" />
        </q-chat-message>
      </div>
    </q-card-section>
    <q-dialog v-model="addReferenceDrinkVisible">
      <add-reference-drink-component @close="addReferenceDrinkVisible = false" />
    </q-dialog>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mapActions, mapState, mapGetters } from 'vuex'
import { ProgressDataInterface } from 'src/store/entities/ProgressData'
import AddReferenceDrinkComponent from "components/dialogs/AddReferenceDrink.vue"
import { date } from 'quasar'
import { DrinkInterface } from 'src/store/entities/Drink'

export default defineComponent({
  name: 'AddDrinkComponent',
  components: { AddReferenceDrinkComponent },
  data () {
    return {
      drink: {
        uid: '',
        date: '',
        drinkName: {
          label: '',
          value: '',
          strong: 0,
          id: 0
        },
        total: 0
      },
      addReferenceDrinkVisible: false,
      options: [
      ]
    }
  },
  computed: {
    ...mapState('achievements', ['progress']),
    ...mapGetters('achievements', ['todayDrinks']),
    ...mapGetters('references', ['drinksReferences']),
    strongSetting: {
      get () {
        return (this as any).drink.drinkName == null ? '' : (this as any).drink.drinkName.strong
      },
      set (value) {
        if ((this as any).drink.drinkName !== null) {
          const drinkCopy: DrinkInterface = Object.assign({}, (this as any).drink.drinkName)
          drinkCopy.strong = value
          Object.assign((this as any).drink.drinkName, JSON.parse(JSON.stringify(drinkCopy)))
        }
      }
    },
    drinkSetting: {
      get () {
        return (this as any).drink.drinkName
      },
      set (value) {
        Object.assign((this as any).drink.drinkName, Object.assign({}, JSON.parse(JSON.stringify(value))))
      }
    }
  },
  methods: {
    ...mapActions('achievements', ['addToProgress', 'deleteProgress']),
    ...mapActions('references', ['loadDrinks']),
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          Object.assign((this as any).options, JSON.parse(JSON.stringify((this as any).drinksReferences)))
        })
        return
      }

      update(() => {
        Object.assign((this as any).options, JSON.parse(JSON.stringify((this as any).drinksReferences.filter((v: object) => (v as any)!.label.toLowerCase().indexOf(val.toLowerCase()) > -1))))
      })
    },
    showReferenceDrink () {
      (this as any).addReferenceDrinkVisible = true
    }
  },
  mounted () {
    (this as any).options = JSON.parse(JSON.stringify((this as any).drinksReferences))
    const data = (this as any).progress!.progressData
    if (data.length > 0) {
      const lastMark: ProgressDataInterface | null = data[data.length - 1] as ProgressDataInterface
      Object.assign((this as any).drink, JSON.parse(JSON.stringify(lastMark)))
    }
  },
  filters: {
    formatDrinkDate (value: any) {
      return date.formatDate(value, 'HH:mm D.MM.YYYY')
    }
  }
})
</script>
