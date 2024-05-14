<template>
  <section id="about">
    <div class="section-wrapper">
      <h1>About Sili</h1>
      <div class="about-container">
        <div class="about-text">
          <p>
            A community claimed ownership for this token on May 08 2024. The Dev abandoned his pet, we adopted him to the moon!
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
  background-color: #010626;
}

.section-wrapper {
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #021859;
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  color: #30A8F2;
}

.about-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.about-text {
  flex: 2;
  color: aliceblue;
  text-align: center;
}

.about-image {
  flex: 1;
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
