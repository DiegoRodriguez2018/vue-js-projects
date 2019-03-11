
<template>
  <div class="card-container">
    <div class="card">
      <h2 class="letter"> {{letter}} </h2>
    </div>
  </div>
</template>

<script>
export default {
  name:'Card',
  props: {
    letter: String
  }
}
</script>

<style> 

.card-container {
  display: flex;
  justify-content: center;
}

.card {
  width: 50vh;
  height: 60vh;
  border: 2px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.letter{
  font-family:fantasy;
  font-size: 20vh;
}

</style>