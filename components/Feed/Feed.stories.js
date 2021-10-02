import posts from '../../fixtures/feed.json'
import Feed from './Feed'

export default {
  title: 'Feed',
  component: Feed,
  args: {
    posts,
  },
}

export const Default = (args, { argTypes }) => ({
  components: { Feed },
  props: Object.keys(argTypes),
  template: '<Feed :posts="posts" />',
})

export const NoPosts = (args, { argTypes }) => ({
  components: { Feed },
  props: Object.keys(argTypes),
  template: '<Feed :posts="[]" />',
})
