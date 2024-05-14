<template>
  <header>
    <div class="centerpiece-wrapper">
      <div class="centerpiece">
        <img src="../assets/seals.JPG" alt="Sili" class="seal-image">
        <div class="seal-name">SILI</div>
      </div>
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
export default {
  name: 'Header',
};
</script>

<style scoped>
header {
  background-image: url("../assets/header.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  position: relative;
  height: 100vh; /* Full viewport height for proper centering */
}

.centerpiece-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 2; /* Ensure it's above the background */
}

.centerpiece {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.seal-image {
  width: 300px;
  height: auto;
  border-radius: 10px;
}

.seal-name {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
  margin-top: 10px;
}

.icon-wrapper {
  display: flex;
  gap: 20px;
}

.link {
  transition: transform 0.3s ease;
}

.link:hover {
  transform: scale(1.1);
}

.large-icon {
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  header {
    background-image: none; /* Hide the background image on mobile */
    height: auto; /* Adjust height for mobile */
    padding: 20px 0;
  }

  .seal-image {
    width: 100px; /* Adjust size for mobile */
  }

  .seal-name {
    font-size: 1.5rem; /* Adjust font size for mobile */
  }

  .icon-wrapper {
    display: none; /* Hide icons on mobile */
  }
}
</style>
