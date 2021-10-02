<template>
  <div>
    <div class="py-5 flex flex-col justify-between font-bold">
      <NuxtLink :to="post.slug">
        <h2 class="text-base md:text-lg">{{ post.title }}</h2>
      </NuxtLink>
      <div class="post-row">
        <span class="mr-3">Published: {{ post.publishDate }}</span>
        <button aria-label="Post Settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'
import { Post } from 'types/post'

export default defineComponent({
  props: {
    post: {
      required: true,
      type: Object as PropType<Post>,
    },
  },
  setup(props) {
    const { post } = toRefs(props)

    return { post }
  },
})
</script>

<style scoped>
.post-row {
  @apply flex items-center text-sm font-medium text-gray-500;
}
.svg {
  @apply cursor-pointer fill-current h-6 w-6 text-gray-500 hover:text-gray-800;
}
</style>
