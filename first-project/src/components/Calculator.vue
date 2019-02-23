<template>
  <div class="calculator-container">
    <h1>{{ title }}</h1>

    <div class="calculator">
      <div class="output">0</div>
      <div class="button">C</div>
      <div class="button">±</div>
      <div class="button">%</div>
      <div class="button accent">÷</div>
      <div class="button">7</div>
      <div class="button">8</div>
      <div class="button">9</div>
      <div class="button accent">×</div>
      <div class="button">4</div>
      <div class="button">5</div>
      <div class="button">6</div>
      <div class="button accent">−</div>
      <div class="button">1</div>
      <div class="button">2</div>
      <div class="button">3</div>
      <div class="button accent">+</div>
      <div class="button double">0</div>
      <div class="button">.</div>
      <div class="button submit">=</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      title: 'Calculator'
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

body {
  background: #3e4149;
  color: rgba(255,255,255,.2);
  font-size: 200%;
  height: 100vh;
  margin: 0;
  text-align: center;
}

.calculator {
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  height: 100%;
  margin: 0 auto;
  max-width: 375px;
}

.output {
  box-sizing: border-box;
  color: #42b983;
  font-size: 48pt;
  height: 25%;
  padding: 10% 5% 5%;
  text-align: right;
}

.button {
  box-sizing: border-box;
  cursor: pointer;
  float: left;
  height: 15%;
  padding: 5%;
  transition: .5s;
  width: 25%;
}
.button:hover {
  background: #444f59;
  color: #fff;
}
.double {
  width: 50%;
}
.accent:hover {
  color: #fff;
  background: #42b983;

}
.submit:hover {
  background: #42b983;
}
</style>
