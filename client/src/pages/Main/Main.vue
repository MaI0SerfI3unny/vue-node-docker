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
        <h2>Последние новости</h2>
        <div class="wrapper">
        
          <div v-for="(item, index) in  paginatedData" :key="index" class="item_blog">
            <router-link :to="'/page/'+item._id">
              <img src="../../assets/item.png">
              <h3>{{item.title}}</h3>
              <p>{{item.description}}</p>
            </router-link>
          </div>

        </div>
  
        <button @click="prevPage" :disabled="pageNumber==0">Previous</button>
        <button @click="nextPage" :disabled="pageNumber >= pageCount -1">Next</button>
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
  name: 'MainComponent',
  components: {
    Header,
    Sidebar,
    Footer
  },
  data() {
      return {
        blogs: [],
        total: 6,
        pageNumber: 0,
        email: null
    }
  },
  mounted() {
     if(localStorage.email) this.email = localStorage.email;

    axios.post('/api/auth/blog')
      .then((response) => {
        this.blogs = response.data.blog 
      })

  },
  computed:{
    pageCount(){
      let l = this.blogs.length,
          s = this.total;
      return Math.ceil(l/s);
    },
    paginatedData(){
    const start = this.pageNumber * this.total,
          end = start + this.total;
       
    return this.blogs.slice(start, end);
    }
  },
  methods:{
      nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      }
}
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
  .item_blog{
    margin: 5px;
    margin-bottom: 40px;
  }
  .item_blog img{
    width: 100%;
  }

  .item_blog a{
    text-decoration: none;
    color: black;
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
    .pagination{
      display:flex;
      list-style-type: none;
    }

    .pagination li{
      cursor:pointer;
      margin-right:10px;
      justify-content: center;
      align-items:center;
      width: 30px;
      height:30px;
      display: flex;
      transition: 0.5s;
      border: 1px solid grey;
    }
    .pagination li:hover{
      color:white;
      background:grey;
    }
</style>
