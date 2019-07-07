<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title >
        <span>VueNoteApp</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>About</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <Notes :pages="pages" @new-note="newNote"/>
    </v-content>
  </v-app>
</template>

<script>
import Notes from './components/Notes.vue'

export default {
  name: 'app',
  components: {
    Notes
  },
  data: () => ({
    pages:[],
    index:0
  }),
  methods:  {
    newNote () {
      this.pages.push({
        title: 'Title',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et elit id purus accumsan lacinia. Suspendisse nulla urna, facilisis ac tincidunt in, accumsan sit amet enim. Donec a ante dolor'
      });
    },
    saveNote () {

    },
    deleteNote () {

    }
  }
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
</style>
