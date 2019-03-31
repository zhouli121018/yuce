<template>
    <div class="container">
        <title-bar title_name="专家预测"></title-bar>
        <div class="perdict_title">
            <div class="title_content">
                <img class="title_photo" src="~@/assets/skill.png" alt="">
                <div>
                    <div>
                        <span>9999999</span>
                        <img src="~@/assets/zhuan@2x.png" alt="">
                        <img src="~@/assets/vip.png" alt="">
                    </div>
                    <p>粉丝: <span class="red">500</span></p>
                </div>
            </div>
            <van-button type="danger" size="small" >关注</van-button>
        </div>
        <textarea placeholder="个人简介" id="textarea"></textarea>
        <div class="xian"></div>
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
        <div class="period_time">
            <span>期次</span>
            <span>开奖码</span>
            <span>预测内容</span>
            <span>状态</span>
        </div>
        <div class="period_content">
            <span>019</span>
            <span class="red red_num">01 02 12 45 20 33#01</span>
            <span>查看预测</span>
            <span class="red">未开</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
.period_time,.period_content
    width 100%
    background #f8f8f8
    padding .2rem 0
    display flex
    align-items center
    margin .2rem 0
    span 
        width 22%
        text-align center
        border-right 1px solid #eeeeee
        color #666
        padding .2rem 0
        &:nth-child(2)
            width 33%!important
        &:last-child
            border-right none
.period_content
    span
        font-size .3rem 
        border-right none
        &.red
            color red
.text_center,.btn_group button
    margin-top .1rem
    text-align center
#textarea
    width 94%
    min-height 2rem
    margin .2rem auto 
    display block
    font-size .38rem
    border 1px solid #eee
    padding .2rem 
    box-sizing border-box
.perdict_title
    width 100%
    padding .2rem
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #eee
    button 
        border-radius .2rem
.title_photo
    width 1.5rem
    height 1.5rem
    border-radius 50%
    display inline-block
    margin-right .3rem
.title_content
    width 100%
    display flex
    align-items center
    div
        line-height .65rem
    img:nth-child(2)
        width .3rem
        height .3rem
    img:last-child
        width .6rem
        height .6rem
</style>
