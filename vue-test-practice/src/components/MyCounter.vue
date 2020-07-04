<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="onClickIncrease">+</button>
    <button @click="onClickDecrease">-</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { FETCH_ITEMS } from '@/store/modules/counter';

export default {
  name: 'MyCounter',
  created() {
    this.testCreated = 'TEST_CREATED';
  },
  data() {
    return {
      count: 0,
      tempText: 'HELLO',
      testCreated: '',
    };
  },
  props: {
    testProps: {
      type: String,
    },
  },
  methods: {
    ...mapActions('counter', { fetchItems: FETCH_ITEMS }),
    onClickIncrease() {
      this.count += 1;
    },
    onClickDecrease() {
      this.count -= 1;
    },
  },
  computed: {
    lowercaseTempText() {
      return this.tempText.toLowerCase();
    },
  },
};
</script>

<style></style>
