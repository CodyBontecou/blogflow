import PostRow from './PostRow'

export default {
  title: 'PostRow',
  component: PostRow,
  args: {
    post: {
      title: 'Post a Blog to dev.to, Hashnode, and Medium',
      slug: 'post-a-blog-to-devto-hashnode-and-medium',
      publishDate: '3 Aug 2021',
      lastEdited: '3 Aug 2021',
    },
  },
}

export const BasicRow = (args, { argTypes }) => ({
  components: { PostRow },
  props: Object.keys(argTypes),
  template: '<PostRow :post="post" />',
})
