<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header';
import Main from './components/Main';
import axios from 'axios';
export default {
  name: 'App',
    components: {
    Header,
    Main
  },
  analisarImagem: function() {
            console.log(axios)
            //.post('https://prhwuofqm2.execute-api.us-east-1.amazonaws.com/dev/api', image.src)
        }
  
}
</script>

<style>

  body {
    background-color: #1C1C1C;
    font-family: Quicksand, sans-serif;
    text-align: center;
  }

</style>
