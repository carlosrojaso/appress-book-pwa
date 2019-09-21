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
import {fireApp} from'../firebase.js'
import Notes from './Notes.vue'

const db = fireApp.database().ref();
const auth = fireApp.auth();

export default {
  name: 'Dashboard',
  components: {
    Notes
  },
  data: () => ({
    user: null,
    pages:[],
    newTitle: '',
    newContent: '',
    index: 0,
    dialog: false
  }),
  computed: {
  },
  mounted() {
    this.isUserLoggedIn()
    .then(
      (user) => {
        this.user = user;
        this.$root.$emit('USER_LOGGED',true);
        this.getUserNotes();
      }
    )
    .catch(
      () => {
        this.$router.push('/login');
      }
    )
    ;
  },
  methods:  {
    newNote () {
      this.dialog = true;
    },
    saveNote () {
      const newItem = {
        title: this.newTitle,
        content: this.newContent,
        userId: this.user.uid
      };
      this.pages.push(newItem);
      this.index = this.pages.length - 1;
      db.push(newItem);
      this.resetForm();
      this.closeModal();
    },
    closeModal () {
      this.dialog = false;
    },
    getUserNotes () {
      db.orderByChild('userId').equalTo(this.user.uid).once("value")
      .then(
        (notes) => {
          notes.forEach((note) => {
            this.pages.push({
              title: note.child('title').val(),
              content: note.child('content').val(),
              ref: note.ref
            })
          })
        }
      )
      .catch(
        (error) => {
          // eslint-disable-next-line
          console.log('something wrong happened!', error);
        }
      )
      ;
    },
    deleteNote (item) {
      let noteRef = this.pages[item].ref;
      if(noteRef) { noteRef.remove(); }
      this.pages.splice( item, 1);
      this.index = Math.max(this.index - 1, 0);
    },
    resetForm () {
      this.newTitle = '';
      this.newContent = '';
    },
    isUserLoggedIn () {
        return new Promise(
          (resolve, reject) => {
            auth.onAuthStateChanged(function(user) {
              if (user) {
                resolve(user);
              }
              else {
                reject(user);
              }
            })
          }
        )
        ;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>