<template>
  <div>
    <div class="d-flex my-3 justify-content-between align-items-center">
      <h3 v-if="!editing">{{ todo.title }}</h3>

      <div v-else class="d-flex justify-content-between align-items-center col">
        <input
          v-bind:value="todoText"
          @change="todoTextChange"
          type="text"
          class="col-7 form-control"
        />
      </div>
      <div class="row align-items-center btn-todo">
        <button @click="updateTodoI(todo)" class="btn btn-primary">
          {{ editing ? "Обновить" : "Редактировать" }}
        </button>
        <button @click="deleteTodo(todo.id)" class="btn btn-danger">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todo: {},
  },

  data() {
    return {
      todoText: "",
      editing: false,
    };
  },

  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),

    todoTextChange(e) {
      this.todoText = e.target.value;
    },

    updateTodoI(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        // this.todoText = localStorage.getItem("todos");
        this.todoText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
      }
    },
  },
};
</script>

<style scoped leng="scss">
h3 {
  text-transform: capitalize;
}
.btn-todo {
  margin-right: 0px;
  width: 150px;
}
.btn-primary {
  margin-bottom: 2px;
}
.form-control {
  width: 95%;
}

