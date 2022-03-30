<template>
  <div>
    <Header/>
    <div class="main-content">
    <div class="blog">
      <div 
      :style="{ 
        backgroundImage: 'url(' + require('@/assets/banner.jpeg') + ')' 
        }" 
      class="banner-container">
      </div>
      <div class="blog-container">
        <h2>Регистрация</h2>
        <div class="form_login">
            <p>Email</p>
            <input v-model="email" type="name" placeholder="Type here your email...">
             <p>Password</p>
            <input v-model="password" type="password" placeholder="Type here your password...">
            <p>Repeat password</p>
            <input v-model="repeatPass" type="password" placeholder="Repeat password...">
            <br>
            <button @click="sendLogin">Login</button>
        </div>
      </div>
    </div>
      <Sidebar/>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue'
import Footer from '../../components/Footer.vue'
import axios from "axios"

export default {
  name: 'RegisterComponent',
  components: {
    Header,
    Sidebar,
    Footer
  },
  data() {
    return {
        email:"",
        repeatPass:"",
        password:""
  }
  },
    mounted() {
     if(localStorage.email){this.$router.push("/");}
    },
  methods:{
      sendLogin(){
          if(
              this.email.length !== 0 && 
              this.password.length !== 0 && 
              this.repeatPass.length !== 0 &&
              this.repeatPass === this.password){
               axios.post('/api/auth/register',
               {
                   email: this.email,
                   password: this.password 
               })
                .then((response) => {
                    if(response.status === 201){
                        this.email = ''
                        this.password = ''
                        this.repeatPass = ''
                        this.$router.push("/login"); 
                    }
                })
          }
      }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
</style>
