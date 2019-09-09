<template>
    <div class="container" style="background:#fff;">
      <title-bar title_name="关注的玩法" />
        
      <!-- <lottypes  @change_lottypes="getmyfollow" ref="rankChild"/> -->
      <div>
      <van-tabs v-model="tabs_active" :swipe-threshold="7" class="tabs_type" @click="change_lottype">
        <van-tab v-for="l in lottypes" :key="l.lottype" :title="l.lotname" >
          <div slot="title">
            <img v-if="l.lottype==1004 || l.lottype==1006" src="../../assets/hainan.png" alt="" style="position:absolute;width:30px;right:1px;">
            <span style="padding-top:6px;font-size:0.4rem;">{{l.lotname}}</span>
          </div>
        </van-tab>

      </van-tabs>
      <van-tabs v-model="num_active" :swipe-threshold="7" v-if="poslist && poslist.length>0" @click="change_pos" class="no_bottom_border border_color">
        <van-tab v-for="(p,index) in poslist" :key="index" :title="p.name">
          <div slot="title">
            <img v-if="num_active==index" src="../../assets/an.png" alt="" style="position:absolute;width:0.5rem;left:50%;bottom:0;margin-left:-0.25rem;">
            <span style="padding-bottom:6px;font-size:0.35rem">{{p.name}}</span>
          </div>
        </van-tab>
      </van-tabs>
      <van-row class="text_center btn_group" style="padding-bottom:0.2rem;">
        <van-col span="6" v-for="(y,index) in ycplaytypes" :key="index">
          <van-button :type="index==yc_active?'danger':'default'" size="small" @click="change_yc(index)">{{y.ycplayname}}</van-button>
        </van-col>
      </van-row>
      <div class="xian"></div>
      

    </div>
<!-- <div class="xian"></div> -->
      <ul style="padding:0 0.2rem;">
        <li class="rank_item" v-for="(l,index) in list" :key="index">
          <van-row type="flex" align="center">
            <van-col span="18">
              <div @click="goPerRank(l.uid)">
                <van-row :gutter="10">
                  <van-col span="5">
                    <img :src="$https_img+l.img" alt="" class="max_width_100" style="border-radius:50%;">
                  </van-col>
                  <van-col span="19" class="desc">
                    <h3 class="flex_box"><span class="name_s">{{l.uname}}</span> <van-tag color="#6B5BFF" class="fans">{{l.fans}}人关注</van-tag></h3>
                    <div class="gary" style="margin-bottom:0.2rem;color:#666;font-size:0.34rem">{{ l.viewtimes+'次查看 '}}{{l.status}}</div>
                  </van-col>
                </van-row>
              </div>
            </van-col>
            <van-col span="6" class="text_right">
              <van-button type="danger" size="small" v-if="l.cid>0" @click="showTost(l.cid)">查看预测</van-button>
            </van-col>
          </van-row>
          
          <div class="flex_box" style="padding:0.1rem 0 0.1rem 0.1rem;">
              <span class="nowrap" style="padding-right:4px;" v-if="l.cid==0">{{l.issue}}期:</span>
              <div class="flex_grow_1" v-if="l.cid==0 && l.curstatus!=0">
                  <span class="red red_round"  v-for="(red,i) in l.red_num_arr" :key="i">{{red}}</span>
                  <span class="red blue_round"  v-for="(blue,i) in l.blue_num_arr" :key="123+i">{{blue}}</span>
              </div>
              <div class="flex_grow_1" v-if="l.cid==0 && l.curstatus==0">
                  <span>本期还未预测</span>
              </div>
              <div class="flex_grow_1" v-if="l.cid>0">
                  <span style="padding:10px 0;color:#EC493C;font-size:16px;">还未查看该预测</span>
              </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { getmyfollow,viewpred } from '@/api/personal'
