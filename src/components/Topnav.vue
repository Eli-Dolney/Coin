<template>
  <nav class="top-nav" :class="{'fixed-nav': isFixed}">
    <ul>
      <li v-for="item in menuItems" :key="item.name">
        <a class="list-item" :href="item.link" v-tooltip="item.tooltip">
          <font-awesome-icon :icon="item.icon" size="3x" style="color: #30A8F2;" />
        </a>
      </li>
      <li>
        <a class="list-item copy-address" @click="copyAddress" v-tooltip="'Click to copy address'">
          Copy Address
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
  data() {
    return {
      isFixed: false,
      headerHeight: 0,
      menuItems: [
        { name: 'Dexscreener', link: 'https://dexscreener.com/solana/hpth2grlz5asoufjho85gpg4x66lqbxz9lxh476txsmt', icon: ['fas', 'chart-line'], tooltip: 'Dexscreener' },
        { name: 'Telegram', link: 'https://t.me/+7eKEmr1ia59lZTYx', icon: ['fab', 'telegram'], tooltip: 'Telegram' },
        { name: 'X', link: 'https://x.com/sili_onsol?s=21', icon: ['fab', 'square-x-twitter'], tooltip: 'X on Twitter' }
      ],
    };
  },
  methods: {
    copyAddress() {
      event.stopPropagation();
      const address = "2RmC6W5v2yYkDsWfzU3fDm92wfCA5z2SsfAEkXnV4eY4";
      navigator.clipboard.writeText(address).then(() => {
        alert('Address copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  }
};
</script>

<style scoped>
.top-nav {
  width: 100%;
  background-color: #021859;
  color: white;
  list-style-type: none;
  padding: 10px 0;
  text-align: center;
  transition: all 0.3s ease;
  pointer-events: auto;
}

.top-nav.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.top-nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.top-nav li {
  display: inline;
}

.list-item {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
}

.list-item:hover {
  background-color: #555;
}

.copy-address {
  cursor: pointer;
  color: #30A8F2; /* Green text to indicate it's clickable */
}

.copy-address:hover {
  text-decoration: underline;
  color: #7C05F2;
}
</style>
