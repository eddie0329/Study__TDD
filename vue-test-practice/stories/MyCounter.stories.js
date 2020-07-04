import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import MyCounter from '../src/components/MyCounter.vue';

storiesOf(MyCounter, module)
  .addDecorator(withKnobs)
  .add('Default MyCounter', () => ({
    components: {
      MyCounter,
    },
    template: `
      <MyCounter/>
    `,
  }));
