<template>
  <div id="app">
    <loading-screen :is-loading="isLoading" @loadingComplete="isLoading = false" />
    <main v-if="!isLoading">
      <Topnav />
      <Header />
      <section id="about" class="section-spacing">
        <About />
      </section>
      <section id="roadmap" class="section-spacing">
        <roadmap />
      </section>
      <section id="meme" class="section-spacing">
        <Meme />
      </section>
      <section id="phase" class="section-spacing">
        <Phase />
      </section>
      <section id="contact" class="section-spacing">
        <Contact />
      </section>
    </main>
  </div>
</template>

<script>
import Loading from './components/Loading.vue';
import Topnav from './components/Topnav.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Meme from './components/Meme.vue';
import Roadmap from './components/roadmap.vue';
import Phase from './components/Phase.vue';
import Contact from './components/Contact.vue';

export default {
  components: {
    'loading-screen': Loading,
    Topnav,
    Header,
    About,
    Roadmap,
    Meme,
    Phase,
    Contact
  },
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>

<style scoped>
#app {
  display: grid;
  background-color: #010626;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "main";
}

header {
  grid-area: header;
  width: 100%;
}

main {
  grid-area: main;
}

body {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.section-spacing {
  margin-bottom: 2rem; /* Add spacing below each section */
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
