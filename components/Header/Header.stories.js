import Header from './Header'

const defaultUser = {
  firstName: 'Test',
  lastName: 'User',
}

export default {
  title: 'Header',
  component: Header,
  args: {
    user: {
      ...defaultUser,
      imageSrc: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
    },
  },
}

export const DefaultHeader = (args, { argTypes }) => ({
  components: { Header },
  props: Object.keys(argTypes),
  template: '<Header :user="user" />',
})
