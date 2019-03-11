<template>
  <main> 
    <h1> Abecedarium Carousel </h1>
      <Carousel :cards = "['A','B', 'C', 'D']" />
  </main>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  name: 'Home',
  components: { Carousel }
}
</script>

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