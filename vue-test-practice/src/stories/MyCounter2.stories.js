import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import MyCounter2 from '../components/MyCounter2';
import { createMockStore } from './utils';

// const counter = {
//   namespaced: true,
//   state: {
//     count: 0,
//   },
// };

storiesOf('MyCounter2', module)
  .addDecorator(withKnobs)
  .add('Default MyCounter2', () => ({
    props: {
      text: {
        default: text('Text', 'HELLO'),
      },
    },
    components: {
      MyCounter2,
    },
    template: `
      <div>
        <div>{{ text }}</div>
        <MyCounter2 />
      </div>
    `,
    store: createMockStore(['counter'], [{ count: 0 }]),
  }));
