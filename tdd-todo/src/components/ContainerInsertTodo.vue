<template>
  <form @submit.prevent="createTodo">
    <el-row>
      <el-col :span="16">
        <el-input v-model="inputTodo" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <primary-button>ADD</primary-button>
      </el-col>
    </el-row>
  </form>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import PrimaryButton from './PrimaryButton.vue';
import { SET_TODO_INPUT, CREATE_TODO } from '../store/modules/todos';

export default {
  name: 'ContainerInsertTodo',
  components: {
    PrimaryButton,
  },
  computed: {
    ...mapState('todos', ['todoInput']),
    inputTodo: {
      get() {
        return this.todoInput;
      },
      set(value) {
        this.setTodoInput(value);
      },
    },
  },
  methods: {
    ...mapMutations('todos', { setTodoInput: SET_TODO_INPUT }),
    ...mapActions('todos', { createTodo: CREATE_TODO }),
  },
};
</script>
