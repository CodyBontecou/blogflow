<template>
  <ul v-show="expanded" data-cy="menu" class="menu">
    <li v-for="(link, i) in links" :key="i" class="menu-item">
      <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { links } from '../../utils/links'

export default defineComponent({
  props: {
    expanded: {
      required: true,
      type: Boolean,
    },
  },
  setup() {
    return { links }
  },
})
</script>

<style scoped>
.menu {
  @apply rounded bg-white border border-gray-200 max-w-[200px];
}
.menu-item {
  @apply font-body block px-5 py-2 font-black cursor-pointer text-gray-600 hover:text-blue-500 first:mt-5 last:mb-5;
}
</style>
