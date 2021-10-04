<template>
  <div class="flex -space-x-1 overflow-hidden">
    <nuxt-img
      width="60"
      class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
      :src="imageSrc"
      :alt="imageAlt"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    imageSrc: {
      required: true,
      type: String,
    },
    imageAlt: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { imageSrc } = toRefs(props)

    return { imageSrc }
  },
})
</script>
