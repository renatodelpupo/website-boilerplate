import Carousel from '../components/atoms/Carousel.vue'

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Carousel },
  template: `<Carousel v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
  images: [
    {
      alt: 'Slide A',
      src: '',
    },
    {
      alt: 'Slide B',
      src: '',
    },
    {
      alt: 'Slide C',
      src: '',
    },
  ],
}
