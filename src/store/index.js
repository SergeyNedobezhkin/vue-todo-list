import Vue from "vue";
import Vuex from "vuex";
import StorageApi from "@/services/storage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
  },

  mutations: {
    updateTodoList(state, todoList) {
      state.todoList = todoList;
    },
  },

  actions: {
    getTodoList({ commit }) {
      let todoList = StorageApi.getTodoList();
      todoList = todoList ? JSON.parse(todoList) : null;

      if (todoList) {
        commit("updateTodoList", todoList);
      }

      return todoList;
    },

    addTodo({ state, commit }, todo) {
      const newTodoList = [...state.todoList, todo];
      StorageApi.setTodoList(JSON.stringify(newTodoList));
      commit("updateTodoList", newTodoList);
    },

    editTodo({ state, commit }, todo) {
      const index = state.todoList.findIndex((item) => item.id === todo.id);

      const newTodoList = [...state.todoList];
      newTodoList[index] = todo;

      StorageApi.setTodoList(JSON.stringify(newTodoList));
      commit("updateTodoList", newTodoList);
    },

    deleteTodo({ state, commit }, id) {
      const newTodoList = state.todoList.filter((item) => item.id != id);
      StorageApi.setTodoList(JSON.stringify(newTodoList));
      commit("updateTodoList", newTodoList);
    },

    clearTodoList({ commit }) {
      StorageApi.setTodoList(JSON.stringify([]));
      commit("updateTodoList", []);
    },
  },
});
