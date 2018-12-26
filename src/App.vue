<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header>
      <starwars-navbar />
    </header>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'starwars-app',
  components: {
    'starwars-navbar': Navbar
  }  
}
</script>


<style lang="scss">
@import "~@/styles/base";
@import "~@/styles/typography";
@import "~@/styles/fonts";
@import "~@/styles/icons";
@import "~@/styles/mixins";
</style>
