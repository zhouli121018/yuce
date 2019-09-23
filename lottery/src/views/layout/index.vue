<template>
    <div class="app_main">
        <transition>
                <div>
                    <keep-alive>
                        <router-view v-if="$route.meta.cache"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.cache"></router-view>
                </div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isLoading:false
        }
    },
    methods:{
        
    },
    computed: {
        cachViews ()  {
            console.log(this.$store.state.app.cachViews)
            return this.$store.state.app.cachViews 
        }
    },
    created(){
        document.addEventListener('visibilitychange',()=>{
            if(document.hidden){}else{
                if(this.$route.name == 'home'){
                    console.log(this.$route)
                    this.$router.go(0);
                }
            }
        })
    }
    
}
</script>

<style>

</style>
