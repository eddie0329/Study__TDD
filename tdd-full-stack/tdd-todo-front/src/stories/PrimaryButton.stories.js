/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import PrimaryButton from '../components/PrimaryButton.vue';

storiesOf('PrimaryButton', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: {
      PrimaryButton,
    },
    template: `
      <div>
        <primary-button>Default</primary-button>
      </div>
    `,
  }))
  .add('Add Button', () => ({
    components: {
      PrimaryButton,
    },
    template: `
      <div>
        <primary-button>Add</primary-button>
      </div>
    `,
  }));
