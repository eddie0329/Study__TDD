<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="onClickIncrease">+</button>
    <button @click="onClickDecrease">-</button>
  </div>
</template>

<script>
export default {
  name: "MyCounter",
  created() {
    this.testCreated = "TEST_CREATED";
  },
  data() {
    return {
      count: 0,
      tempText: "HELLO",
      testCreated: ""
    };
  },
  props: {
    testProps: {
      type: String
    }
  },
  methods: {
    onClickIncrease() {
      this.count += 1;
    },
    onClickDecrease() {
      this.count -= 1;
    }
  },
  computed: {
    lowercaseTempText() {
      return this.tempText.toLowerCase();
    }
  }
};
</script>

<style></style>
