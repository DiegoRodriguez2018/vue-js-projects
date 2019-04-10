<template>
  <div id="example-1">
    <button v-on:click="addOne">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    addOne () {
      this.counter += 1;
    }
  }
};
</script>
