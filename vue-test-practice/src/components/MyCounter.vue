<template>
  <div>
    <h2 data-cy="countDisplay">{{ count }}</h2>
    <button @click="onClickIncrease" data-cy="plusButton">+</button>
    <button @click="onClickDecrease" data-cy="minusButton">-</button>
  </div>
</template>

<script>
export default {
  name: 'MyCounter',
  created() {
    this.testCreated = 'TEST_CREATED';
  },
  props: {
    testProps: {
      type: String,
    },
  },
  data() {
    return {
      count: 0,
      tempText: 'HELLO',
      testCreated: '',
    };
  },
  methods: {
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
