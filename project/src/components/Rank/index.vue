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
      <div class="clear text_box">
        <span class="fl">019期开：15 16 21 27 20 33#04</span>
        <select class="no_border fr" v-model="issuenum" @change="changeIssuenum">
          <option value="0">近三期排名</option>
          <option value="1">近七期排名</option>
          <option value="2">近十期排名</option>
          <option value="3">近三十期排名</option>
        </select>
      </div>
      <ul>
        <li class="rank_item" v-for="(item,index) in rank_list" :key="index">
          <van-row type="flex" align="center">
            <van-col span="18">
              <van-row :gutter="10">
                <van-col span="5">
                  <img src="~@/assets/skill.png" alt="" class="max_width_100">
                </van-col>
                <van-col span="19" class="desc">
                  <h3 class="flex_box"><span class="name_s">{{item.uname}}</span> <van-tag color="#6B5BFF" class="fans">{{item.fans}}人关注</van-tag></h3>
                  <div>{{item.viewtimes}}次查看</div>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="6" class="text_center">
              <van-button type="info" size="small" disabled v-if="item.curstatus==0">未 发 布</van-button>
              <van-button type="danger" size="small" v-if="item.curstatus==1" @click="showTost(item.costcoin)">本期预测</van-button>
              <van-button type="primary" size="small" v-if="item.curstatus==2">已 查 看</van-button>
            </van-col>
          </van-row>
          <van-row class="rank_item_bottom">
            <van-col >{{item.prepred}} <span class="red">{{item.prestatus}}</span></van-col>
          </van-row>
        </li>
      </ul>

    </div>
</template>

<script>
import {getproperty,getexprank} from '@/api/home'
import { Dialog } from 'vant'
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
            rank_list:[
                
            ],
            tabs_active: 0,
            num_active: 0,
            yc_active: 0,
            issuenum: 0,
        }
    },
    methods:{
      change_lottype(index){
        this.tabs_active = index;
        this.num_active = 0;
        this.yc_active = 0;
        this.getexprank();
      },
      change_pos(index){
        this.num_active = index;
        this.yc_active = 0;
        this.getexprank();
      },
      change_yc(index){
        this.yc_active = index;
        this.getexprank();
      },
      changeIssuenum(){
        this.getexprank();
      },
      showTost(cost){
        Dialog.confirm({
          title: '',
          message: '查看该预测需花费你'+cost+'金币，专家不保证100%准确，确定查看吗？'
        }).then(() => {
          // on confirm
        }).catch(() => {
          // on cancel
        });
      },
      async getexprank () {
          const { data }    = await getexprank({
              ishome :this.ishome,
              lottype : this.lottypes[this.tabs_active].lottype,
              postype : this.poslist[this.num_active].type,
              ycplaytype : this.ycplaytypes[this.yc_active].ycplaytype,
              issuenum : this.issuenum
          });
          this.rank_list = data.list;
          if(this.ishome == 1){
            this.$emit('get_notices', data.notices);
          }
      },
    },

    created(){
    if(this.$store.getters.lottypes){
      this.getexprank();
    }else{
      getproperty().then(res=>{
        this.$store.dispatch('set_lottypes',res.data.lottypes)
        this.getexprank();
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
    margin-top .2rem
    text-align center
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
.flex_box
   .name_s
      width:98px
      display:inline-block
      overflow:hidden
      white-space: nowrap;
      text-overflow: ellipsis;

</style>
