<template lang="pug">
#app
    TrainerRememberNumber
</template>

<script>
import TrainerRememberNumber from '@/components/TrainerRememberNumber'

export default {
    name: 'App',
    components: {
        TrainerRememberNumber,
    },
}
</script>

<style lang="stylus">
#app
    margin-top 60px
    font-family Avenir, Helvetica, Arial, sans-serif
    color #2c3e50
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
