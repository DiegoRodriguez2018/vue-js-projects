<template>
  <div clas="to-do-app">
    <h1>To Do App</h1>
    <form>
      <input id="input" placeholder="Enter your item here">
      <button v-on:click="addToDatabase($event)" class="add-button">Add</button>
    </form>
    <div class="list-container">
      <ul class='list'> 
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
      list: []
    };
  },
  methods: {
    addToDatabase (e) {
      e.stopPropagation();
      e.preventDefault();
      const input = document.querySelector('#input');
      this.list.push(input.value);
      console.log(input.value);
      input.value = '';
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
a {
  color: #42b983;
}

.list-container{
  display: flex;
  justify-content: center;
}
.list{
  min-width: 300px;
  max-width: 80vw;
  text-align: left;
  background: grey;
}
</style>
