<template>
    <div class="loading-screen" v-show="isLoading">
      <div class="scrambling-loader">
        <span class="welcome-text" data-value="Time to Get Sili">Time to Get Sili</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Loading',
    props: {
      isLoading: {
        type: Boolean,
        required: true,
      },
    },
    mounted() {
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const welcomeText = this.$el.querySelector('.welcome-text');
      let iteration = 0;
      let interval;
  
      interval = setInterval(() => {
        welcomeText.innerText = welcomeText.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return welcomeText.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');
  
        if (iteration >= welcomeText.dataset.value.length) {
          clearInterval(interval);
          setTimeout(() => {
            this.$emit('loading-complete');  // Emit an event instead of mutating the prop
          }, 2000);
        }
  
        iteration += 1 / 2.5;
      }, 50);
    },
  };
  </script>
  
  
  
  <style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start; /* Align items to the start (top) of the container */
  background-image: url("../assets/loading.jpg");
  background-size: cover; /* Ensure the background covers the entire element */
  z-index: 9999;
}

.scrambling-loader {
  font-family: 'Source Code Pro', monospace;
  font-size: calc(3rem + 3vw);
  font-weight: 500;
  text-transform: uppercase;
  color: black;
  text-align: center;
  width: 100%;
  background-color: aqua;
  margin-top: 20px; /* Optionally add some top margin */
}

  </style>
  