<template>
  <div id="app">
      <router-view />
  </div>
</template>

<style lang="scss" scope>
body {
  overflow-y: scroll;
  min-height: 100vh;
  > #app {
    min-height: 100vh;
  }
}
</style>

<style lang="scss">
@import "@/assets/scss/reset.scss";
</style>

<script lang="ts" src="./App.ts"></script>
