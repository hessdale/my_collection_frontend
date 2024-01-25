<template>
  <div id="app">
    <nav>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Baskervville:regular,italic);

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Baskervville', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: larger;
  font-weight: 500;

}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #4a6179;

    &.router-link-exact-active {
      color: #adb6b2;
    }
  }
}
</style>
