<template>
  <q-item
    clickable
  >
    <q-item-section avatar>
      <q-icon :color="color" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption>{{ value }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'BageComponent',
  props: {
    color: String,
    icon: String,
    name: String,
    value: String
  }
})
</script>
