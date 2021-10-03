import ToggleButton from './ToggleButton'

export default {
  title: 'ToggleButton',
  component: ToggleButton,
  args: {
    name: 'Name',
    title: 'Title',
    color: '#464BE2',
  },
}

export const Default = (args, { argTypes }) => ({
  components: { ToggleButton },
  props: Object.keys(argTypes),
  template: '<ToggleButton :name="name" :title="title" :activeColor="color" />',
})
