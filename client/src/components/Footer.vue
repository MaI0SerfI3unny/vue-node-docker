<template>
  <div class="footer-container">
    <p>Copyright {{ new Date().getFullYear() }}</p>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style>
    .footer-container{
        width: 100%;
        background: black;

    }
    .footer-container p{
        color: white;
        padding: 15px;
        padding-left: 40px;
        padding-right: 40px;
    }
</style>
