<template>
  <v-container
    fluid
    class="fill-height"
  >
    <v-img
      class="background"
      width="100%"
      height="100%"
      :src="require('@/assets/background.jpg')"
      :lazy-src="require('@/assets/background-bad.jpg')"
    />
    <v-alert
      v-model="isError"
      type="error"
      dismissible
      border="top"
      transition="fade-transition"
      class="alert"
    >
      {{ error }}
    </v-alert>
    <v-row
      align="center"
      justify="center"
      class="wrapper"
    >
      <v-col
        xl="2"
        lg="3"
        md="5"
        sm="6"
        cols="9"
      >
        <v-card
          :loading="isLoading"
          elevation="24"
          rounded
        >
          <app-login-form
            @submit="onSubmit"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import AppLoginForm from '@/components/login-form.vue'
import UserService from '@/services/user-service.js'

export default {
  layout: 'blank',
  components: {
    AppLoginForm
  },
  data: () => ({
    isLoading: false,
    isError: false,
    error: null
  }),
  methods: {
    ...mapMutations({
      setUser: 'user/set'
    }),
    async onSubmit ({ login, password }) {
      this.isLoading = true

      const res = await UserService.mockFetchAuth(login, password)
      this.isLoading = false

      if (res) {
        this.setUser(res)

        this.$router.push({ name: 'profile' })
      } else {
        this.isError = true
        this.error = 'Invalid username or password'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  position: absolute;

  top: 0;
  left: 0;
}

.wrapper {
  z-index: 1000;
}

.alert {
  position: absolute;

  top: 50px;
  left: 50%;

  transform: translate(-50%);
}
</style>
