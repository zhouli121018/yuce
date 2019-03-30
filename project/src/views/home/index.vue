<template>
  <div class="container" id="home_page">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-nav-bar
        title="彩票预测大师"
        left-text="登录"
        @click-left="onClickLeft"
      >
      <!-- <h3 slot="title">彩票预测大师</h3> -->
      </van-nav-bar>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
      
     
      <div class="gonggao_box" v-if="notice && notice.length>0">
          <van-button plain type="danger" size="mini">公告</van-button>
          <img src="~@/assets/gonggao.png" alt="" class="gonggao_img">
          <div class="grow_1">
            <van-notice-bar>
              <a :href="n.url" v-for="(n,index) in notice" :key="index" style="margin-right:50px;">
                {{n.text}}
              </a>
            </van-notice-bar>
          </div>
      </div>
      
      
      <van-row :gutter="30" class="list_box text_center">
        <van-col span="6" v-for="(l,index) in list" :key="index">
          <div class="item_box"  @click="jumpTo(l.link)">
            <img :src="l.src" alt="" class="max_width_100">
            <span>{{l.title}}</span>
          </div>
        </van-col>
      </van-row>
      <div class="space_bar"></div>
      
      <rank  :ishome="1" @get_notices="get_notices"/>
      
    </van-pull-refresh>
  </div>
</template>

<script>
import {getproperty,getexprank} from '@/api/home'
import { Dialog } from 'vant'
export default {
  data () {
    return {
      isLoading:false,
      images:[
        require('../../assets/banner.png'),
      ],
      notice_img:require('../../assets/gonggao.png'),
      list:[
        {src:require('../../assets/open.png'),title:'开奖大厅',link:''},
        {src:require('../../assets/group.png'),title:'大奖组合',link:'/home/awardSpredict'},
        {src:require('../../assets/rank.png'),title:'预测排名',link:'/personal/perdictRank'},
        {src:require('../../assets/chart.png'),title:'走势图',link:'/home/charts'},
        {src:require('../../assets/simulated.png'),title:'模拟奖励',link:'/personal/simulateBetting'},
        {src:require('../../assets/goldcoin.png'),title:'领金币'},
        {src:require('../../assets/notice.png'),title:'公告',link:'/home/announcement/index'},
        {src:require('../../assets/skill.png'),title:'选号技巧',link:'/home/picskill'},
      ],
      notice:'',
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/login/index')
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    jumpTo(path){
      this.$router.push(path)
    },
    get_notices (data) {
        this.notice = data;
    },
  },
  created(){
    
  },
  computed:{
      
  }
}
</script>

<style scoped>
  .btn_group button{
    margin-top:10px;
  }
  .btn_group{
    padding-bottom:10px;
  }
  select{
    outline: none;
  }
  .red{
    color:red;
  }
  .no_border{
    border:none;
  }
  .text_box{
    padding:20px 4px;
  }
  .text_center{
    text-align:center;
  }
  /* #home_page .van-nav-bar__title{ */
    /* font-size:0.5rem; */
  /* } */
  #home_page .van-nav-bar__text{
    color:#000;
  }
  #home_page .van-swipe-item img{
    width:100%;
  }
  .gonggao_box{
    background:#F5F5F5;
    padding:4px;
    margin: 4px 0;
    display:flex;
    align-items:center;
    height:30px;
  }
  .gonggao_box .grow_1{
    flex-grow:1;
  }
  .grow_1 .van-notice-bar{
    padding:0;
    background:none !important;
  }
  .gonggao_img{
    width:20px;
    height:16px;
    vertical-align: middle;
    margin:0 10px;
  }
  .list_box{
    padding:10px 20px;
  }
  .item_box{
    padding:8px 0;
  }
  .space_bar{
    height:10px;
    background:#F5F5F5;
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
  #home_page .tabs_type .van-tab{
    color:#1D1D1D;
    padding:0;
  }
  #home_page .tabs_type .van-tab>span{
    font-weight:bold;
  }
  #home_page .tabs_type .van-tab--active,#home_page .van-tab--active{
    color:#E55546;
  }
</style>
