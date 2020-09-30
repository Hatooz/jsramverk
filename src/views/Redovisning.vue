<template>
<div>
  <div v-if="success !== 201">
  <v-form
    ref="form"    
  >
   <v-text-field
      v-model="kmom"      
      label="Kmom"
      :type="'textarea'"
      required
    ></v-text-field>
    
   <v-textarea
          v-model="redovisning"
          label="Redovisningstext"          
          auto-grow
          hint="Write your report here"
        ></v-textarea>
    <v-btn
     
      color="indigo"
      class="white--text"
      @click="postRedovisning"
    >
      Send
    </v-btn>
  </v-form>  
  </div>

  <div v-if="success === 201">
    <h2>Text successfully submited!</h2>
  </div>
  
  </div>
</template>

<script>
import requestService from '../requestService'
export default {
  name: 'RedovisningComponent', 
  data() {
    return {
      kmom:'',
      redovisning: '',
      success: ''     
    }
  },
  methods: {
      async postRedovisning() {
         this.success = await requestService.postRedovisning(this.kmom, this.redovisning);
      }
  },
}
</script>
