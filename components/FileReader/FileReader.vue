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
  data() {
    return {
      text: 'here',
      error: false,
    }
  },
  methods: {
    loadTextFromFile(event: any) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0]
        const reader = new FileReader()

        reader.onload = (e) => this.$emit('load', e.target.result)
        reader.readAsText(file)
      } else {
        this.error = true
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
