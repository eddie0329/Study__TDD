/* eslint-disable max-len */
<template>
  <div>
    <el-button v-if="isTodoDone" type="success" icon="el-icon-check" circle @click="$emit('click')"></el-button>
    <el-button v-else circle icon="el-icon-minus" @click="$emit('click')"></el-button>
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
};
</script>
