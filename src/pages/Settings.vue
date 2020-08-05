<template>
  <q-page padding>
    <q-banner class="bg-primary text-white" rounded>
      Укажите ваш никнейм, пол, вес, чтобы мы могли расчитывать допустимые дозы, и другие параметры.
    </q-banner>
    <div class="q-pa-sm">
      <div class="row">
        <div class="col-2">
          <q-avatar class="q-mt-sm" @click="uploadAvatar">
            <img :src="avatar">
          </q-avatar>
          <q-uploader
            :url="uploadUrl"
            max-total-size="2097152"
            ref="avatarPicker"
            @added="startUpload"
            @uploaded="endUpload"
            v-show="false"
            :headers="() => [{ name: 'Authorization', value: 'Bearer '+apiToken }]"
            field-name="avatar-photo"
          />
        </div>
        <div class="col">
          <q-input v-model="nicknameSetting" label="Никнейм" class="q-mb-md" />
        </div>
      </div>
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
      Авторизуйтесь с помощью Google-аккаунта, чтобы накатывать с друзьями!
      <template v-slot:action>
        <q-btn flat label="Войти" @click="getStateToken" />
      </template>
    </q-banner>

    <q-banner class="bg-green text-white q-mt-md" rounded v-else>
      Вы вошли как {{ email }}
      <template v-slot:action>
        <q-btn flat label="Выйти" @click="clearApiToken" />
      </template>
    </q-banner>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState, mapGetters } from 'vuex'
import { Loading } from 'quasar'
import { api } from 'src/config/config'

export default Vue.extend({
  name: 'Settings',
  data () {
    return {
      options: [
        {
          label: 'Мужчина',
          value: 'm'
        },
        {
          label: 'Женщина',
          value: 'f'
        }
      ]
    }
  },
  computed: {
    ...mapState('settings', ['nickname', 'id', 'sex', 'weight', 'dailyTarget', 'deviceUid', 'email', 'apiToken']),
    ...mapGetters('settings', ['isLoggedIn', 'avatar']),
    uploadUrl () {
      return api + "api/avatar"
    },
    nicknameSetting: {
      get () {
        return this.nickname
      },
      set (value) {
        (this as any).setNickname(value)
      }
    },
    sexSetting: {
      get () {
        return this.sex
      },
      set (value) {
        (this as any).setSex(value)
      }
    },
    weightSetting: {
      get () {
        return this.weight
      },
      set (value) {
        (this as any).setWeight(value)
      }
    },
    dailyTargetSetting: {
      get () {
        return this.dailyTarget
      },
      set (value) {
        (this as any).setDailyTarget(value)
      }
    }
  },
  methods: {
    ...mapActions('settings', ['setNickname', 'setSex', 'setWeight', 'setAvatar', 'setDailyTarget', 'getStateToken', 'getApiToken', 'clearApiToken']),
    uploadAvatar: function () {
      if (this.isLoggedIn) {
        (this as any).$refs.avatarPicker.pickFiles()
      }
    },
    startUpload () {
      (Loading as any).show();
      (this as any).$refs.avatarPicker.upload()
    },
    endUpload (info: any) {
      (this as any).setAvatar(JSON.parse(info.xhr.response).path);
      (Loading as any).hide();
      (this as any).$refs.avatarPicker.reset()
    }
  }
})
</script>
