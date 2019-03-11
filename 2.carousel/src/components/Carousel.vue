<template>
  <main> 
    <div class="carousel-container">
      <div class="button"> previous </div>
      <Card :letter= currentElement />
      <div class="button"> next </div>
    </div>
  </main>
</template>

<script>
import Card from '@/components/Card'
export default {
  name: 'Carousel',
  props: {cards: Array},
  components: { Card },
  data() {
    return {
      currentElementIndex: 0
    };
  },
  computed: {
    currentElement() {
      return this.cards[this.currentElementIndex];
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

.carousel-container{
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.button {
  margin: 20px;
  padding: 10px;
  border-radius: 2px;
  border: 1px grey solid;
}

.button:hover{
  background: darkslategrey;
  color:white;
}

</style>