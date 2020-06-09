<template>
  <div class="q-pa-sm">
    <div class="row">
      <div class="col">
        <div class="row">
          <span class="target-description">Осталось литров</span>
        </div>
        <div class="row">
          <span class="target-count">{{ remains }}</span>
        </div>
        <div class="row">
          <span lass="target-description">до достижения цели!</span>
        </div>
      </div>
      <q-circular-progress
        show-value
        class="text-white q-ma-md"
        :value="percent"
        :size="size"
        :thickness="0.2"
        color="orange"
        track-color="transparent"
      >
        <q-icon color="orange-8" name="fas fa-glass-cheers" />
      </q-circular-progress>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProgressComponent',
  props: {
    size: String,
    remains: Number,
    percent: Number
  }
})
</script>

<style scoped lang="scss">
  .target-count {
    font-size: 65px;
    color: $orange-8;
  }
  .target-description {
    font-family: 'Roboto';
    font-size: 15px;
  }
</style>
