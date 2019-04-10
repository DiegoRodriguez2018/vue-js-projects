<template>
  <div clas="to-do-app">
    <h1 v-on:click="addToDatabase()">To Do App</h1>
    <form>
      <input placeholder="Enter your item here">
      <button v-on:click="addToDatabase()" class="add-button">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ToDoApp',
  methods: {
    addToDatabase () {
      console.log('testing');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
