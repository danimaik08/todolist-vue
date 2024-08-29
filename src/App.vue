<script setup>
import { reactive } from 'vue';

import TodoItem from './TodoItem';

const input = reactive({ value: '' });
const todos = reactive({ value: [] });

const trimInput = () => {
  input.value = input.value.trim();
};

const tryToAddTodoItem = () => {
  if (input.value) {
    todos.value.push(new TodoItem(input.value));
  }
};

const clearInput = () => {
  input.value = '';
};

const submit = () => {
  trimInput();
  tryToAddTodoItem();
  clearInput();
};
</script>

<template>
  <input v-model="input.value" />
  <button @click="submit()">submit</button>
  <div
    v-for="todoItem in todos.value"
    :key="todoItem.id"
    :class="{ completed: todoItem.completed }"
    @click="todoItem.finish()"
  >
    {{ todoItem.value }}
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
