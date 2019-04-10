<template>
  <nav class="navigation-bar">
    <img src="../assets/logo.png">
    <a class="nav-button" href="#/">Home</a>
    <a class="nav-button" href="#/app">To Do App</a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-button {
  text-decoration: none;
  margin: 20px;
  padding: 10px;
  border-radius: 2px;
  border: 1px #42b983 solid;
  color: #2c3e50;
}

.nav-button:hover {
  background: #42b983;
  color: white;
}

.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-bar img {
  width: 4rem;
}
</style>
