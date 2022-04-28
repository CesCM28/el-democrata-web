export const mutations = {
  openArticle(state, payload) {
     this.$router.push({path: `/articles/${payload.id}`})
  }
}
