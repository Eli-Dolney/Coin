<template>
  <section id="roadmap-section">
    <div class="section-wrapper">
      <div class="container">
        <h1>Our Roadmap</h1>
        <div class="roadmap">
          <Phase v-for="(phase, index) in phases" 
                 :key="phase.title" 
                 :phaseData="phase" 
                 :position="index % 2 === 0 ? 'left' : 'right'"
                 :class="{ 'visible': visiblePhases[index] }" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, onBeforeUnmount, reactive, toRefs } from 'vue';
import Phase from './Phase.vue';

export default {
  components: {
    Phase
  },
  setup() {
    const state = reactive({
      phases: [
        { 
          title: 'Phase 1', 
          description: 'This phase focuses on launching the project and setting up the foundational elements.',
          items: ['Launch on Solana', 'Website Landing Page', 'Marketing'] 
        },
        { 
          title: 'Phase 2', 
          description: 'In this phase, we expand our reach through targeted marketing and community building.',
          items: ['Twitter/X Marketing', 'DEXScreener and BirdEye Update', 'Build Our Community'] 
        },
        { 
          title: 'Phase 3', 
          description: 'In this phase, we expand our reach through targeted marketing and community building.',
          items: ['Twitter/X Marketing', 'DEXScreener and BirdEye Update', 'Build Our Community'] 
        },
        { 
          title: 'Phase 4', 
          description: 'In this phase, we expand our reach through targeted marketing and community building.',
          items: ['Twitter/X Marketing', 'DEXScreener and BirdEye Update', 'Build Our Community'] 
        }
      ],
      visiblePhases: [false, false, false, false]
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const reveals = document.querySelectorAll('.phase');

      reveals.forEach((reveal, index) => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
          state.visiblePhases[index] = true;
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      ...toRefs(state),
      handleScroll
    };
  }
};
</script>

<style scoped>
.roadmap {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .roadmap {
    padding: 10px;
  }
}

.section-wrapper {
  max-width: 80%;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #30A8F2;
}
</style>
