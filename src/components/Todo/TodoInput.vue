<template>
  <div class="d-flex">
    <input
      @change="todoTextChange"
      :value="todoText"
      class="d-flex form-control"
      type="text"
    />
    <button @click="addTodoI" class="btn btn-primary btn-add">Добавить</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todoText: "",
    };
  },

  methods: {
    ...mapActions(["addTodo"]),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },

    addTodoI() {
      if (this.todoText !== "") {
        this.addTodo({
          id: v1(),
          title: this.todoText,
        });
        this.todoText = "";
      } else {
        alert("Напишите задачу!");
      }
    },
  },
};
</script>

<style scoped>
.btn-add {
  margin-left: 10px;
}
</style>
