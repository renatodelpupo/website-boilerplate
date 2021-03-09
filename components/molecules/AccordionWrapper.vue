<template>
  <ul class="accordion-wrapper" role="tablist">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'AccordionWrapper',

  provide() {
    return {
      addToAccordionsList: this.addToAccordionsList,
      closeAccordionsList: this.closeAccordionsList,
      removeFromAccordionsList: this.removeFromAccordionsList,
    }
  },

  props: {
    mountFirstOpened: {
      default: true,
      type: Boolean,
    },
  },

  data: () => ({
    accordionsList: [],
  }),

  methods: {
    addToAccordionsList(accordion) {
      if (this.mountFirstOpened && this.accordionsList.length < 1)
        this.$set(accordion.$data, 'panelIsVisible', true)

      this.accordionsList.push(accordion)
    },

    closeAccordionsList() {
      this.accordionsList.forEach((accordion) => accordion.closePanel())
    },

    removeFromAccordionsList(accordion) {
      const index = this.accordionsList.findIndex(
        (i) => i._uid === accordion._uid
      )
      this.accordionsList.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.accordion-wrapper {
  list-style: none;
}
</style>
