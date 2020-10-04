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

  * {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0;
  }

  body {
    background-color: #1C1C1C;
    font-family: Quicksand, sans-serif;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

</style>
