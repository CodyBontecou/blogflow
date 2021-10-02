<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-3xl md:text-5xl">Your Posts</h1>
      <NuxtLink to="/post">
        <button
          aria-label="New Post"
          class="
            flex
            items-center
            justify-center
            bg-blue-ninja
            text-white
            font-semibold
            rounded-md
            px-2
            py-2
            md:py-1
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="fill-current text-white h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span class="hidden md:block md:ml-2">New Post</span>
        </button>
      </NuxtLink>
    </div>
    <PostRow
      v-for="(post, i) in posts"
      :key="i"
      :post="post"
      :class="{
        'mt-10': i === 0,
      }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'
import { Post } from 'types/post'

export default defineComponent({
  props: {
    posts: {
      required: true,
      type: Array as PropType<Post[]>,
    },
  },
  setup(props) {
    const { posts } = toRefs(props)

    return { posts }
  },
})
</script>

<style scoped></style>
