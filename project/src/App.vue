<template>
  <div id="app">
    <a href="http://freessq.com/h/pred.apk" download v-show="false" id="download_btn">1</a>
    <router-view v-if="!is_ios"/>
    <div class="container" v-if="is_ios" style="background:#F6F5F5;padding-top:0.4rem !important;">
        <!-- <title-bar title_name="添加到主屏幕" /> -->
        <div style="background:#EFEFEF;padding:0.2rem 0.15rem;margin:0 0.3rem 0.2rem;">
            <div style="text-align:center;font-size:0.5rem;color:#DB3030;font-weight:bold;padding:0.2rem 0;">温馨提示</div>
            <div style="line-height:1.6;padding-left:0.2rem;font-size:0.4rem;">
              请务必添加本页面到主屏幕，以便下次访问，点击“已添加”不再提醒
            </div>
            <div style="text-align:center;padding:0.4rem 0;">
              <van-button style="width:3rem;background-color:#D4D4D4;color:#1A1A1A;font-size:0.45rem;" @click="ignore">关闭</van-button>
              <van-button style="width:3rem;margin-left:1rem;background-color:#DB3030;color:#fff;font-size:0.45rem;" @click="addfn">已添加</van-button>
            </div>
        </div>
        <img src="./assets/down_iphone.png" alt="" style="width:100%">
    </div>
    <div class='full_sc' v-show="loading">
      <rise-loader class="custom-class" color="#8adff4" :loading="loading" :size="15" sizeUnit="px"></rise-loader>
    </div>
    
  </div>
</template>

<script>
import {getproperty} from '@/api/home'
import { Dialog } from 'vant'
export default {
  data(){
    return {
      is_ios:false
    }
  },
  methods:{
    addfn(){
      localStorage['isadd'] = true;
      this.is_ios = false;
    },
    ignore(){
      this.is_ios = false;
    },
  },
  created(){
    //判断是否微信或qq
    let ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger\/[0-9]/i) || ua.match(/QQ\/[0-9]/i)){
        this.$router.push('/home/qqOrwx');
        return;
    }
    //判断 浏览器类型
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      if(!localStorage.getItem('isadd')){
        // this.$router.push('/home/ios')
        this.is_ios = true;
      }
    } else if (/(Android)/i.test(navigator.userAgent)) {
      if(!localStorage.getItem('isdownload')){
        Dialog.confirm({
          title: '温馨提示',
          confirmButtonText:'下载',
          cancelButtonText:'已下载',
          message: '请务必下载安卓App以便下次访问。点击下载进行安装，点击已下载不再提示。'
        }).then(() => {
          // on confirm
          document.getElementById('download_btn').click();
        }).catch(() => {
          localStorage['isdownload'] = true;
          // on cancel
        });
      }
        
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  watch: {
    loading (nv, ov) {
      const root = document.documentElement
      if (nv) {
        root.classList.add('_fc')
      } else {
        root.classList.remove('_fc')
      }

    }
  }
};
</script>

<style lang='stylus'>
.full_sc
  background-color: rgba(25, 25, 25, .6);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0
  z-index: 99999
.custom-class
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
.max_width_100
    max-width:100%;
.van-tab .van-ellipsis
  overflow:visible;
.no_border_btn
    border: none;
    color: #438CEB;
    text-decoration: underline;
.ellipsis_box .van-cell__title
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  .flex_box{
      display:flex;
      align-items:center;
  }
  .flex_grow_1{
      flex-grow:1
  }
  .van-tab--active{
    color:#e4393c;
  }
  .container{
    padding-top:50px !important;
    box-sizing: border-box;
  }
  .title_box.van-nav-bar .van-icon, .title_box .van-nav-bar__text:active ,.fixed_title .van-nav-bar__text:active{
    background:none;
  }
  .no_bottom_border .van-tabs__line{
    background:none;
  }
  .van-tab span{
        white-space: nowrap;
  }
  body{
    font-family:PingFang-SC-Medium;
  }
</style>
