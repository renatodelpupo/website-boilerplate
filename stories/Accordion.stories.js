import Accordion from '../components/atoms/Accordion.vue'
import AccordionWrapper from '../components/molecules/AccordionWrapper.vue'

export default {
  title: 'Accordion',
  component: Accordion,
}

const Template = () => ({
  components: { Accordion, AccordionWrapper },
  template: `
    <AccordionWrapper>
      <Accordion>
        <template #title>First accordion</template>
        <template #panel>First accordion content.</template>
      </Accordion>
      <Accordion>
        <template #title>Second accordion</template>
        <template #panel>Second accordion content.</template>
      </Accordion>
    </AccordionWrapper>
  `,
})

export const Default = Template.bind({})
