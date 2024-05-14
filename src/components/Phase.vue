<template>
    <div class="phase" v-if="phaseData">
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
      phaseData: Object
    }
  }
  </script>
  
  <style scoped>
  .phase {
    background-color: #021859;
    color: white;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
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
  }
  </style>
  