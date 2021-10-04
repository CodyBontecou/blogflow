<template>
  <div class="circle-container">
    <nuxt-img class="absolute" :width="width" :src="imageSrc" :alt="imageAlt" />
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
    width: {
      required: false,
      type: String,
      default: '60',
    },
  },
  setup(props) {
    const { imageSrc } = toRefs(props)

    return { imageSrc }
  },
})
</script>

<style scoped>
.circle-container {
  @apply flex items-center justify-center rounded-full border border-gray-300 relative overflow-hidden w-4 h-4 p-4 md:w-6 md:h-6 md:p-6;
}
</style>
