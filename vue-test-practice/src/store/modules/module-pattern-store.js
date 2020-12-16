export const getDefaultState = () => ({
  todos: [],
  name: 'eddie',
});

// mutations type
export const SET_TODOS = 'SET_TODOS';

// actions type
export const GET_TODOS = 'GET_TODOS';

export const createModulePatternStore = ({ fetchTodos }) => {
  return {
    state: getDefaultState(),
    getters: {
      nameUpperCase: state => state.name.toUpperCase(),
    },
    mutations: {
      [SET_TODOS](state, newTodos) {
        state.todos = newTodos;
      },
    },
    actions: {
      async [GET_TODOS]({ commit }) {
        const response = await fetchTodos();
        commit('SET_TODOS', response.data);
      },
    },
  };
};
