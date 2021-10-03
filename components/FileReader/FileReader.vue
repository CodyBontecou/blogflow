<template>
  <div>
    <label class="text-reader blue-button">
      Upload File
      <input type="file" @change="loadTextFromFile" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  methods: {
    loadTextFromFile(event: Event): void {
      const target = event.target as HTMLInputElement
      const files = target.files

      if (files != null && files.length > 0) {
        const file = files[0]
        const reader = new FileReader()

        reader.onload = () => this.$emit('load', reader.result)
        reader.readAsText(file)
      } else {
        this.$emit('error', true)
      }
    },
  },
})
</script>

<style scoped>
.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  border-radius: 5px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
