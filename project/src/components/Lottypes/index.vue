<template>
    <div>
      <van-tabs v-model="tabs_active" :swipe-threshold="5" class="tabs_type" @click="change_lottype">
        <van-tab v-for="l in lottypes" :key="l.lottype" :title="l.lotname" ></van-tab>
      </van-tabs>
      <van-tabs v-model="num_active" :swipe-threshold="7" v-if="poslist && poslist.length>0" @click="change_pos">
        <van-tab v-for="p in poslist" :key="p.type" :title="p.name"></van-tab>
      </van-tabs>
      <van-row class="text_center btn_group">
        <van-col span="6" v-for="(y,index) in ycplaytypes" :key="index">
          <van-button :type="index==yc_active?'danger':'default'" size="small" @click="change_yc(index)">{{y.ycplayname}}</van-button>
        </van-col>
        <van-col span="6"><van-button size="small" class="no_border_btn">指标说明</van-button></van-col>
      </van-row>

      <div class="space_bar"></div>
      

    </div>
</template>

<script>
import {getproperty,getexprank} from '@/api/home'
export default {
    props: {
      // 是否禁用
      ishome: {
        type: Number,
        default: 1
      },
    },
    data() {
        return {
            
            tabs_active: 0,
            num_active: 0,
            yc_active: 0,
        }
    },
    methods:{
      change_lottype(index){
        this.tabs_active = index;
        this.num_active = 0;
        this.yc_active = 0;
        this.$emit('change_lottypes');
      },
      change_pos(index){
        this.num_active = index;
        this.yc_active = 0;
        this.$emit('change_lottypes');
      },
      change_yc(index){
        this.yc_active = index;
        this.$emit('change_lottypes');
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

    mounted(){
        if(this.$store.getters.lottypes){
            this.setLottype();
            this.$emit('change_lottypes')
        }else{
            getproperty().then(res=>{
                this.$store.dispatch('set_lottypes',res.data.lottypes)
                this.setLottype();
                this.$emit('change_lottypes')
            })
        }
    },
  computed:{
      lottypes(){
          return this.$store.getters.lottypes;
      },
      poslist(){
        if(this.$store.getters.lottypes){
          return this.$store.getters.lottypes[this.tabs_active].poslist
        }else {
          return [];
        }
      },
      ycplaytypes(){
        if(this.$store.getters.lottypes){
          return this.$store.getters.lottypes[this.tabs_active].poslist[this.num_active].ycplaytypes
        }else {
          return [];
        }
      }
  }
}
</script>

<style scoped lang="stylus">
.text_center
    margin-bottom .2rem
    text-align center
    background #fff
.no_border{
    border:none;
  }
.btn_group button
    margin-top .2rem
.text_box{
    padding:.3rem .2rem;
}
.rank_item{
    padding:.2rem
    border-top:1px solid #F0F0F0;
  }
.gary
    color #666
    padding .1rem 0
    font-size .36rem
.rank_item_bottom
    padding .1rem 0


</style>
