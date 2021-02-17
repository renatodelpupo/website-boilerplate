<template>
  <li class="accordion">
    <h4
      :id="`accordion-${_uid}`"
      :class="{ 'accordion-expanded': panelIsVisible }"
      @click="handleAccordion()"
    >
      <span v-text="accordionTitleIcon" />
      <span><slot name="title" /></span>
    </h4>
    <div v-show="panelIsVisible">
      <slot name="panel" />
    </div>
  </li>
</template>

<script>
export default {
  name: 'Accordion',

  inject: [
    'addToAccordionsList',
    'closeAccordionsList',
    'removeFromAccordionsList',
  ],

  data: () => ({
    panelIsVisible: false,
  }),

  computed: {
    accordionTitleIcon() {
      return this.panelIsVisible ? '-' : '+'
    },
  },

  beforeMount() {
    this.addToAccordionsList(this)
  },

  beforeDestroy() {
    this.removeFromAccordionsList(this)
  },

  methods: {
    closePanel() {
      this.panelIsVisible = false
    },

    handleAccordion() {
      if (this.panelIsVisible) {
        this.closePanel()
      } else {
        this.closeAccordionsList()
        this.openPanel()
      }
    },

    openPanel() {
      this.panelIsVisible = true
      this.$router.push(`#accordion-${this._uid}`)
    },
  },
}
</script>
