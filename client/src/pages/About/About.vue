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
        <h2>Про нас</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vestibulum morbi blandit cursus risus at ultrices. Id cursus metus aliquam eleifend. Adipiscing tristique risus nec feugiat in. Tortor aliquam nulla facilisi cras fermentum odio eu. Tellus rutrum tellus pellentesque eu tincidunt. Cras pulvinar mattis nunc sed blandit libero volutpat sed cras. Dui sapien eget mi proin sed libero enim. Ac tortor dignissim convallis aenean et tortor at risus viverra. A pellentesque sit amet porttitor eget. Nullam non nisi est sit amet. Et tortor consequat id porta nibh venenatis. A iaculis at erat pellentesque. Quam lacus suspendisse faucibus interdum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.
Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Convallis a cras semper auctor. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Sem integer vitae justo eget magna. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Urna et pharetra pharetra massa. Nunc faucibus a pellentesque sit. Vel pretium lectus quam id leo in vitae turpis. Vitae semper quis lectus nulla at volutpat diam ut. Arcu dictum varius duis at consectetur lorem donec. Tristique et egestas quis ipsum suspendisse ultrices. Neque aliquam vestibulum morbi blandit cursus risus at. Vitae sapien pellentesque habitant morbi. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Consequat mauris nunc congue nisi. Fames ac turpis egestas integer.
Luctus venenatis lectus magna fringilla urna porttitor. Viverra nam libero justo laoreet sit amet cursus sit amet. Nunc sed velit dignissim sodales ut. Morbi blandit cursus risus at ultrices. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Ultrices sagittis orci a scelerisque. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Scelerisque purus semper eget duis at tellus at. Mus mauris vitae ultricies leo integer malesuada. Enim ut tellus elementum sagittis vitae et leo duis ut. In eu mi bibendum neque egestas congue quisque. Ultricies mi quis hendrerit dolor. Urna cursus eget nunc scelerisque viverra mauris. Orci a scelerisque purus semper eget. Sed faucibus turpis in eu. Nam libero justo laoreet sit amet cursus sit. Leo a diam sollicitudin tempor id eu. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula.
Bibendum neque egestas congue quisque egestas diam in arcu cursus. Magna sit amet purus gravida quis blandit. Sit amet risus nullam eget felis eget nunc lobortis mattis. Sapien eget mi proin sed libero. Tortor pretium viverra suspendisse potenti. Malesuada nunc vel risus commodo. Fermentum dui faucibus in ornare quam viverra orci. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Phasellus vestibulum lorem sed risus. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Sagittis orci a scelerisque purus semper eget duis at tellus. Faucibus purus in massa tempor nec feugiat. Nunc pulvinar sapien et ligula. Eget nunc lobortis mattis aliquam. Est lorem ipsum dolor sit. Sollicitudin aliquam ultrices sagittis orci a scelerisque.
Fringilla urna porttitor rhoncus dolor. Mauris rhoncus aenean vel elit scelerisque. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Vel turpis nunc eget lorem dolor sed viverra ipsum. Pulvinar pellentesque habitant morbi tristique senectus. Natoque penatibus et magnis dis parturient montes. Purus in mollis nunc sed. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Lacinia quis vel eros donec ac odio tempor. Ut consequat semper viverra nam libero justo.
        </p>
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
  name: 'AboutComponent',
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
  .item_blog{
    margin: 5px;
    margin-bottom: 40px;
  }
  .item_blog img{
    width: 100%;
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
  .blog-container{
   
  }

  .blog-container  h2{
    margin-top: 20px;
    margin-bottom: 25px;
      font-size: 30px;
      font-weight: bold;
    }
</style>
