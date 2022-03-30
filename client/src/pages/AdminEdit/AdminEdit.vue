<template>
    <div >
    <Header :auth="email"/>
    <div class="main-content">

    <div class="form_edit">
        <p>Title</p>
        <input v-model="content.title" type="name" >
        <p>Description</p>
        <input v-model="content.description" type="name">
        <p>Content</p>
        <textarea v-model="content.content" type="name">
        </textarea>
        <br>
        <button @click="editBlog(this.$route.params.id)">Edit</button>
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
  name: 'SingleComponent',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      content: [],
      email: null
  }
  },

mounted() {
     if(localStorage.email){
        this.email = localStorage.email;
     }else{
        this.$router.push("/");
     }
    axios.post('/api/auth/find_by_id',
    {id: this.$route.params.id})
    .then((res)=> {
       if(res.status === 200){
           this.content = res.data.result[0]
       }else{
            this.$router.push("/"); 
       }
    }).catch(() => {
         this.$router.push("/"); 
    })
    },
  methods:{
      editBlog(){
          axios.post('/api/auth/edit_blog',
          {
              id: this.$route.params.id,
              title: this.content.title,
              description: this.content.description,
              content: this.content.content,
          }).then((res) => {
              if(res.data.result === 'OK'){
                       this.$router.push("/admin"); 
              }
          })
      }
  }
}
</script>

<style>
.form_edit input{
    width: 320px;
    height: 35px;
    border: 1px solid grey;
    border-radius: 5px;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
}

.form_edit textarea{
    width: 520px;
    padding:5px;
    resize: none;
    height: 200px;
}


.form_edit button{
    width: 100px;
    border-radius: 5px;
    background: green;
    color: white;
    height: 35px;
    transition: 0.5s;
    cursor: pointer;
    border: none;
    margin-top: 10px;
}

.form_edit button:hover{
    background: black;
}
</style>