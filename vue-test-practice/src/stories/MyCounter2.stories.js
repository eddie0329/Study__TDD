import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import MyCounter2 from '../components/MyCounter2';
import Vuex from 'vuex';

// const counter = {
//   namespaced: true,
//   state: {
//     count: 0,
//   },
// };

storiesOf('MyCounter2', module)
  .addDecorator(withKnobs)
  .add('Default MyCounter2', () => ({
    components: {
      MyCounter2,
    },
    template: `
      <div>
        <MyCounter2 />
      </div>
    `,
    store: new Vuex.Store({
      modules: {
        counter: {
          namespaced: true,
          state: { count: 0 },
        },
      },
    }),
  }));
