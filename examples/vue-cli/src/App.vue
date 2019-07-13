<template>
  <div id="app">
    <!-- Component example goes here -->
  </div>
</template>

<script>
export default {
  name: 'app',
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
.image-wrapper{
  overflow:hidden;
  background:#eee;
}
.opti-image{
  transition: 0.4s ease opacity, 0.4s ease filter;
  opacity:1;
  filter: blur(0);
}

.opti-image-before-load{
  opacity:0;
  filter: blur(10px);
}
</style>
