import Btn from '../components/atoms/Btn.vue'

export default {
  title: 'Button',
  component: Btn,
  argTypes: {
    appearance: {
      control: {
        type: 'select',
        options: ['button', 'link'],
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Btn },
  template: '<btn v-bind="$props">Call to action</btn>',
})

export const Default = Template.bind({})
Default.args = {}

export const ClickableButton = Template.bind({})
ClickableButton.args = {
  appearance: 'button',
  disabled: false,
}

export const HrefButton = Template.bind({})
HrefButton.args = {
  appearance: 'button',
  disabled: false,
  href: '#',
  target: '_blank',
}

export const NuxtLinkButton = Template.bind({})
NuxtLinkButton.args = {
  appearance: 'button',
  disabled: false,
  to: '#',
}

export const HrefLink = Template.bind({})
HrefLink.args = {
  appearance: 'link',
  disabled: false,
  href: '#',
  target: '_blank',
}

export const NuxtLink = Template.bind({})
NuxtLink.args = {
  appearance: 'link',
  disabled: false,
  to: '#',
}
