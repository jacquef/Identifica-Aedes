<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';
export default {
  name: 'App',
    components: {
    Header,
    Main
  },
}
</script>

<style>

  body {
    background-color: #1C1C1C;
    font-family: Quicksand, sans-serif;
    text-align: center;
  }

</style>
