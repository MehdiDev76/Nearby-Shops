<template>
  <v-flex xs12 md6 offset-md3>
  <h1>Register</h1>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
    <v-text-field label="Password"
              v-model="password"
              :rules="passRules"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
              counter
              required
            ></v-text-field>
                    <p class="err">{{error}}</p>
    <v-btn @click="register" :disabled="!valid">Submit</v-btn>
  </v-form>
</v-flex>
</template>


<script>
import AuthentificationService from '@/services/AuthentificationService'
  export default {
    data: () => ({
      error: '',
      valid: true,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
      ],
      password: '',
      passRules: [
        (v) => !!v || 'Password is required',
      ],
      e1: true
    }),
    methods: {
      async register () {
        if (this.$refs.form.validate()) {
          const response = await AuthentificationService.register({
            email: this.email,
            password: this.password,
            repassword: this.repassword
          })
          if (response.data.error) {
            console.log(response.data.error);
            this.error = response.data.error
          } else if (response.data.success) {
            this.$router.push({name:'login'})
          }
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  .err{
    color: red
  }
</style>
