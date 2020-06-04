<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/headshot.jpg"> -->
    <HeroBanner />
    <div class="flex content" style="justify-content:space-between;">
      <router-link class="navigation" to="/CV">Curriculum Vitae</router-link>
      <router-link class="navigation" to="/About">About me</router-link>
      <div class="social">
        <a href="https://www.linkedin.com/in/jullig" target="_blank">
          <img class="linkedIn" style="" alt="Link to LinkedIn Profile" src="./assets/LinkedIn.png">
        </a>
      </div>
      <div class="social">
        <a href="https://github.com/jGeir/CurriculumVitae" target="_blank">
          <img class="github" style="" alt="Link to Github CV project" src="./assets/Github.png">
        </a>
      </div>
      <router-view></router-view>
    </div>
    <div class="flex content">
    </div>
  </div>
</template>

<script>
import './styles/imports.styl'
// import Welcome from './components/Welcome.vue'
import HeroBanner from './components/HeroBanner.vue'

export default {
  name: 'App',
  components: {
    HeroBanner,

    // Welcome
  }
}
</script>
