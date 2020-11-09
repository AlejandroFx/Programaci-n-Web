<template>
  <div id="app">
    <div id="nav" class="navbar navbar-dark bg-dark">
      <router-link to="/">Listar FACTS</router-link> |
      <router-link to="/about">Dato RANDOM</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #295683;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
