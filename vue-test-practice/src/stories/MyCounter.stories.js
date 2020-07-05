import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import MyCounter from '../components/MyCounter.vue';

storiesOf('MyCounter', module)
  .addDecorator(withKnobs)
  .add('Default MyCounter', () => ({
    components: {
      MyCounter,
    },
    template: `
      <div>
        <MyCounter />
      </div>
    `,
  }));
