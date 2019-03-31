<template>
    <div class="container">
      <title-bar title_name="我的关注" />
        
      <lottypes  @change_lottypes="getmyfollow" ref="rankChild"/>

      <ul>
        <li class="rank_item" v-for="(l,index) in list" :key="index">
          <van-row type="flex" align="center">
            <van-col span="18">
              <van-row :gutter="10">
                <van-col span="5">
                  <img :src="$https_img+l.img" alt="" class="max_width_100">
                </van-col>
                <van-col span="19" class="desc">
                  <h3 class="flex_box"><span class="name_s">{{l.uname}}</span> <van-tag color="#6B5BFF" class="fans">{{l.fans}}人关注</van-tag></h3>
                  <div class="gary">{{ l.viewtimes+'次查看 '}}{{l.status}}</div>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="6" class="text_center">
              <van-button type="danger" size="small" v-if="l.cid>0" @click="showTost(l.uid)">查看预测</van-button>
            </van-col>
          </van-row>
          <div class="flex_box" style="padding:10px 8px;">
              <span class="nowrap" style="padding-right:4px;" v-if="l.cid==0">{{l.issue}}期:</span>
              <div class="flex_grow_1" v-if="l.cid==0">
                  <span class="red red_round"  v-for="(red,i) in l.red_num_arr" :key="i">{{red}}</span>
                  <span class="red blue_round"  v-for="(blue,i) in l.blue_num_arr" :key="123+i">{{blue}}</span>
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
import { getmyfollow } from '@/api/personal'
import { Dialog, Toast } from 'vant'
export default {
    data() {
      return {
        list:[],
        costcoin:0,
      }
  },
  methods:{
    async getmyfollow (resObj) {
      const { data }    = await getmyfollow({
          lottype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].lottype,
          postype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].type,
          ycplaytype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].ycplaytypes[this.$refs.rankChild.yc_active].ycplaytype,
          sid: '"4b3eb3d62a674d2ac8fc1eb10aab3562', //localStorage['sid']
          uid: '921717',  //localStorage['uid']
      });
      this.costcoin = data.costcoin;
      this.list = data.list;
      this.list.forEach(val => {
          if(val.cid == 0){
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
        title: '',
        message: '查看该预测需花费你'+this.costcoin+'金币，专家不保证100%准确，确定查看吗？'
      }).then(() => {
        // on confirm
        // Toast(uid)
        this.$router.push({
          path:'/personal/perdictRanking',
          query:{
            expid:uid
          }
        })
      }).catch(() => {
        // on cancel
      });
    },


  },
  created(){
    
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
      width:98px
      display:inline-block
      overflow:hidden
      white-space: nowrap;
      text-overflow: ellipsis;
</style>
