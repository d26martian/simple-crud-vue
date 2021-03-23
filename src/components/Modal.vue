<template>
  <div>
    <!-- <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button> -->

    <b-modal id="bv-modal-example" hide-footer>
      <template #modal-title>
      </template>
      <div class="d-block text-center">
        <h3>Отредактировать пост!</h3>
        <slot />
      </div>
      <!-- <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button> -->
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "Modal",
}
</script>
