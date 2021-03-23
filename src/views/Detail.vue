<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1 class="mb-5">Подробная информация</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card :title="post.title">
          <b-card-text>
            {{ post.body }}
          </b-card-text>
          <b-button variant="primary" class="mr-4" id="show-btn" @click="update(post.id)">Отредактировать</b-button>
        </b-card>
        <b-button @click="$router.go(-1)" class="mt-4">Назад</b-button>
      </b-col>
    </b-row>
    <Modal>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Title text"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            placeholder="Enter text"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Body text"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.body"
            type="text"
            placeholder="Enter text"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </Modal>
  </b-container>
</template>
<script>
import Modal from '@/components/Modal'

import {mapState, mapActions} from 'vuex'

export default {
  name: "Post",
  components: {
    Modal
  },
  data() {
    return {
      form: {
        id: '',
        title: '',
        body: ''
      }
    }
  },
  computed: {
    ...mapState('post', ['post']),
  },
  methods: {
    ...mapActions("post", ["updatePost"]),
    update(id) {
      console.log('update ', id)
      this.form.id = id
      this.form.title = this.post.title
      this.form.body = this.post.body
      this.$bvModal.show('bv-modal-example')
    },
    onSubmit(event) {
      event.preventDefault()
      this.updatePost(this.form)
      console.log(this.form)
      this.$bvModal.hide('bv-modal-example')
    },
    onReset() {
      this.form.title = ''
      this.form.body = ''
    }
  }
}
</script>