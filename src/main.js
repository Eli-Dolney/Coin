import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/style.css';

// Importing Font Awesome functionality
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importing specific Font Awesome icons
import { faGithubSquare, faLinkedin, faInstagramSquare, faTwitterSquare, faSquareXTwitter, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faEnvelope, faChartLine } from '@fortawesome/free-solid-svg-icons';

// Adding icons to the library
library.add(faGithubSquare, faLinkedin, faInstagramSquare, faTwitterSquare, faSquareXTwitter, faTelegramPlane, faLaptopCode, faEnvelope, faChartLine);

// Creating the Vue application
const app = createApp(App);

// Registering the FontAwesomeIcon component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Mounting the app
app.mount('#app');
