<template>
  <div class="container">
    <h1>Kursmoment 4</h1><br>
    <p v-html="info.kmom"></p>
    <p v-html="info.redovisning"></p>    
<v-btn
      color="indigo"
      class="white--text"
      @click="edit"
    >
    Edit Text
 </v-btn>

  </div>
</template>
<script>
import requestService from '../requestService'
export default {
  name: 'Week1Component', 
  data() {
    return {
      weekNumber: 4,
      info:''
    }
  },
  async created() {
    this.info = await requestService.getWeekInfo(this.weekNumber);
  },
  methods: {
    edit() {
      window.location.href = "#/redovisning"
    }
  },
}
</script>

<style scoped>
.container {
    width: 70%;
}
.center {
    text-align: center;
}
</style>
