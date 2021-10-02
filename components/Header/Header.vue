<template>
  <div class="py-2 flex justify-between items-center border-b border-gray-200">
    <NuxtLink to="/" class="text-sm md:text-base font-bold">Blogflow</NuxtLink>
    <div>
      <Avatar
        :user="user"
        class="cursor-pointer"
        @click.native="toggleMenu()"
      />
      <Menu :expanded="showMenu" class="mt-1 absolute right-8 shadow-lg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs, ref } from '@nuxtjs/composition-api'
import { User } from 'types/user-types'

export default defineComponent({
  props: {
    user: {
      required: true,
      type: Object as PropType<User>,
    },
  },
  setup(props) {
    const { user } = toRefs(props)
    const showMenu = ref(false)

    function toggleMenu() {
      showMenu.value = !showMenu.value
    }

    return { user, toggleMenu, showMenu }
  },
})
</script>
