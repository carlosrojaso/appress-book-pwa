<template>
  <div class="notes">
    <v-card v-for="(page, index) in pages" :key="index">  
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{page.title}}</h3>
          <div>{{page.content}}</div>
        </div>
      </v-card-title>
    </v-card>
    <v-btn 
      fab
      dark
      absolute
      right
      color="indigo"
      class="floatButton"
      @click="newNote()">
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
    this.$emit('new-note');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.floatButton {
  margin: 10px;
}
</style>
