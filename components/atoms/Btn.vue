<template>
  <component
    :is="htmlTag"
    :class="classes"
    :disabled="disabled"
    :href="href"
    :tabindex="tabIndex"
    :target="target"
    :to="to"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Button',

  props: {
    appearance: {
      default: 'button',
      type: String,
      validator: (style) => ['button', 'link'].includes(style),
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    href: {
      default: '',
      type: String,
    },
    target: {
      default: '_self',
      type: String,
    },
    to: {
      default: '',
      type: String,
    },
  },

  computed: {
    classes() {
      if (this.appearance === 'link') return ['link']

      return ['btn']
    },

    htmlTag() {
      if (this.href) return 'a'
      if (this.to) return 'NuxtLink'

      return 'button'
    },

    tabIndex() {
      return this.disabled ? -1 : null
    },
  },
}
</script>
