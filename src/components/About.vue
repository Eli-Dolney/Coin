<template>
    <section id="about">
      <div class="section-wrapper">
        <h2>About Sili</h2>
        <div class="about-container">
          <div class="about-text">
            <p>
              A community claimed ownership for this token on May 08 2024
              Community Claim
              The Dev abandoned his pet, we adopted him to the moon!
            </p>
          </div>
          <div class="about-image">
            <img
              :src="imageSrc"
              alt="Eli and Everly"
              class="profile-image"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
              data-aos-easing="ease-out-quad"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
import imageSrcImport from '../assets/test.jpg';


export default {
  name: "About",
  data() {
    return {
      imageSrc: imageSrcImport,
    };
  },
};
</script>
  
  <style scoped>
  #about {
    padding: 50px 0;
    
    background-color: #0D0D0D;
  }
  
  .section-wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    
  }
  
  .about-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 40px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: inset 0 0 10px #DB2EF2;
    
    background-color: #021859;
    
    
  }
  
  h2 {
    text-align: center;
    font-size: 3vw;
    margin-bottom: 20px;
    color: #30A8F2;
  }
  
  .about-text {
    flex: 2; /* Set the proportion of the about-text to be 2/3 */
    padding-right: 50px;
    color: aliceblue;
  }
  
  .about-image {
    flex: 1; /* Set the proportion of the about-image to be 1/3 */
    height: auto;
    text-align: center;
  }
  
  .about-image img {
    max-width: 100%;
    border-radius: 5px;
  }
  
  .profile-image {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    .about-container {
      flex-direction: column;
    }
  
    .about-text {
      padding-right: 0;
      margin-bottom: 30px;
    }
  
    .about-image {
      width: 100%;
    }
  }
  </style>