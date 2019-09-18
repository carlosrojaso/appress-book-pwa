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
      <v-toolbar-items>
        <v-btn
        v-if="logged"
        @click="loggedOut()"
        flat
        >Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import {fireApp} from'./firebase.js'
const auth = fireApp.auth();

export default {
  name: 'app',
  data: () => ({
    user: null,
    logged: false,
  }),
  mounted() {
    this.isUserLoggedIn()
    .then((user)=>{
      this.user = user;
      this.logged = true;
    });
  }, 
  methods: {
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
    loggedOut () {
      auth.signOut()
      .then(()=>{this.$router.push('/login')})
      .catch((error)=> {
        // eslint-disable-next-line 
        console.log('error', error)
      })
      ;
    },
  }
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
