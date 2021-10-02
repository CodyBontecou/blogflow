import FileReader from './FileReader'

export default {
  title: 'FileReader',
  component: FileReader,
}

export const Default = (args, { argTypes }) => ({
  components: { FileReader },
  props: Object.keys(argTypes),
  template: '<FileReader />',
})
