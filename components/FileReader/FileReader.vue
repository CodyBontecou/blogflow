<template>
  <div>
    <label class="text-reader">
      Upload File
      <input type="file" @change="loadTextFromFile" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      text: 'here',
    }
  },
  methods: {
    loadTextFromFile(event: any) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = (e) => this.$emit('load', e.target.result)
      reader.readAsText(file)
    },
  },
})
</script>

<style scoped>
.text-reader {
  @apply px-2 relative overflow-hidden inline-block rounded cursor-pointer bg-blue-ninja text-white;
}
.text-reader input {
  @apply absolute top-0 left-0 z-0 opacity-0;
}
</style>
