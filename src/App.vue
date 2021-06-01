<template lang="pug">
#app
    img(src="./assets/logo.png", alt="Vue logo")
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
}
</script>

<style lang="stylus">
#app
    margin-top 60px
    font-family Avenir, Helvetica, Arial, sans-serif
    text-align center
    color #2c3e50
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
