<template>
  <div>
    <div class="flex flex-col">
      <div class="flex justify-between items-center">
        <h1 class="font-bold text-3xl md:text-5xl">Your Posts</h1>
        <NuxtLink to="/post">
          <Button />
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
      <div v-if="posts.length === 0" class="flex items-center justify-center">
        <p class="mt-10 font-medium text-gray-400">
          You haven't posted anything yet
        </p>
      </div>
    </div>
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
