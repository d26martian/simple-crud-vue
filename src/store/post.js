export default {
  namespaced: true,
  state: {
    posts: [],
    post: {},
    item: {}
  },
  mutations: {
    posts_list(state, data) {
      state.posts = data
    },
    post_by_id(state, data) {
      state.post = Object.assign({}, data)
    },
    update_by_id(state, data) {
      state.item = Object.assign({}, data)
      // const index = findIndex(state.posts, { id: data.id })
      // Vue.set(state.posts, index, data)
    },
    remove_by_id(state, id) {
      console.log(id)
      state.posts = state.posts.filter(item => item.id !== id)
    }
  },
  actions: {
    getPosts({commit}) {
      fetch('https://jsonplaceholder.typicode.com/posts?&_limit=10')
        .then(response => {
          return response.json()
        })
        .then(data => {
          commit('posts_list', data)
        })
    },
    postById({commit}, payload) {
      console.log(payload)
      fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          commit('post_by_id', data)
        })
    },
    updatePost(_, post) {
      console.log('update ', post)
      fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify(post)
      })
        .then(response => {
          console.log(response)
          return response.json()
        })
        .then(data => {
          console.log(data)
        })
    },
    remove({commit}, payload) {
      commit('remove_by_id', payload)
      fetch(`https://jsonplaceholder.typicode.com/posts/${payload}`, {
        method: 'DELETE',
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          console.log(data)
        })
    }
  },
  getters: {}
}