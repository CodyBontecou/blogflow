<template>
  <div class="flex flex-col md:flex-row md:justify-between md:items-center">
    <div class="flex flex-col md:flex-row md:items-center">
      <Avatar :image-alt="service.image.alt" :image-src="service.image.src" />
      <span class="font-medium mt-2 md:mt-0 md:text-2xl md:ml-6">
        {{ service.name }}
      </span>
    </div>
    <ToggleButton
      :name="toggleButtonOptions.name"
      :title="toggleButtonOptions.title"
      :active-color="toggleButtonOptions.color"
      @toggle="checkUserSetup()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from '@nuxtjs/composition-api'
import { Service } from 'types/service'

export default defineComponent({
  props: {
    service: {
      required: true,
      type: Object as PropType<Service>,
    },
  },
  setup(props) {
    const { service } = toRefs(props)

    const serviceName = service.value.name
    const toggleButtonOptions = {
      name: serviceName,
      title: `Toggle post to ${serviceName}`,
      color: '#464BE2',
    }

    function checkUserSetup() {
      console.log('Check user setup service')
    }

    return { service, toggleButtonOptions, checkUserSetup }
  },
})
</script>

<style scoped></style>
