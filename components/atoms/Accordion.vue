<template>
  <li class="accordion">
    <h4
      :id="`accordion-${_uid}`"
      :aria-controls="_uid"
      :aria-selected="panelIsVisible"
      class="accordion-title"
      :class="{ 'accordion-expanded': panelIsVisible }"
      role="tab"
      tabindex="0"
      @click="handleAccordion()"
    >
      <span v-text="accordionTitleIcon" />
      <span><slot name="title" /></span>
    </h4>
    <div
      :aria-labelledby="_uid"
      role="tabpanel"
      tabindex="0"
      v-show="panelIsVisible"
    >
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
      this?.$router?.push(`#accordion-${this._uid}`)
    },
  },
}
</script>

<style scoped>
.accordion {
  cursor: pointer;
}
</style>
