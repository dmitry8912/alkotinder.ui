<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'Alkotinder',
  methods: {
    ...mapActions('achievements', ['getAchievements']),
    ...mapActions('settings', ['getSettings']),
    ...mapActions('references', ['loadDrinks'])
  },
  mounted () {
    this.getSettings()
    this.getAchievements()
    this.loadDrinks()
  }
})
</script>
