/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import DeleteButton from '../components/DeleteButton.vue';

storiesOf('DeleteButton', module).add('Default', () => ({
  components: {
    DeleteButton,
  },
  template: `
      <div>
        <DeleteButton />
      </div>
    `,
}));
