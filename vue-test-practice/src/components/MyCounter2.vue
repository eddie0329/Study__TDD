<template>
  <div>
    <h2>{{ count }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <br />
    <br />
    <hr />
    <div>{{ items }}</div>
    <button @click="fetchItems">FETCH!!</button>
  </div>
</template>

<script>
import { INCREMENT, DECREMENT, FETCH_ITEMS } from '../store/modules/counter';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'MyCounter',
  computed: {
    ...mapState('counter', ['count', 'items']),
  },
  methods: {
    ...mapMutations('counter', { increment: INCREMENT, decrement: DECREMENT }),
    ...mapActions('counter', { fetchItems: FETCH_ITEMS }),
  },
};
</script>

<style></style>