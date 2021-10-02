import Menu from './Menu'

export default {
  title: 'Menu',
  component: Menu,
  args: {
    expanded: true,
  },
}

export const MyMenu = (args, { argTypes }) => ({
  components: { Menu },
  props: Object.keys(argTypes),
  template: '<Menu :expanded="expanded" />',
})
