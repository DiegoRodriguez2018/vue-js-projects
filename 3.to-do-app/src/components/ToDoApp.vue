<template>
  <div clas="to-do-app">
    <h1>To Do App</h1>
    <form>
      <input id="input" placeholder="Enter your item here">
      <button v-on:click="addToDatabase($event)" class="add-button">Add</button>
    </form>
    <div class="list-container">
      <ul class='list'> 
        <li v-for="(item, index) in list" :key="index" > <span class="delete-button" :key="index" v-on:click="deleteFromDatabase(index,$event)">X</span>{{ item }} </li>  
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
      input.value = '';
    },
    deleteFromDatabase(index,e) {
      this.list.splice(index, 1);
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
}

li{
  list-style: none;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.delete-button{
  background: rgb(247, 5, 5);
  opacity: .8;
  font-size: 1rem;
  font-weight: 600;
  color:white;
  width:40px;
  height: 40px;
  border-radius: 25%;
  padding: 5px;
  margin: 1rem;
}

</style>
