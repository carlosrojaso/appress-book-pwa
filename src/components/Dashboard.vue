<template>
  <div class="dashboard">
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
  </div>
</template>

<script>
import Notes from './Notes.vue'
export default {
  name: 'Dashboard',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>