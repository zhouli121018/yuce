<template>
    <div class="container">
        <title-bar title_name="大奖预测组合"></title-bar>
        <van-tabs v-model="tabs_active" :swipe-threshold="5" class="tabs_type" @click="tabClick">
            <van-tab v-for="l in lottypes" :key="l.lottype" :title="l.lotname" ></van-tab>
        </van-tabs>
        <div class="xian"></div>
        <div class="message_box" v-for="(l,index) in list" :key="index" @click="getpredzuhe_detail(l.tid)">
            <p> {{l.issue}} 期</p>
            <van-cell :title="l.subtitle" is-link />
        </div>
    </div>
</template>

<script>
import {getpredzuhe, getproperty, getpredzuhe_detail} from '@/api/home'
import { Dialog } from 'vant'
export default {
    data() {
        return {
            tabs_active: 0,
            list:[
                
            ]
        }
    },
    methods:{
        async getpredzuhe (lottype) {
            const { data }    = await getpredzuhe({
                lottype:lottype
            });
            this.list = data.list
        },
        tabClick(index, title) {
            this.getpredzuhe(this.lottypes[index].lottype)
        },
        setLottype(){
            if(this.$route.query.lottype){
                for(var i=0;i<this.$store.getters.lottypes.length;i++){
                    if(this.$store.getters.lottypes[i].lottype == this.$route.query.lottype){
                        this.tabs_active = i;
                    }
                }
            }
        },
        getpredzuhe_detail(tid){
            this.$router.push({
                path:'/home/awardSpredictDetail',
                query:{
                    lottype:this.lottypes[this.tabs_active].lottype,
                    tid:tid
                }
            })
        },
        
    },
    created(){
        if(this.$store.getters.lottypes){
            this.setLottype();
            this.getpredzuhe(this.$store.getters.lottypes[this.tabs_active].lottype)
        }else{
            getproperty().then(res=>{
                this.$store.dispatch('set_lottypes',res.data.lottypes)
                this.setLottype();
                this.getpredzuhe(this.$store.getters.lottypes[this.tabs_active].lottype)
            })
        }
    },
    computed:{
        lottypes(){
            return this.$store.getters.lottypes;
        }
    }
}
</script>

<style lang="stylus" scoped>
.message_box
    margin .2rem 
    border-bottom 1px solid #eee
    p 
        padding-left .35rem
        box-sizing border-box
</style>
