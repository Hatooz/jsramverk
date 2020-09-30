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
      @click="loginUser"
    >
      Login
    </v-btn>
  </v-form>
</div>

<div v-if="success === 200">
  <h2>Login Successful!</h2>
</div>

  </div>
</template>

<script>
import requestService from '../requestService'
export default {
  name: 'LoginComponent', 
  data() {
    return {
      email: '',
      password: '',
      success: ''
    }
  },
  methods: {
      async loginUser() {
          this.success = await requestService.loginUser(this.email, this.password)
      }
  },
}
</script>
