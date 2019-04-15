<template>
  <div clas="to-do-app">
    <h1>To Do App</h1>
    <form>
      <input id="input" placeholder="Enter your item here">
      <button v-on:click="addToDatabase()" class="add-button">Add</button>
    </form>
    <div>
      <ul> 
        <li v-for="item in list" :key="item" > {{ item }} </li>  
      </ul>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoApp',
  data() {
    return {
      list: ["A", "B"]
    };
  },
  methods: {
    addToDatabase (e) {
      e.preventDefault();
      const input = document.querySelector('#input');
      this.list.push(input.value);
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
