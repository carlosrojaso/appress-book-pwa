<template>
  <div class="dashboard">
    <v-content>
      <v-alert
        v-model="showAlert"
        type="info"
        dismissible
      >
        {{alertContent}}
      </v-alert>
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
const messaging = fireApp.messaging();
messaging.usePublicVapidKey("BPqt_L3yi5MUsTJGGGKx-NB4ALPcefPZoAUlcKFxATfpYLlePB5YzMNVdwu10aMLbdwRcJYgTSPzOynlfa4tTAA");

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
    dialog: false,
    showAlert: false,
    alertContent: 'demo'
  }),
  created() {
    this.refreshingToken();
  },
  mounted() {
    db.once('value', (notes) => {
      notes.forEach((note) => {
        this.pages.push({
          title: note.child('title').val(),
          content: note.child('content').val(),
          ref: note.ref
        })
      })
    });

    this.retrieveMessaging();
  },
  methods:  {
    newNote () {
      this.dialog = true;
    },
    saveNote () {
      const newItem = {
        title: this.newTitle,
        content: this.newContent
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
    deleteNote (item) {
      let noteRef = this.pages[item].ref;
      if(noteRef) { noteRef.remove(); }
      this.pages.splice( item, 1);
      this.index = Math.max(this.index - 1, 0);
    },
    refreshingToken() {
      messaging.onTokenRefresh(() => {
        messaging.getToken().then((refreshedToken) => {
          console.log('Token refreshed.', refreshedToken);
        }).catch((err) => {
          console.log('Unable to retrieve refreshed token ', err);
          showToken('Unable to retrieve refreshed token ', err);
        });
      });
    },
    resetForm () {
      this.newTitle = '';
      this.newContent = '';
    },
    retrieveMessaging () {
      // Retrieve Firebase Messaging object.
      messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');

      messaging.getToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log("token:" + currentToken );
        } else {
          // Show permission request.
          console.log('No Instance ID token available. Request permission to generate one.');
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });

      //recibiendo mensaje en primer plano.
      messaging.onMessage((payload) => {
          console.log("Message received. ", payload);
          this.showAlert = true;
          this.alertContent = payload.notification.body;
        });
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>