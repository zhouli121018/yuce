<template>
    <div class="app_main">
        <transition>
            <!-- <keep-alive :include="cachViews"> -->
            <router-view></router-view>
            <!-- </keep-alive> -->
        </transition>
    </div>
</template>
<script>
export default {
    computed: {
        cachViews ()  {
            return this.$store.state.app.cachViews 
        }
    },
    
}
</script>

<style>

</style>
