export const state = () => ({
  username: null,
  email: null,
  avatar: null
})

export const mutations = {
  set (state, user) {
    state.username = user.username
    state.email = user.email
    state.avatar = user.avatar
  }
}
