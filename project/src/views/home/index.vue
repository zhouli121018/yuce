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
      
      <div class="gonggao_box">
        <van-button plain type="danger" size="mini">公告</van-button>
        <img src="./img/gonggao.png" alt="" class="gonggao_img">
        <span>【活动】充值彩币最高领取1000元京东E卡</span>
      </div>

      <van-row :gutter="30" class="list_box text_center">
        <van-col span="6" v-for="(l,index) in list" :key="index" >
          <div class="item_box">
            <img :src="l.src" alt="" class="max_width_100">
            <span>{{l.title}}</span>
          </div>
        </van-col>
      </van-row>
      <div class="space_bar"></div>

      <van-tabs v-model="tabs_active" :swipe-threshold="7" class="tabs_type">
        <van-tab title="福彩3D"></van-tab>
        <van-tab title="双色球"></van-tab>
        <van-tab title="大乐透"></van-tab>
        <van-tab title="七乐彩"></van-tab>
        <van-tab title="排列三"></van-tab>
        <van-tab title="排列五"></van-tab>
        <van-tab title="七星彩"></van-tab>
      </van-tabs>
      <van-tabs v-model="num_active" :swipe-threshold="7">
        <van-tab title="杀码"></van-tab>
        <van-tab title="胆码"></van-tab>
        <van-tab title="百位"></van-tab>
        <van-tab title="十位"></van-tab>
        <van-tab title="个位"></van-tab>
      </van-tabs>
      <van-row class="text_center btn_group">
        <van-col span="6"><van-button type="danger" size="small">杀一码</van-button></van-col>
        <van-col span="6"><van-button size="small">杀二码</van-button></van-col>
        <van-col span="6"><van-button size="small">杀三码</van-button></van-col>
        <van-col span="6"><van-button size="small">杀四码</van-button></van-col>
        <van-col span="6"><van-button size="small">杀一码</van-button></van-col>
        <van-col span="6"><van-button size="small">杀二码</van-button></van-col>
        <van-col span="6"><van-button size="small" class="no_border_btn">指标说明</van-button></van-col>
      </van-row>

      <div class="space_bar"></div>
      <div class="clear text_box">
        <span class="fl">019期开：15 16 21 27 20 33#04</span>
        <select class="no_border fr">
          <option value="0">近三期排名</option>
          <option value="1">近七期排名</option>
          <option value="2">近十期排名</option>
          <option value="3">近三十期排名</option>
        </select>
      </div>
      <ul>
        <li class="rank_item" v-for="item in rank_list" :key="item.id">
          <van-row type="flex" align="center">
            <van-col span="18">
              <van-row :gutter="10">
                <van-col span="5">
                  <img src="./img/skill.png" alt="" class="max_width_100">
                </van-col>
                <van-col span="19" class="desc">
                  <h3>{{item.name}} <van-tag color="#6B5BFF">{{item.attention}}</van-tag></h3>
                  <div>{{item.desc}}</div>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="6" class="text_center">
              <van-button type="danger" size="small" >本期预测</van-button>
            </van-col>
          </van-row>
          <van-row class="rank_item_bottom">
            <van-col >上期杀{{item.last}} <span class="red">({{item.result}})</span></van-col>
          </van-row>
        </li>
      </ul>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading:false,
      images:[
        require('./img/banner.png'),
      ],
      list:[
        {src:require('./img/open.png'),title:'开奖大厅'},
        {src:require('./img/group.png'),title:'大奖组合'},
        {src:require('./img/rank.png'),title:'预测排名'},
        {src:require('./img/chart.png'),title:'走势图'},
        {src:require('./img/simulated.png'),title:'模拟奖励'},
        {src:require('./img/goldcoin.png'),title:'领金币'},
        {src:require('./img/open.png'),title:'公告'},
        {src:require('./img/skill.png'),title:'选号技巧'},
      ],
      rank_list:[
        {id:0,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
        {id:1,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
        {id:2,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
      ],
      tabs_active: 0,
      num_active: 0,
    }
  },
  methods: {
    onClickLeft() {
      
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  }
}
</script>

<style>
  .btn_group button{
    margin-top:10px;
  }
  .no_border_btn{
    border: none;
    color: #438CEB;
    text-decoration: underline;
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
  .max_width_100{
    max-width:100%;
  }
  .text_center{
    text-align:center;
  }
  #home_page .van-nav-bar__title{
    /* font-size:0.5rem; */
  }
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
    border-top:2px solid #F0F0F0;
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
