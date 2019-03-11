<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>
    <a href="/#/calculator"> To Calculator </a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'My first vue App',
      subtitle: 'Is a calculator!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
