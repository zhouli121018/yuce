<template>
    <div class="container">
        <div class="my_title">
            <img class="my_title_photo" src="~@/assets/skill.png" alt="">
            <div class="my_title_center">
                <span>8888888</span>
            </div>
            <van-button class="orange_btn" round @click="jumpTo('/home/openingMember')">已签到</van-button>
        </div>
        <div class="broughtGold_gold">
            <div>
                <p class="red">109</p>
                <p>我的金币</p>
            </div>
            <div>
                <p class="red">1天</p>
                <p>连续签到</p>
            </div>
        </div>
        <div class="xian"></div>
        <div class="broughtGold_box">
            <p class="red">领金币方式一</p>
            <div class="gold_content">
                <p class="gold_top"><span>1天</span><span>2天</span></p>
                <div class="gold_center">
                    金币
                    <span>+1</span>
                    <span>+1</span>
                    <span>+1</span>
                </div>
                <p class="gary">备注: 签到间断金币从第一天开始</p>
            </div>
            <div class="xian"></div>
        </div>
        <div class="broughtGold_box">
            <p class="red">领金币方式二</p>
            <div class="gold_content">
                <p>分享要吗好友注册送10金币</p>
                <div class="gold_center">
                    <p>这是的开机速度很快会收到甲方后开始接受的还是看哈萨克</p>
                    <span class="gold_span">复制分享</span>
                </div>
            </div>
            <div class="xian"></div>
        </div>
        <div class="broughtGold_box">
            <p class="red">领金币方式三</p>
            <div class="gold_content">
                <p>模拟投注双色球，选8个号码</p>
                <div class="gold_center">
                    <div style="width:78%">
                        <p class="red">中4个送10金币</p>
                        <p class="red">中4个送10金币</p>
                        <p class="red">中4个送10金币</p>
                    </div>
                    <span class="gold_span">模拟投注</span>
                </div>
            </div>
            <div class="xian"></div>
        </div>
        <div class="broughtGold_box">
            <p class="red">领金币方式四</p>
            <div class="gold_content">
                <div class="gold_center">
                    <p class="red">支付购买获取金币</p>
                    <span class="gold_span">前往支付</span>
                </div>
            </div>
            <div class="xian"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.broughtGold_box
    width 100%
    box-sizing border-box   
    padding-top .2rem 
    >p 
        border-left .15rem solid #DB3030
        padding .2rem 
        margin-bottom .2rem 
        box-sizing border-box
    .gold_content
        width 100%
        padding .2rem .3rem 
        box-sizing border-box
        border-top 1px solid #eeeeee
        .gold_top
            padding-left .8rem
            span 
                padding 0 .3rem
        .gold_center
            display flex
            align-items center
            padding .3rem 0
            span 
                border 1px solid #D93231
                padding .1rem .2rem
                margin-left .2rem
                color #D93231
                &.gold_span
                    padding .2rem
                    border-radius .6rem
                    background #D93231
                    color #ffffff
                    margin-left 0
            p 
                line-height .6rem
                width 78%
        .gary
            color #666
            font-size .34rem
            padding-left .9rem
.broughtGold_gold
    display flex
    width 100%
    justify-content space-around
    align-items center
    padding .3rem 0
    div
        width 49%
        text-align center
        &:first-child
            border-right 1px solid #eee
        p 
            line-height .6rem
.my_title
    width: 100%
    padding .2rem 
    box-sizing border-box 
    display flex
    align-items center
    border-bottom 1px solid #eeeeee
    .my_title_center
        width 60%
        span 
            line-height .5rem
            padding-right .1rem
    .my_title_photo
        width 1.5rem
        height 1.5rem
        border-radius 50%
        margin-right .3rem
.orange_btn
    border-radius .6rem
    background #F5F5F5
    color #DB3736
    height 1rem
    line-height 1rem
    padding 0 .4rem
.title_photo
    width .88rem!important
    height .88rem!important
</style>
