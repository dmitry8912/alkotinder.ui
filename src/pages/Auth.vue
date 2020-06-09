<template>
    <q-page padding>
        <q-card class="auth fixed-center">
            <q-form @submit="Login()">
                <div class="q-ma-auto">
                    <div class="row q-ma-md q-pt-md">
                        <q-banner class="bg-grey-3 full-width">
                            <template v-slot:avatar>
                                <q-avatar>
                                    <img src="https://kittentoob.com/wp-content/uploads/2014/07/cat-bar.jpg" />
                                </q-avatar>
                            </template>
                            Столик у окна занят, зато есть места за баром!
                        </q-banner>
                    </div>
                    <div class="row q-ma-md">
                        <q-input outlined label="Логин" stack-label class="col" />
                    </div>
                    <div class="row q-mb-md q-mx-md">
                        <q-input outlined label="Пароль" stack-label class="col" />
                    </div>
                    <div class="row q-ma-md q-pb-md">
                        <q-space />
                        <q-btn
                            color="primary"
                            label="В Бар!"
                            type="submit"
                        />
                    </div>
                </div>
            </q-form>
        </q-card>
    </q-page>
</template>

<script>
export default {
  methods: {
    Login () {
      this.$router.replace('/app')
    }
  }
}
</script>

<style scoped>
    .auth {
        min-width: 320px;
        max-width: 500px;
        margin: 0 auto;
    }
</style>
