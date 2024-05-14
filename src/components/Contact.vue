<template>
  <section id="contact">
    <div class="section-wrapper">
      <div class="container">
        <h1>Join our Sili Community</h1>
        <div class="accordion">
          <!-- Dexscreener link -->
          <div class="accordion-panel" @click="toggleAccordion">
            <div class="accordion-panel-header">
              <a href="https://dexscreener.com/solana/hpth2grlz5asoufjho85gpg4x66lqbxz9lxh476txsmt" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fas', 'chart-line']" size="3x" style="color: white;" />
              </a>
              <font-awesome-icon icon="fas fa-chevron-down" class="chevron" />
            </div>
          </div>

          <!-- Telegram link -->
          <div class="accordion-panel" @click="toggleAccordion">
            <div class="accordion-panel-header">
              <a href="https://t.me/+7eKEmr1ia59lZTYx" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'telegram']" size="3x" style="color: white;" />
              </a>
              <font-awesome-icon icon="fas fa-chevron-down" class="chevron" />
            </div>
          </div>

          <!-- X link -->
          <div class="accordion-panel" @click="toggleAccordion">
            <div class="accordion-panel-header">
              <a href="https://x.com/sili_onsol?s=21" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'square-x-twitter']" size="3x" style="color: white;" />
              </a>
              <font-awesome-icon icon="fas fa-chevron-down" class="chevron" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  
    
    
    
    <script>
    export default {
      name: "Contact",
      methods: {
        toggleAccordion(event) {
          const activePanel = event.target.closest(".accordion-panel");
          if (!activePanel) return;
    
          const panels = activePanel.parentElement.querySelectorAll(".accordion-panel");
    
          panels.forEach((panel) => {
            panel.classList.remove("expanded");
          });
    
          activePanel.classList.add("expanded");
        },
      },
    };
    </script>
    
    
    
    
<style scoped>
/* Keyframe animation for shaking */
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}

/* Contact section styling */
#contact {
  padding: 50px 0;
  background-color: #021859;
}

/* h1 styling */
h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #30A8F2;
}

/* Container styling */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #0D0D0D;
}

/* Accordion styling */
.accordion {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 2rem;
  background-color: #0D0D0D;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  transition: all 0.3s ease-in-out;
}

/* Accordion panel styling */
.accordion-panel {
  display: flex;
  align-items: center; /* Align items vertically */
  justify-content: center; /* Center content horizontally */
  position: relative;
  isolation: isolate;
  flex: 1;
  overflow: hidden;
  padding: 1rem; /* Increase padding */
  border-radius: 0.25rem;
  background-color: #1A1E26;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

/* Expanded accordion panel styling */
.accordion-panel.expanded {
  flex: 5;
  transform: scale(1.05);
}

/* Accordion header styling with chevron */
.accordion-panel-header {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  width: 100%;
}

.font-awesome-icon {
  font-size: 4rem; /* Larger icon size */
  margin-right: 10px; /* Space between icon and chevron */
  transition: color 300ms ease, transform 300ms ease; /* Smooth color transition */
}

.font-awesome-icon:hover {
  animation: shake 0.5s; /* Apply shake animation */
  color: #DB2EF2; /* Change color on hover */
}

.chevron {
  transition: transform 300ms ease;
}

.accordion-panel.expanded .chevron {
  transform: rotate(180deg);
}

/* Hover effect */
.accordion-panel:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(219, 46, 242, 0.5);
}

@media (max-width: 600px) {
  .accordion-panel {
    flex-direction: column;
  }
}
</style>


    
  