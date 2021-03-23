<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1 class="mb-5">Список постов</h1>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="8" v-for="post in posts" :key="post.id">
        <Post 
          :post="post" 
          @detail="handlerDateil" 
          @remove="handlerRemove"
          @update="handlerUpdate"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Post from '@/components/Post'

import {mapState, mapActions} from 'vuex'

export default {
  name: "Posts",
  components: {
    Post,
  },
  computed: {
    ...mapState('post', ['posts']),
  },
  methods: {
    ...mapActions("post", ["getPosts", "postById", "remove"]),
    handlerDateil(id) {
      this.postById(id)
      this.$router.push({name: 'post', params: { id: id}});
    },
    handlerRemove(id) {
      this.remove(id)
      console.log('remove ', id)
    },
    handlerUpdate(id) {
      this.postById(id)
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
<style>
.btn-group {
  display: flex;
  justify-content: center;
  margin-left: -10px;
  margin-right: -10px;
}
.button {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
