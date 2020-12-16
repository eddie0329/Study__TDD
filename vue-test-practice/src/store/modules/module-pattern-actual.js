import { fetchData } from '../../api/todo-service';
import { createModulePatternStore } from './module-pattern-store';
import _cloneDeep from 'lodash/cloneDeep';

export default {
  namespaced: true,
  ...createModulePatternStore({ fetchTodos: fetchData, _cloneDeep, fetchData }),
};
