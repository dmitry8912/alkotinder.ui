<template>
  <q-card>
      <q-card-section>
        <div class="text-h6">Советы тренера</div>
      </q-card-section>
      <q-img
        :src="img"
        basic
      >
        <div class="absolute-top text-subtitle2 text-center">
          {{ advice }}
        </div>
      </q-img>
    </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AdviceComponent',
  props: {
    img: String,
    advice: String
  }
})
</script>
