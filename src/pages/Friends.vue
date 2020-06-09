<template>
  <q-page padding>
      <q-card
        class="q-mb-md"
        v-for="friend in friends"
        :key="friend.name"
      >
        <q-item>
          <q-item-section avatar>
            <q-avatar size="40px">
              <img :src="friend.avatar" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ friend.name }}</q-item-label>
            <q-item-label caption>{{ friend.status }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-list>
          <bage-component
            v-for="record in friend.bages"
            :key="record.name"
            :icon="record.icon"
            :color="record.color"
            :name="record.name"
            :value="record.value"
          />
        </q-list>

        <q-card-actions align="left">
          <q-btn flat round color="red" :label="friend.likes" icon="favorite" @click="sayHello(friend.name)" />
        </q-card-actions>
      </q-card>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="fas fa-snowboarding" color="primary" />
      </q-page-sticky>

  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import BageComponent from 'components/Bage.vue'

export default Vue.extend({
  name: 'Friends',
  components: { BageComponent },
  computed: {
    ...mapState('friends', ['friends'])
  },
  methods: {
    sayHello (username: string) {
      this.$q.notify({
        type: 'positive',
        message: `Бухарь ${username} получит ваше приглашение`
      })
    }
  }
})
</script>
