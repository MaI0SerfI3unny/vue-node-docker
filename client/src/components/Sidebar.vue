<template>
    <div class="sidebar">
      <h3>Меню</h3>
        <ul>
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">Про нас</router-link></li>
          <li><router-link to="/contact">Контакты</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'SidebarComponent',
}
</script>

<style scoped>
    ul{
        margin-top: 10px;
        list-style-type: none;
    }
    li{
        margin-bottom: 15px;
    }
</style>
