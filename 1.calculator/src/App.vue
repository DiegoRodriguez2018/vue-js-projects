<template>
  <div id="app">
    <nav class="navigation-bar">
        <img src="./assets/logo.png">
        <a class="nav-button" href="#/"> Home </a>
        <a class="nav-button" href="#/calculator"> Calculator </a>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-button {
  text-decoration: none;
  margin: 20px;
  padding: 10px;
  border-radius: 2px;
  border: 1px #42b983 solid;
  color: #2c3e50;
}

.nav-button:hover{
  background: #42b983;
  color:white;
}

.navigation-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation-bar img{
  width: 4rem;
}
</style>
