<template>
  <div class="container">
    <h1>Om Mig</h1>
    <p class="error" v-if="error"> {{ error }}</p>
    <div class="">
      <div class="">      
      <p class=""> {{info}}</p>
      </div>
    </div>
  </div>

</template>

<script>
import requestService from '../requestService'
// import axios from 'axios';
// const url = 'http://localhost:1337/'
export default {
  name: 'InfoComponent', 
  data() {
    return {
      info : {},
      error: '',       
    }
  },
  async created() {
    try {
      this.info = await requestService.getInfo();
    } catch (error) {
      this.error = error.message;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
