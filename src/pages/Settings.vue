<template>
  <q-page padding>
    <q-banner class="bg-primary text-white" rounded>
      Укажите ваш никнейм, пол, вес, чтобы мы могли расчитывать допустимые дозы, и другие параметры.
    </q-banner>
    <div class="q-pa-sm">
      <q-input v-model="nicknameSetting" label="Никнейм" class="q-mb-md" />
      <p>Пол:</p>
      <q-option-group
        v-model="sexSetting"
        :options="options"
        color="primary"
      />
      <q-input v-model="weightSetting" label="Вес" class="q-mb-md" />
      <q-input v-model="dailyTargetSetting" label="Ежедневная цель (литров)" />
    </div>

    <q-separator />
    <q-banner class="bg-orange text-white q-mt-md" rounded v-if="!isLoggedIn">
      Зарегистрируйтесь, чтобы иметь возможность сохранять данные, и накатывать с друзьями. Если вы уже зарегистрированы - войдите в систему.
      <template v-slot:action>
        <q-btn flat label="Регистрация" />
        <q-btn flat label="Войти" />
      </template>
    </q-banner>

    <q-banner class="bg-green text-white q-mt-md" rounded v-else>
      Вы вошли в систему как {{ nickname }}#{{ id }}
      <template v-slot:action>
        <q-btn flat label="Копировать ID" />
        <q-btn flat label="Выйти" />
      </template>
    </q-banner>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'

export default Vue.extend({
  name: 'Settings',
  data () {
    return {
      options: [
        {
          label: 'Мужчина',
          value: 'male'
        },
        {
          label: 'Женщина',
          value: 'female'
        }
      ]
    }
  },
  computed: {
    ...mapState('settings', ['nickname', 'id', 'sex', 'weight', 'dailyTarget', 'isLoggedIn']),
    nicknameSetting: {
      get () {
        return this.nickname
      },
      set (value) {
        this.setNickname(value)
      }
    },
    sexSetting: {
      get () {
        return this.sex
      },
      set (value) {
        this.setSex(value)
      }
    },
    weightSetting: {
      get () {
        return this.weight
      },
      set (value) {
        this.setWeight(value)
      }
    },
    dailyTargetSetting: {
      get () {
        return this.dailyTarget
      },
      set (value) {
        this.setDailyTarget(value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['setNickname', 'setSex', 'setWeight', 'setDailyTarget'])
  }
})
</script>
