<template>
    <div >
    <Header :auth="email"/>
    <div class="main-content">
    <div class="container_table">
    <div class="form_new_blog">
        <h2>Create new</h2>
        <input v-model="title" type="name" placeholder="Type title here...">
        <input v-model="description" type="name" placeholder="Type description here...">
        <input v-model="content" type="name" placeholder="Type content here...">
        <button @click="createBlog" >Create</button>

    </div>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Content</th>
                <th>Path</th>
                <th>Date</th>
                 <td></td>
            </tr>
            </thead>
            <tr v-for="(item, index) in  blogs" :key="index">
                <td>{{item.title}}</td>
                <td>{{item.description.slice(0,60)}}...</td>
                <td>{{item.content.slice(0,100)}}...</td>
                <td>{{item.path_img}}</td>
                <td>{{item.date ? item.date : "-"}}</td>
                <td>
                    <button @click="deleteBlog(item._id)">Delete</button>
                    <button>
                    <router-link :to="'/admin/' + item._id" class="edit_btn">Edit</router-link>
                    </button></td>
            </tr>

        </table> 
        </div>
    </div>
      <Footer/>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import axios from 'axios'

export default {
  name: 'AboutComponent',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      blogs: [],
      email: null,
      title: '',
      decription: '',
      content: ''
  }
  },
mounted() {
     if(localStorage.email){
        this.email = localStorage.email;
     }else{
        this.$router.push("/");
     }
     this.getData()
  },
  methods:{
      getData(){
            axios.post('/api/auth/blog')
            .then((response) => {
                this.blogs = response.data.blog
            })
      },
      deleteBlog(id){
        axios.post('/api/auth/del_blog',
        {id:id}
        ).then(() => {
            this.getData()
        })
      },
      createBlog(){
          axios.post('/api/auth/create_blog',
          {
              title: this.title,
              description: this.description,
              content: this.content,
              path_img: "-"
          }).then((res) => {
              console.log(res);
              if(res.status === 201){
                this.title = ''
                this.description =  ''
                this.content = ''
                this.getData()
              }
          })
      }
  }
}
</script>

<style scoped>
  *{
    margin:0;
    font-family: 'Oswald', sans-serif;
    padding:0;
  }

    .container_table{
        width:100%;
    }

  .main-content{
    display: flex;
    padding:20px;
    min-height:1000px;
  }

    table{
        width:100%;
    }

    thead tr th{
        padding:15px;
    }

    thead tr{
        margin:15px;
        background:grey;
        color: white;
    }
    .form_new_blog input{
        width: 150px;
        height: 35px;
        border: 1px solid grey;
        border-radius: 5px;
        padding-left:10px;
        margin-right: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .form_new_blog button{
        background:green;
        color: white;
        width: 80px;
        border-radius: 5px;
        height: 36.5px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        transition: 0.5s;
    }

    .form_new_blog button:hover{
        background: black;
    }
    .edit_btn{
        text-decoration: none;
        color:black;
    }
</style>
