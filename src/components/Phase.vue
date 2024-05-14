<template>
  <div class="phase" :class="positionClass" v-if="phaseData">
    <div class="phase-header">{{ phaseData.title }}</div>
    <p class="phase-description">{{ phaseData.description }}</p>
    <ul class="phase-content">
      <li v-for="item in phaseData.items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    phaseData: Object,
    position: String // New prop to control the position
  },
  computed: {
    positionClass() {
      return this.position === 'left' ? 'phase-left' : 'phase-right';
    }
  }
};
</script>

<style scoped>
.phase {
  background-color: #021859;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  transition: transform 0.5s, opacity 0.5s;
  opacity: 0; /* Start hidden for animation */
  transform: translateY(20px); /* Start position for animation */
}

.phase-left {
  align-self: flex-start;
}

.phase-right {
  align-self: flex-end;
}

.phase-header {
  font-size: 24px;
  font-weight: bold;
}

.phase-description {
  font-size: 16px;
  margin: 10px 0;
}

.phase-content li {
  margin-top: 10px;
}

@media (max-width: 768px) {
  .phase {
    padding: 10px;
  }

  .phase-header {
    font-size: 20px;
  }

  .phase-description {
    font-size: 14px;
  }

  .phase-left, .phase-right {
    align-self: center;
  }
}

/* Animation for scroll */
.phase.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
