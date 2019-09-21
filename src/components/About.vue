<template>
  <div class="flex-container">
    <div class="row">
    <v-content>
      <br/><b>Building PWAs with VueJS.</b><br/><br/>
      repo:<br/><br/> https://github.com/carlosrojaso/appress-book-pwa<br/> 
      2019
    </v-content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
    height: 100%;
}
body {
    margin: 0;
}

.flex-container {
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}

.row {
    width: 80%;
}
.flex-item {
    width: 100%;
    text-align: center;
}
</style>
