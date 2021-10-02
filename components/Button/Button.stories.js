import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const Default = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button />',
})
