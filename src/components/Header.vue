<template>
  <header>
    <div class="centerpiece-wrapper">
      <Centerpiece />
      <div class="icon-wrapper">
        <a class="link" href="https://t.me/+7eKEmr1ia59lZTYx" target="_blank">
          <font-awesome-icon :icon="['fab', 'telegram']" size="4x" class="large-icon" />
        </a>
        <a class="link" href="https://x.com/sili_onsol?s=21" target="_blank">
          <font-awesome-icon :icon="['fab', 'square-x-twitter']" size="4x" class="large-icon" />
        </a>
      </div>
    </div>
  </header>
</template>

<script>
import Centerpiece from './Centerpiece.vue';

export default {
  name: 'Header',
  components: {
    Centerpiece,
  }
};
</script>


<style scoped>
header {
  background-image: url("../assets/header.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center; /* Center the background image */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.centerpiece-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.icon-wrapper {
  display: flex;
  gap: 20px; /* Add space between icons */
}

.link {
  transition: transform 0.3s ease;
}

.link:hover {
  transform: scale(1.1); /* Scale icons on hover to indicate interactivity */
}

.large-icon {
  color: white; /* Set the icon color */
  cursor: pointer; /* Change cursor to pointer to indicate clickable */
}

h2{
  color: #30A8F2;
}
</style>
