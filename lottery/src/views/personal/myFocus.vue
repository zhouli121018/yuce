<template>
    <div class="container" style="background:#fff;">
      <title-bar title_name="关注的玩法" />
        
      <!-- <lottypes  @change_lottypes="getmyfollow" ref="rankChild"/> -->
      <lotchild @change_lottypes="getmyfollow" ref="rankChild"/>
<!-- <div class="xian"></div> -->
      <ul style="padding:0 0.2rem;">
        <li class="rank_item" v-for="(l,index) in list" :key="index">
          <div class="flex">
            <div span="18" style="flex-grow:1">
              <div @click="goPerRank(l.uid)">
                <van-row :gutter="10">
                  <van-col span="5">
                    <img :src="$https_img+l.img" alt="" class="max_width_100" style="border-radius:50%;">
                  </van-col>
                  <van-col span="19" class="desc">
                    <h3 class="flex_box"><span class="name_s">{{l.uname}}</span> 
                      <van-tag color="#6B5BFF" class="fans" style="font-size: 0.35rem;
    white-space: nowrap;
    background-color: rgb(107, 91, 255);">{{l.fans}}人关注</van-tag>
                      <a href="#" @click.prevent.stop="follow(l,index)" class="follow_class">取消关注</a>
                    </h3>
                    <div class="gary" style="margin-bottom:0.2rem;color:#666;font-size:0.34rem">{{ l.viewtimes+'次查看 '}}{{l.status}}</div>
                  </van-col>
                </van-row>
              </div>
            </div>
            <div span="6" class="text_right">
              <van-button type="danger" size="small" v-if="l.cid>0" @click="showTost(l.cid)">查看预测</van-button>
            </div>
          </div>
          
          <div class="flex_box" style="padding:0.1rem 0 0.1rem 0.1rem;">
              <span class="nowrap" style="padding-right:4px;" v-if="l.cid==0">{{l.issue}}期:</span>
              <div class="flex_grow_1" v-if="l.cid==0 && l.curstatus!=0">
                  <span class="red red_round"  v-for="(red,i) in l.red_num_arr" :key="i">{{red}}</span>
                  <span class="red blue_round"  v-for="(blue,i) in l.blue_num_arr" :key="123+i">{{blue}}</span>
              </div>
              <div class="flex_grow_1" v-if="l.cid==0 && l.curstatus==0">
                  <span>本期还未预测</span>
              </div>
              <div class="flex_grow_1"  style="font-size:.38rem;">
                  <div style="padding:.1rem 0;color:#EC493C;" v-if="l.cid>0">还未查看该预测</div>
              </div>
          </div>
          <div v-if="l.preddes" v-html="l.preddes" style="padding-top:.1rem"></div>
        </li>
      </ul>
    </div>
</template>

<script>
import { getmyfollow,viewpred,follow } from '@/api/personal'
import { Dialog, Toast } from 'vant'
export default {
    data() {
      return {
        list:[],
        costcoin:0,
      }
  },
  methods:{
    async follow (row,index) {
        let type = 0;
        let obj = {
          expid: row.uid ,//专家id
          type:type,
          lottype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].lottype,
          postype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].type,
          ycplaytype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].ycplaytypes[this.$refs.rankChild.yc_active].ycplaytype
        }
        if(localStorage.getItem('sid')){
          obj.sid = localStorage.getItem('sid');
        }
        if(localStorage.getItem('uid')){
          obj.uid = localStorage.getItem('uid');
        }
        const { data }    = await follow(obj);
        if(data.errorcode == 0){
            this.getmyfollow();
        }
    },
    goPerRank(expid){
      this.$router.push({
        path:'/personal/perdictRanking',
        query:{
          expid:expid,
          lottype:this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].lottype,
          postype:this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].type,
          ycplaytype:this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].ycplaytypes[this.$refs.rankChild.yc_active].ycplaytype,

        }
      })
    },
    async getmyfollow (resObj) {
      const { data }    = await getmyfollow({
          lottype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].lottype,
          postype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].type,
          ycplaytype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].ycplaytypes[this.$refs.rankChild.yc_active].ycplaytype,
          sid: localStorage['sid'], //localStorage['sid']
          uid: localStorage['uid'],  //localStorage['uid']
      });
      this.costcoin = data.costcoin;
      this.list = data.list;
      // this.list[0].preddes = '上期测：9,1,2,3,6,9<span style="color:#EC493C">【全中】</span>'
      // this.list[1].preddes = ''
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
                lottype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].lottype,
                postype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].type,
                ycplaytype : this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].ycplaytypes[this.$refs.rankChild.yc_active].ycplaytype,
              }
            })
          }).catch(() => {
            // on cancel
          });
        }
          
      },


  },
  created(){
    
  }

}
</script>

<style scoped lang="stylus">
.follow_class
  font-size:.35rem;
  color:red;
  white-space: nowrap;
  padding:.1rem 0;
  width:1.6rem;
  text-align:center;
  border:1px solid red;
  margin-left:.1rem;
  border-radius:.1rem;
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
    padding:0.2rem 0;
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
      width:1.8rem
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
.rank_ul
  padding 0 0.2rem
.fans.van-tag
  width 1.6rem
  overflow hidden
  white-space: nowrap;
</style>
