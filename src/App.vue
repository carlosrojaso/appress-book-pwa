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
      <Notes :pages="pages" @new-note="newNote" @delete-note="deleteNote"/>
    </v-content>
    <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>
        <span class="headline">New Note</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm12 md12>
              <v-text-field v-model="newTitle" value="" label="Title*" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-textarea v-model="newContent" value="" label="Content"></v-textarea>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeModal()">Close</v-btn>
        <v-btn color="blue darken-1" flat @click="saveNote()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
    newTitle: '',
    newContent: '',
    index: 0,
    dialog: false
  }),
  methods:  {
    newNote () {
      this.dialog = true;
    },
    saveNote () {
      this.pages.push({
        title: this.newTitle,
        content: this.newContent
      });
      this.index = this.pages.length - 1;
      this.resetForm();
      this.closeModal();
    },
    closeModal () {
      this.dialog = false;
    },
    deleteNote (item) {
      this.pages.splice( item, 1);
      this.index = Math.max(this.index - 1, 0);
    },
    resetForm () {
      this.newTitle = '';
      this.newContent = '';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
