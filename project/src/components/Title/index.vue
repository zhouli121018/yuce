<template>
  <div class="">
      <van-nav-bar
          :title="title_name"
          left-text=""
          right-text=""
          left-arrow
          class="title_box"
          @click-left="goBack"
          />
  </div>
      
</template>

<script>
  export default {
    name:'title-bar',
    props: {
      title_name: {
        type: String,
        default: 'red'
      },
    },
    data() {
      return {
        
      }
    },
    methods: {
      // 返回
      goBack(){
          this.$router.go(-1)
      }
    },
  }
</script>

<style lang='stylus'>
  .title_box{
    background:red;
    color:#fff;
  }
  .title_box .van-ellipsis.van-nav-bar__title{
    font-size:24px;
  }
  .title_box.van-nav-bar .van-icon{
    color:#fff;
  }
</style>
