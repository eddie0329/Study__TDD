<template>
  <div>
    <el-button v-if="isTodoDone" type="success" icon="el-icon-check" circle></el-button>
    <el-button v-else circle icon="el-icon-minus"></el-button>
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
