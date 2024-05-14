<template>
  <section id="roadmap-section">
    <div class="section-wrapper">
      <div class="container">
        <h1>Our Roadmap</h1>
        <div class="accordion">
          <Phase v-for="phase in phases" :key="phase.title" :phaseData="phase" />
        </div>
      </div>
    </div>
  </section>
</template>

  
  
  <script>
  import Phase from './Phase.vue'; // Corrected import path
  
  export default {
    components: {
      Phase
    },
    data() {
      return {
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
        ]
      }
    }
  }
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
  </style>
  
  
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
  </style>
  