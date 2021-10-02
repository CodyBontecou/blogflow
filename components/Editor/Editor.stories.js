import Editor from './Editor'

export default {
  title: 'Editor',
  component: Editor,
}

export const Default = (args, { argTypes }) => ({
  components: { Editor },
  props: Object.keys(argTypes),
  template: '<Editor />',
})
