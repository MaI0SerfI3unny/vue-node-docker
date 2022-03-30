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
        <h2>Логин</h2>
        <div class="form_login">
            <p>Email</p>
            <input v-model="email" type="name" placeholder="Type here your email...">
             <p>Password</p>
            <input v-model="password" type="password" placeholder="Type here your password...">
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
import axios from 'axios'

export default {
  name: 'LoginComponent',
  components: {
    Header,
    Sidebar,
    Footer
  },
    data() {
    return {
        email:"",
        password:"",
    }
  },
  mounted() {
     if(localStorage.email){this.$router.push("/");}
    },
    methods:{
      sendLogin(){
          if(
              this.email.length !== 0 && 
              this.password.length !== 0){
               axios.post('/api/auth/login',
               {
                   email: this.email,
                   password: this.password 
               })
                .then((response) => {
                    console.log(response)
                    if(response.status === 200){
                        localStorage.email = this.email
                        this.email = ""
                        this.password = ""
                        this.$router.push('/')
                    }else{
                          this.email = ""
                            this.password = ""
                    }
                })
          }
      }
  }
}
</script>

<style>
*{
  outline: none;
  margin:0;
  padding:0;
}

.form_login input{
    margin-top:5px;
    margin-bottom: 15px;
    width: 320px;
    height: 30px;
    border: 1px solid grey;
    padding-left: 10px;
    border-radius: 5px;
}
.form_login button{
    color: white;
    cursor:pointer;
    background: green;
    width: 120px;
    height: 30px;
    border:none;
    border-radius: 5px;
    transition: 0.5s;
}

.form_login button:hover{
    background: black;
}
</style>