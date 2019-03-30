<template>
    <div class="container">
      <title-bar title_name="我的查看" />
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
      <ul>
        <li class="rank_item" v-for="item in rank_list" :key="item.id">
          <van-row type="flex" align="center">
            <van-col span="18">
              <van-row :gutter="10">
                <van-col span="5">
                  <img src="~@/assets/skill.png" alt="" class="max_width_100">
                </van-col>
                <van-col span="19" class="desc">
                  <h3>{{item.name}} <van-tag color="#6B5BFF">{{item.attention}}</van-tag></h3>
                  <div class="gary">{{item.desc}}</div>
                </van-col>
              </van-row>
            </van-col>
            <van-col span="6" class="text_center">
              <van-button type="danger" size="small" >查看</van-button>
            </van-col>
          </van-row>
          <van-row class="rank_item_bottom">
            <!-- <van-col >上期杀{{item.last}} <span class="red">({{item.result}})</span></van-col> -->
            <van-col ><span class="red red_round">3</span><span class="red red_round">3</span><span class="red red_round">3</span><span class="red red_round">3</span></van-col>
          </van-row>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs_active: 0,
            num_active: 0,
            rank_list:[
                {id:0,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
                {id:1,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
                {id:2,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
            ],
        }
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
</style>
