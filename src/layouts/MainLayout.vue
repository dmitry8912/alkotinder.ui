<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>

        <q-btn
          to="/settings"
          class="absolute-right"
          flat
          icon="settings"
          @click="toIndex = true"
        />

        <q-toolbar-title class="absolute-center">
          Alkotinder
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="glossy">
      <q-tabs @click="toIndex = true">
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :icon="nav.icon"
          :label="nav.label"
          :to="nav.to"
          exact
          ripple
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {
          label: 'Достижения',
          icon: 'assessment',
          to: '/'
        },
        {
          label: 'Собутыльники',
          icon: 'accessibility_new',
          to: '/friends'
        }
      ]
    }
  }
}
</script>
