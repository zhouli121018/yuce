<template>
    <div class="container" v-if="info != null">
        <title-bar title_name="领金币" />
        <div class="my_title">
            <img class="my_title_photo" :src="$https_img+info.img" alt="">
            <div class="my_title_center">
                <span>{{info.uname}}</span>
            </div>
            <!-- 今天是否签过，1签到过，0未签到 -->
            <van-button class="orange_btn" round @click="info.ischeck==0?signIn():''" :disabled="info.ischeck==1?true:false">{{info.ischeck==1?'已签到':'签到'}}</van-button>
        </div>
        <div class="broughtGold_gold">
            <div>
                <p class="red">{{info.coin}}</p>
                <p>我的金币</p>
            </div>
            <div>
                <p class="red">{{info.days}}天</p>
                <p>连续签到</p>
            </div>
        </div>
        <div class="xian"></div>
        <div class="broughtGold_box">
            <p class="red">领金币方式一</p>
            <div class="gold_content">
                <p class="gold_top"><span>1天</span><span>2天</span>
                <span>3天</span>
                <span>4天</span>
                <span>5天</span>
                <span>6天</span>
                <span>7天</span></p>
                <div class="gold_center">
                    金币
                    <span>+1</span>
                    <span>+2</span>
                    <span>+3</span>
                    <span>+4</span>
                    <span>+5</span>
                    <span>+6</span>
                    <span>+7</span>
                </div>
                <p class="gary">备注: 签到间断金币从第一天开始</p>
            </div>
            <div class="xian"></div>
        </div>
        <div class="broughtGold_box">
            <p class="red">领金币方式二</p>
            <div class="gold_content">
                <p>分享邀请码好友注册各送10金币</p>
                <div class="gold_center">
                    <p>{{info.share}}</p>
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
                        <p class="red">中5个送100金币</p>
                        <p class="red">中6个送1000金币</p>
                    </div>
                    <router-link tag="span" to="/personal/simulateBetting" class="gold_span">模拟投注</router-link>
                </div>
            </div>
            <div class="xian"></div>
        </div>
        <div class="broughtGold_box">
            <p class="red">领金币方式四</p>
            <div class="gold_content">
                <div class="gold_center">
                    <p class="red">支付购买获取金币</p>
                    <span class="gold_span" @click="totopUp">前往支付</span>
                </div>
            </div>
            <div class="xian"></div>
        </div>
    </div>
</template>

<script>
import { getcoindesc, checkin } from '@/api'
export default {
    data() {
        return {
            info: null,
        }
    },
    methods: {
        async getcoindesc() {
            const { data } = await getcoindesc({
                sid: localStorage.getItem('sid'),
                uid: localStorage.getItem('uid')
            })
            this.info = data
        },
        //签到
        async signIn() {
            const { data } = await checkin({
                uid: localStorage.getItem('uid'),
                sid: localStorage.getItem('sid')
            })
            this.$toast(data.message)
            if(data.errorcode == 0) {
                this.getcoindesc()
            }
        },
        totopUp() {
            this.$router.push('/home/topUp')
        }
    },
    created() {
        this.getcoindesc()
    }
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
