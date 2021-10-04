import Avatar from './Avatar'

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    imageSrc: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce',
    imageAlt: 'Image of avatar',
  },
}

export const Default = (_args, { argTypes }) => ({
  components: { Avatar },
  props: Object.keys(argTypes),
  template: '<Avatar :imageSrc="imageSrc" :imageAlt="imageAlt" />',
})
