<template>
  <editor
    ref="toastuiEditor"
    preview-style="tab"
    :initial-value="editorText"
    @change="onEditorChange"
  />
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor.css'

import { Editor } from '@toast-ui/vue-editor'

export default {
  components: {
    editor: Editor,
  },
  data() {
    return {
      editorText: 'Write or paste your post here...',
      contentMarkdown: '',
      editorOptions: {
        hideModeSwitch: true,
        usageStatistics: false,
      },
    }
  },
  methods: {
    getMarkdown() {
      const markdown = this.$refs.toastuiEditor.invoke('getMarkdown')
      this.contentMarkdown = markdown
    },
    onEditorChange() {
      this.getMarkdown()
    },
  },
}
</script>
