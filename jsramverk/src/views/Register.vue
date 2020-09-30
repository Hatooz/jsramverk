<template>
<div>
  <div v-if="success !== 200">
  <v-form
    ref="form"    
  >

   <v-text-field
      v-model="email"      
      label="E-mail"
      :type="'email'"
      required
    ></v-text-field>
    
    <v-text-field
      v-model="password"     
      label="Password"
      :type="'password'"
      required
    ></v-text-field>
 

    <v-btn
      color="indigo"
      class="white--text"
      @click="registerUser"
    >
      Register!
    </v-btn>
  </v-form>
  </div>
  <div v-if="success === 200">
    <h2>User Created!</h2>
  </div>

  </div>
</template>

<script>
import requestService from '../requestService'
export default {
  name: 'RegisterComponent', 
  data() {
    return {
      email: '',
      password: '',
      success: ''
    }
  },
  async created() {
    try {
      this.info = await requestService.getInfo();
    } catch (error) {
      this.error = error.message;
    }
  },
  methods: {
      async registerUser() {
          this.success = await requestService.registerUser(this.email, this.password)
      }
  },
}
</script>
