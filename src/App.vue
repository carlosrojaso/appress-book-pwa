<template>
  <v-app>
    <v-toolbar
    color="light-blue"
    dark
    app>
      <v-toolbar-title>
        <router-link to="/">VueNoteApp</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
        to="/about"
        flat
        >About</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a, a:visited {
  text-decoration: none;
  color: white;
}
</style>
