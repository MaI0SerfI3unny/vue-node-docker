<template>
  <div class="hello">
    <div class="logo-container">
         <img src="../assets/book.png">
      <h1 class="logo">Logo App</h1>
    </div>

    <ul>
    <li>{{auth}}</li>
    <li v-if="auth"><router-link to="/admin">Админ</router-link></li>
    <li>
      <router-link to="/">Главная</router-link>
    </li>
     <li>
      <router-link to="/about">Про нас</router-link>
    </li>
     <li>
      <router-link to="/contact">Контакты</router-link>
    </li>
      <div v-if="auth === null || auth === undefined" style="display:flex">
        <li>
      <router-link to="/register">Регистрация</router-link>
        </li>
        <li>
      <router-link to="/login">Логин</router-link>
        </li>
        </div>

      <li v-else class="quit_link" @click="quit">Выход</li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    logo: String,
    auth: String
  },
  methods:{
    quit(){
      localStorage.removeItem('email')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.logo-container{
  display:flex;
  align-items:center;
}

.logo-container img{
  width: 60px;
  margin-right: 10px;
}

.quit_link{
  cursor: pointer;
  transition:0.5s;
}

.quit_link:hover{
  color: black;
}

.hello{
  display: flex;
  align-items: center;
  padding:20px;
  background: rgb(163,24,24);
  background: linear-gradient(90deg, rgba(163,24,24,1) 0%, rgba(158,66,147,1) 100%);
  color:white;
}
.logo{
  font-size: 25px;
  text-transform:uppercase;
  font-weight: bold;
}
ul{
  width: 80%;
  justify-content: end;
  display:inline-flex;
  list-style-type: none;
}
 li{
    margin-right:15px;
  }

  a{
    font-size: 17px;
    text-transform: capitalize;
    transition:0.5s;
    color: white;
    text-decoration:white;
  }
  a:hover{
    color:black;
  }
</style>
