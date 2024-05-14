<template>
  <div class="screen-container">
    <div class="screen screen-1">
      <div class="screen-image"></div>
      <div class="screen-overlay"></div>
      <div class="screen-content">
        <div class="icon-wrapper">
          <!-- Font Awesome Icons example -->
          <font-awesome-icon icon="fas fa-users" class="large-icon" />
          <font-awesome-icon icon="fas fa-chart-bar" class="large-icon" />
          <font-awesome-icon icon="fas fa-briefcase" class="large-icon" />
        </div>
        <div class="name-wrapper">
          <span class="name">SILI</span>
        </div>
      </div>
    </div>
  </div>
</template>

  
  
    
<script>
export default {
  name: "Centerpiece",
};
</script>
  
  
  
    
<style scoped>
.screen-container {
  padding-top: calc(100vh / 3.5);
  display: flex;
  justify-content: center;
  gap: 20px;
}

.screen {
  width: 300px;
  height: 500px; /* Fixed height for better control */
  display: flex;
  flex-direction: column;
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 1rem;
  background-color: #1A1E26;
  overflow: hidden;
  position: relative;
}

.screen-image {
  background-image: url("../assets/seals.JPG");
  background-size: cover;
  background-position: center;
  flex-grow: 1;
}

.screen-overlay {    
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(29, 29, 29, 0.7) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.screen-content {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
}

.icon-wrapper {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.large-icon {
  font-size: 3rem;
  color: white;
}

.name-wrapper {
  margin-top: 1rem;
}

.name {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: bold;
  color: white;
}

@media(max-width: 700px) {
  .screen {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
