<template>
    <div >
    <Header :auth="email"/>
    <div class="main-content">
    <div class="blog">
      <div 
      :style="{ 
        backgroundImage: 'url(' + require('@/assets/banner.jpeg') + ')' 
        }" 
      class="banner-container">
      </div>
      <div class="blog-container">
        <h2>Контакты</h2>
     
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

export default {
  name: 'ContactComponent',
  components: {
    Header,
    Sidebar,
    Footer
  },
    data() {
      return {
        email: null
  }
  },
    mounted() {
     if(localStorage.email) this.email = localStorage.email;
  },
}
</script>

<style>
  *{
    margin:0;
    font-family: 'Oswald', sans-serif;
    padding:0;
  }
  .wrapper {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  }
  .main-content{
    display: flex;
    padding:20px;
    min-height: 1000px;
  }
  .banner-container{
    width: 100%;
    height: 400px;
    overflow: hidden;
    background-size: 100%;
    background-attachment: fixed;
  }
  .blog{
    width: 80%;
    padding:10px;
  }
  .sidebar{
    width: 20%;
    padding:10px;
  }

  .blog-container  h2{
    margin-top: 20px;
    margin-bottom: 25px;
      font-size: 30px;
      font-weight: bold;
    }
</style>
