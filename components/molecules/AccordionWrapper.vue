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

  data: () => ({
    accordionsList: [],
  }),

  methods: {
    addToAccordionsList(accordion) {
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
