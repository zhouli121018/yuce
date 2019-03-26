<template>
    <div class="container">
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
                  <img src="~@/assets/skill.png" alt="" class="max_width_100">
                </van-col>
                <van-col span="19" class="desc">
                  <h3>{{item.name}} <van-tag color="#6B5BFF">{{item.attention}}</van-tag></h3>
                  <div class="gary">{{item.desc}}</div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            rank_list:[
                {id:0,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
                {id:1,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
                {id:2,name:'海一样的男人',attention:'2人关注',desc:'5千次查看 最大连中7期',last:'15 16 21 27',result:'全对'},
            ],
            tabs_active: 0,
            num_active: 0,
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
</style>
