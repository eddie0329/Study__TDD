/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs';
import RoundPrimaryButton from '../components/RoundPrimaryButton.vue';

storiesOf('RoundPrimaryButton', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: {
      RoundPrimaryButton,
    },
    template: `
      <div>
        <round-primary-button>Default</round-primary-button>
      </div>
    `
  }));
