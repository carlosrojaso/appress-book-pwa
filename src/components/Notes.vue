<template>
  <div class="notes">
    <v-card v-for="(page, index) in pages" :key="index">  
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{page.title}} tit + {{index}}</h3>
          <div> {{page.content}} tit </div>
        </div>
      </v-card-title>
    </v-card>
    <v-btn fab dark color="indigo" @click="newNote()">
      <v-icon dark>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  props: ['pages'],
  methods: {
    newNote () {
    this.$emit('new-note')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
