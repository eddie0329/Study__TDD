<template>
  <el-button @click="$emit('click')" type="primary">
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'PrimaryButton',
};
</script>
