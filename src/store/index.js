import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    allTodos: (state) => {
      const res = localStorage.getItem("todos");
      state.todos = JSON.parse(res);
      return state.todos;
    },
  },

  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    },

    deleteTodo({ commit }, id) {
      commit("delete_todo", id);
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    },

    updateTodo({ commit }, todo) {
      commit("update_todo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    },
  },

  modules: {},
});
