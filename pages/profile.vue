<template>
  <v-container
    fluid
    class="fill-height"
  >
    <v-row>
      <v-col
        class="d-flex flex-column align-center"
        offset-xl="2"
        offset-lg="3"
        offset-md="3"
        offset-sm="3"
        offset="2"
        xl="8"
        lg="6"
        md="6"
        sm="6"
        cols="8"
      >
        <v-card
          min-width="50%"
        >
          <v-img :src="user.avatar ? user.avatar : require('@/assets/avatar.png')">
            <v-card-title class="font-weight-bold text-h4">
              {{ user.username ? user.username : 'Not found' }}
            </v-card-title>
          </v-img>
          <v-card-subtitle>{{ user.email ? user.email : 'Not found' }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
