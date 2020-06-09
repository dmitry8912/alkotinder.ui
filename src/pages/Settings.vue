<template>
  <q-page padding>
    <q-banner class="bg-primary text-white" rounded>
      Укажите ваш никнейм, пол, вес, чтобы мы могли расчитывать допустимые дозы, и другие параметры.
    </q-banner>
    <q-input v-model="nickname" label="Никнейм" />
    <div class="q-pa-lg">
      <q-option-group
        v-model="group"
        :options="options"
        color="primary"
      />
      <q-input v-model="weight" label="Вес" />
    </div>

    <q-separator />
    <q-banner class="bg-orange text-white q-mt-md" rounded>
      Зарегистрируйтесь, чтобы иметь возможность сохранять данные, и накатывать с друзьями. Если вы уже зарегистрированы - войдите в систему.
      <template v-slot:action>
        <q-btn flat label="Регистрация" />
        <q-btn flat label="Войти" />
      </template>
    </q-banner>

    <q-banner class="bg-green text-white q-mt-md" rounded>
      Вы вошли в систему как {{ nickname }}#ah65d
      <template v-slot:action>
        <q-btn flat label="Копировать ID" />
        <q-btn flat label="Выйти" />
      </template>
    </q-banner>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Settings',
  data () {
    return {
      nickname: '',
      weight: 60,
      group: '',
      options: [
        {
          label: 'Мужчина',
          value: 'male'
        },
        {
          label: 'Женщина',
          value: 'female'
        },
        {
          label: 'Nobody',
          value: 'female1'
        }
      ]
    }
  }
})
</script>
