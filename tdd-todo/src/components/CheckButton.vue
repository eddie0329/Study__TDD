<template>
  <div>
    <el-button v-if="isTodoDone" type="success" icon="el-icon-check" circle @click="emitClick"></el-button>
    <el-button v-else circle icon="el-icon-minus" @click="emitClick"></el-button>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isTodoDone: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
};
</script>
