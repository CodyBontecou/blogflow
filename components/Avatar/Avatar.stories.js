import Avatar from './Avatar'

const defaultUser = {
  firstName: 'Test',
  lastName: 'User',
}

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    user: {
      ...defaultUser,
      imageSrc: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
    },
    userNoImg: {
      ...defaultUser,
      imageSrc: undefined,
    },
  },
}

export const UserWithImg = (args, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: '<Avatar :user="user" />',
})

export const UserNoImg = (args, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: '<Avatar :user="userNoImg" />',
})
