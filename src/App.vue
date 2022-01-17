<template>
  <div id="app" :class="currentClass">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <nav class="site-nav">
      <router-link to="/" exact>Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/ateliers">Ateliers</router-link>
      <router-link to="/racines">Racines</router-link>
      <router-link to="/infos">Infos</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data(){
    return {
      currentClass: this.$router.currentRoute.name
    }
  },
  // mounted() {
  //   console.info('App currentRoute:', this.$router.currentRoute)
  //   document.body.classList.add(this.$router.currentRoute.name)
  // },
  // beforeUpdate(){
  //   document.body.classList.remove(this.$router.currentRoute.name);
  // },
  updated() {
    this.currentClass = this.$router.currentRoute.name
  }
}
</script>

<style lang="less" src="./_style/main.less">

</style>