import {getproperty} from '@/api/home'
import { Dialog, Toast } from 'vant'
export default {
    data() {
      return {
        list:[],
        costcoin:0,
        tabs_active:0,
        num_active:0,
        yc_active:0,
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
      },
  },
  methods:{
    change_lottype(index){
      this.tabs_active = index;
      this.num_active = 0;
      this.yc_active = 0;
      this.getmyfollow();
    },
    change_pos(index){
      this.num_active = index;
      this.yc_active = 0;
      this.getmyfollow();
    },
    change_yc(index){
      this.yc_active = index;
      this.getmyfollow();
    },
    setLottype(){
      if(this.$route.query.lottype){
          for(var i=0;i<this.$store.getters.lottypes.length;i++){
              if(this.$store.getters.lottypes[i].lottype == this.$route.query.lottype){
                  this.tabs_active = i
              }
          }
      }
      if(this.$route.query.postype){
        let active_lottype = this.$store.getters.lottypes[this.tabs_active]
          for(var i=0;i<active_lottype.poslist.length;i++){
              if(active_lottype.poslist[i].type == this.$route.query.postype){
                 this.num_active = i
              }
          }
      }
      if(this.$route.query.ycplaytype){
        let active_pos = this.$store.getters.lottypes[this.tabs_active].poslist[this.num_active]
          for(var i=0;i<active_pos.ycplaytypes.length;i++){
              if(active_pos.ycplaytypes[i].ycplaytype == this.$route.query.ycplaytype){
                  this.yc_active = i
              }
          }
      }
    },
    
    goPerRank(expid){
      this.$router.push({
        path:'/personal/perdictRanking',
        query:{
          expid:expid
        }
      })
    },
    async getmyfollow (resObj) {
      const { data }    = await getmyfollow({
          lottype : this.$store.getters.lottypes[this.tabs_active].lottype,
          postype : this.$store.getters.lottypes[this.tabs_active].poslist[this.num_active].type,
          ycplaytype : this.$store.getters.lottypes[this.tabs_active].poslist[this.num_active].ycplaytypes[this.yc_active].ycplaytype,
          sid: localStorage['sid'], //localStorage['sid']
          uid: localStorage['uid'],  //localStorage['uid']
      });
      this.costcoin = data.costcoin;
      this.list = data.list;
      this.list.forEach(val => {
          if(val.cid == 0 && val.curstatus!=0){
            let index_blue = val.pred.indexOf('#');
            if(index_blue>-1){
                let blue_num = val.pred.slice(index_blue+1);
                val.blue_num_arr = blue_num.split(',')
                let red_arr = val.pred.slice(0,index_blue);
                val.red_num_arr = red_arr.split(',')
            }else{
                val.red_num_arr = val.pred.split(',')
            }
          }
      });
    },
    showTost(uid){
      Dialog.confirm({
        title: '提示',
        message: '查看该预测需花费你'+this.costcoin+'金币，专家不保证100%准确，确定查看吗？'
      }).then(() => {
        this.viewpred(uid)
      }).catch(() => {
        // on cancel
      });
    },
    async viewpred (cid) {
      const { data }    = await viewpred({
            sid: localStorage['sid'], //localStorage['sid']
            uid: localStorage['uid'],  //localStorage['uid']
            cid: cid,
      });
      if(data.errorcode == 0 && data.content){
        Dialog.confirm({
          title: '提示',
          message: data.content,
          confirmButtonText: '我的查看',
          cancelButtonText: '关闭',
        }).then(() => {
          // on confirm
          this.$router.push({
            path:'/personal/myLook',
            query:{
              lottype : this.$store.getters.lottypes[this.tabs_active].lottype,
              postype : this.$store.getters.lottypes[this.tabs_active].poslist[this.num_active].type,
              ycplaytype : this.$store.getters.lottypes[this.tabs_active].poslist[this.num_active].ycplaytypes[this.yc_active].ycplaytype,
            }
          })
        }).catch(() => {
          // on cancel
        });
      }
        
    },


  },
  created(){
    this.isFirstEnter=true;
  },
  activated(){
    if(!this.$store.getters.isback || this.isFirstEnter){
        if(this.$store.getters.lottypes){
            this.tabs_active = this.$store.getters.tabs_active
            this.num_active = this.$store.getters.num_active
            this.yc_active = this.$store.getters.yc_active
            this.setLottype();
            this.getmyfollow()
        }else{
            getproperty().then(res=>{
                this.$store.dispatch('set_lottypes',res.data.lottypes)
                this.setLottype();
                this.getmyfollow();
            })
        }
      }
      this.isFirstEnter=false;
      this.$store.dispatch('set_isback',false)
    }

}
</script>

<style scoped lang="stylus">
.gary
    color #666
    padding .1rem 0
    font-size .36rem
.van-button--small
  border-radius .2rem
.red_round
  border-radius 50%
  background red
  width .6rem
  height .6rem
  color #ffffff
  display inline-block
  line-height .6rem
  text-align center
  margin-right .2rem
  margin-bottom 0.1rem
ul
  background #fff
.container
  background #f8f8f8
  .btn_group{
    margin-bottom:.2rem;
    padding-bottom .2rem
    background #fff
  }
.text_center{
    text-align:center;
  }
  .max_width_100{
    width 1.1rem
    height 1.1rem
    display inline-block
  }
  .btn_group button{
    margin-top:10px;
  }
  .rank_item{
    padding:10px 10px;
    border-top:1px solid #F0F0F0;
  }
  .rank_item .desc>h3{
    font-weight:bold;
  }
  .rank_item .desc>div{
    color:#8D8D8D;
    padding:8px 0 0;
  }
  .rank_item_bottom{
    color:#707070;
    padding:10px 0;
    font-size:16px;
  }
  .nowrap
    white-space nowrap
  .flex_box
   .name_s
      width:2.8rem
      padding-right:0.2rem
      display:inline-block
      overflow:hidden
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight:bold;
  .flex_grow_1 
    span
      &:last-child
        margin-right 0
</style>
