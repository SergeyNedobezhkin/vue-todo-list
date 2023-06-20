import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
  },

  getters: {
    allTodos: (state) => {
      const res = localStorage.getItem("todoList");
      state.todoList = JSON.parse(res);
      return state.todoList;
    },
  },

  mutations: {
    addTodo(state, todo) {
      state.todoList.push(todo);
    },

    deleteTodo(state, id) {
      state.todoList = state.todoList.filter(
        (deleteTodo) => deleteTodo.id != id
      );
    },

    updateTodo(state, todo) {
      const index = state.todoList.findIndex((item) => item.id === todo.id);
      if (index !== -1) {
        state.todoList[index] = todo;
      }
    },
  },

  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
      localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
    },

    deleteTodo({ commit }, id) {
      commit("deleteTodo", id);
      localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
    },

    updateTodo({ commit }, todo) {
      commit("updateTodo", todo);
    },
  },
});
