import UserToggle from './UserToggle'

const defaultUser = {
  firstName: 'Test',
  lastName: 'User',
}

export default {
  title: 'UserToggle',
  component: UserToggle,
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

export const UserWithImg = (_args, { argTypes }) => ({
  components: { UserToggle },
  props: Object.keys(argTypes),
  template: '<UserToggle :user="user" />',
})

export const UserNoImg = (_args, { argTypes }) => ({
  components: { UserToggle },
  props: Object.keys(argTypes),
  template: '<UserToggle :user="userNoImg" />',
})
