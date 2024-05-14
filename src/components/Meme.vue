<template>
  <section id="meme">
    <div class="section-wrapper">
      <div class="container">
        <h1>Sili Memes</h1>
        <div class="image-rotator">
          <img :src="currentImage" alt="Description of the image">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importing multiple images
import image1 from '../assets/meme1.jpg';
import image2 from '../assets/meme2.jpg';
import image3 from '../assets/meme3.jpg';
import image4 from '../assets/meme4.jpg';
import image5 from '../assets/meme5.jpg';
import image6 from '../assets/meme6.jpg';
import image7 from '../assets/meme7.jpg';
import image8 from '../assets/meme8.jpg';
import image9 from '../assets/meme9.jpg';


export default {
  name: "ImageRotator",
  data() {
    return {
      images: [image1, image2, image3, image4, image5, image6, image7, image8, image9,  ], // Array of images
      currentImageIndex: 0, // Initial index
      currentImage: ''
    };
  },
  mounted() {
    this.currentImage = this.images[this.currentImageIndex];
    this.startRotation();
  },
  methods: {
    startRotation() {
      this.interval = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.currentImage = this.images[this.currentImageIndex];
      }, 3000); // Change image every 5 seconds
    }
  },
  beforeUnmount() {
    clearInterval(this.interval); // Clear the interval on component destruction
  }
};
</script>


<style scoped>
#image-rotator-section {
  padding: 50px 0;
  background-color: #021859; /* Dark background for contrast */
  color: aliceblue; /* Light text color for readability */
  text-align: center; /* Center aligning the content */
  max-width: 1200px; /* Max width for the content area */
  margin: 0 auto; /* Center the section horizontally */
}

.image-rotator {
  width: 100%; /* Adjust this to whatever width you want */
  max-width: 600px; /* Set a max-width if necessary */
  height: 400px; /* Set a fixed height */
  margin: 0 auto; /* Center the container */
  overflow: hidden; /* Ensures nothing spills out */
  position: relative; /* Positioning context for the image */
}

.image-rotator img {
  width: 100%; /* Fill the container */
  height: 100%; /* Fill the height of the container */
  object-fit: cover; /* Cover the container while maintaining aspect ratio */
  display: block; /* Remove any extra line-height or spacing */
  transition: opacity 0.5s ease; /* Smooth transition for image changes */
}

h2{
    font-size: 3vw;
    color: #30A8F2;
}

.image-rotator:hover img {
  transform: scale(1.05); /* Slight zoom on hover */
}

@media (max-width: 768px) {
  #image-rotator-section {
    padding: 30px 15px; /* Smaller padding on smaller screens */
  }

  .image-rotator {
    padding: 10px;
  }

  h2 {
    font-size: 2rem; /* Smaller heading size on small devices */
  }
}
</style>

