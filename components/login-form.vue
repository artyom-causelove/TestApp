<template>
  <v-container class="d-flex flex-column align-center">
    <span class="text-xl-h4 text-lg-h4 text-md-h5 text-sm-h5 text-h5 mb-4">Login</span>
    <v-form
      v-model="valid"
      class="full-width"
    >
      <v-container class="d-flex flex-column align-center">
        <v-text-field
          v-model="login"
          :rules="loginRules"
          class="full-width mb-3"
          filled
          autofocus
          dense
          outlined
          rounded
          label="Login"
          append-icon="mdi-login"
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          class="full-width mb-3"
          filled
          dense
          outlined
          rounded
          label="Password"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
        />
        <v-btn
          width="130px"
          :disabled="!valid"
          @click="$emit('submit', { login, password })"
        >
          Sing In
        </v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>export default {
  data: () => ({
    valid: false,
    show: false,
    login: '',
    password: '',
    loginRules: [
      v => !!v.trim() || 'Login is required',
      v => (v.length > 5) || 'Login must be more than 5 characters',
      v => /[A-z]/.test(v) || 'Login must contain only Latin letters'
    ],
    passwordRules: [
      v => !!v.trim() || 'Password is required',
      v => (v.length > 7) || 'Password must be more than 7 characters',
      v => /[A-z]/.test(v) || 'Password must contain only Latin letters'
    ]
  })
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100%;
}
</style>
