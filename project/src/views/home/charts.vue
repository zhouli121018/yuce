<template>
    <div class="container">
        <title-bar title_name="走势图"></title-bar>
        <van-tabs v-model="tabs_active" :swipe-threshold="5" class="tabs_type" @click="change_lottype">
            <van-tab v-for="l in lottypes" :key="l.lottype" :title="l.lotname" ></van-tab>
        </van-tabs>
        <div class="xian"></div>
        <div class="message_box">
            <van-cell v-for="(l,index) in list" :key="index" :title="l.title" is-link :url="l.url"/>
        </div>
    </div>
</template>

<script>
import {getproperty,gettrendlist } from '@/api/home'
export default {
    data() {
        return {
            tabs_active: 0,
            list:[],
        }
    },
    methods:{
        async gettrendlist () {
          const { data }    = await gettrendlist({
              lottype : this.lottypes[this.tabs_active].lottype,
          });
          this.list = data.list;
        },
        change_lottype(index){
            this.tabs_active = index;
            this.gettrendlist();
        },
        setLottype(){
            if(this.$route.query.lottype){
                for(var i=0;i<this.$store.getters.lottypes.length;i++){
                    if(this.$store.getters.lottypes[i].lottype == this.$route.query.lottype){
                        this.tabs_active = i;
                    }
                }
            }
        }
    },
    created(){
        
        if(this.$store.getters.lottypes){
            this.setLottype()
            this.gettrendlist();
            }else{
            getproperty().then(res=>{
                this.$store.dispatch('set_lottypes',res.data.lottypes)
                this.setLottype();
                this.gettrendlist();
            })
        }
    },
    computed:{
      lottypes(){
          return this.$store.getters.lottypes;
      },
    }
}
</script>

<style lang="stylus" scoped>
.message_box
    margin .2rem 
    border-bottom 1px solid #eee
</style>
