<template>
  <b-card bg-variant="dark" text-variant="white" class="mb-4">
    <b-card-text>
      {{ post.title }}
    </b-card-text>
    <b-button @click="$emit('detail', post.id)" variant="success" class="mr-4">Подробнее</b-button>
    <b-button @click="$emit('remove', post.id)" variant="danger">Удалить</b-button>
  </b-card>
</template>
<script>
export default {
  name: "Post",
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },
}
</script>
