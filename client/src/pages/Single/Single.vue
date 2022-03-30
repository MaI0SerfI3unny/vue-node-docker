<template>
    <div >
    <Header :auth="email"/>
    <div class="main-content">
    
    <div>
      <img src="../../assets/item.png">
    </div>
     
    <div style="padding: 10px">
        <h2>{{content.title}}</h2>
        <p>{{content.content}}</p>
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
      email: null,
      content: []
  }
  },

mounted() {
    if(localStorage.email) this.email = localStorage.email;
    axios.post('/api/auth/find_by_id',
    {id: this.$route.params.id})
    .then((res)=> {
       if(res.status === 200){
           this.content = res.data.result[0]
           console.log(this.content)
       }else{
            this.$router.push("/"); 
       }
    }).catch(() => {
         this.$router.push("/"); 
    })
    },
}
</script>