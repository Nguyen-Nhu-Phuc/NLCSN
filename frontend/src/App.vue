<template>
  <Header :key="this.$route.path" />
  <main class="main">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';


export default {
  components: {Header, Footer }
}
</script>

<style lang="scss" scoped>
.main {
  margin-top: calc($height-header-nav + 1.5rem);
  margin-bottom: 2rem;
}
</style>