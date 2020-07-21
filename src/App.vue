<template>
  <div id="app">
    <div id="nav">
      <m-header></m-header>
      <footer-tab></footer-tab>
    </div>
    <router-view />
  </div>
</template>
<script>
import MHeader from './components/base/m-header/m-header'
import FooterTab from 'components/base/footer-tab/footer-tab'

export default {
  components: {
    MHeader,
    FooterTab
  }
}
</script>
<style>
</style>
