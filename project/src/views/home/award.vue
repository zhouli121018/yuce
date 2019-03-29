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
        <div class="xian"></div>
        <div class="award_title">
            <h3>福彩3D大奖预测专家组合  <span>013开奖</span></h3>
            <p><span class="red red_round">01</span><span class="blue red_round">01</span></p>
        </div>
        <div class="xian"></div>
        <div class="award_record">
            <div class="award_box">
                <img src="~@/assets/skill.png" alt="">
                <div>
                    <p>还一样的男人</p>
                    <p><span class="red red_rounds">3</span><span class="red red_rounds">3</span></p>
                </div>
                <p class="award_eyes"><img src="~@/assets/eyes.png" alt="">123</p>
            </div>
            <p class="gary">【红球杀号】【杀三码】测10对10</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs_active: 0
        }
    }
}
</script>

<style lang="stylus" scoped>
.award_eyes
    color #666
    img     
        width .55rem
        height .26rem
.gary
    color #666
.award_record
    padding .3rem
    box-sizing border-box
.award_box
    width 100%
    display flex
    align-items center
    div 
        width 70%
        padding .2rem 0
        p 
            line-height .6rem
            &:first-child
                font-weight bold 
                font-size .4rem
    >img 
        width 1.2rem
        height 1.2rem
        border-radius 50%
        margin-right .2rem
.red_rounds
  border-radius 50%
  background red
  width .6rem
  height .6rem
  color #ffffff
  display inline-block
  line-height .6rem
  text-align center
  margin-right .2rem
.award_title
    padding .3rem .2rem 
    box-sizing border-box
    h3 
        padding-bottom .2rem
        span 
            font-size .32rem
            color #666
            padding-left .3rem
.red_round
    border-radius 50%
    width .8rem
    height .8rem
    display inline-block
    line-height .8rem
    text-align center
    margin-right .2rem
    border 1px solid transparent
    color red
    &.red
        background #DB3030 
        color #ffffff
    &.blue
        background #4FA7F3
        color #ffffff
</style>
