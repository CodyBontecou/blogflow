import ServiceToggle from './ServiceToggle'

export default {
  title: 'ServiceToggle',
  component: ServiceToggle,
  args: {
    service: {
      name: 'Medium',
      image: {
        src: 'https://cdn.mos.cms.futurecdn.net/uazw6gFQuEC29mxMM55Tpb.jpg',
        alt: 'Medium Logo',
      },
    },
    disabled: true,
  },
}

export const Default = (_args, { argTypes }) => ({
  components: { ServiceToggle },
  props: Object.keys(argTypes),
  template: '<ServiceToggle :service="service" />',
})
