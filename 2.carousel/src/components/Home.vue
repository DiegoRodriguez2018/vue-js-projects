<template>
  <main> 
    <h1> Abecedarium Carousel </h1>
      <Carousel :cards = cards />
  </main>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
  name: 'Home',
  components: { Carousel },
  data() {
    return {
      cards: this.getAbecedarium()
    };
  },
  methods: {
    getAbecedarium(){
      const abecedarium = [];
      for(let letter=65;letter<91;letter++){
        let char = String.fromCharCode(letter);
        abecedarium.push(char);
      }
      return abecedarium;
    }
  }
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