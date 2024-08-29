export default class TodoItem {
  constructor(value) {
    this.id = Date.now();
    this.value = value;
    this.completed = false;
  }

  finish() {
    this.completed = true;
  }
}
