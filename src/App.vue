<template>
  <div
    id="app"
    class="font-sans antialiased text-gray-900 min-h-screen flex flex-col justify-center items-center bg-gray-200 font-sans"
  >
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="bg-teal-500 self-stretch">
      <div class="container">
        <h1 class="text-white p-3 text-2xl font-bold">Cycle Planning</h1>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
