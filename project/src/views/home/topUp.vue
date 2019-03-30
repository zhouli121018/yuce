<template>
    <div class="container">
        <title-bar title_name="充值" />
        <div class="member_title">
            <p>金币说明</p>
            <p>金币仅用于查看预测数据,购买后不能提现和退款。平台不保证100%准确,但平台100%保证公平公正。</p>
        </div>
        <div class="xian"></div>
        <div class="member_content">
            <p>充值套餐</p>
            <div class="content_box" :class="index == active?'active':''" @click="onclick(index)" v-for="(item,index) in list" :key="index">
                <p class="">¥ {{item.money}}元</p>
                <p>{{item.des}}</p>
            </div>
        </div>
        <div class="xian"></div>
        <div class="member_pay">
            <p>支付方式</p>
            <div class="pay_choose" @click="choosePay(1)">
                <img src="~@/assets/ali_img.png" alt="">
                <div>
                    <p>支付宝支付</p>
                    <p>0手续费 安全便捷</p>
                </div>
                <img :src="payType == 1?chooseImg:normalImg" alt="">
            </div>
            <div class="pay_choose" @click="choosePay(2)">
                <img src="~@/assets/wechat@2x.png" alt="">
                <div>
                    <p>微信二维码支付</p>
                    <p>微信安全支付</p>
                </div>
                <img :src="payType == 2?chooseImg:normalImg" alt="">
            </div>
        </div>
        <van-button size="large" type="danger">前往充值</van-button>
        <p class="pay_faild">充值失败联系微信:999999</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {money: '10',des: '10金币'},
                {money: '20',des: '20金币'}
            ],
            active: 0,
            payType: 1,
            chooseImg: require('../../assets/choose_checked.png'),
            normalImg: require('../../assets/choose_normal.png')
        }
    },
    methods: {
        onclick(index) {
            this.active = index
        },
        choosePay(e) {
            console.log(e)
            this.payType = e
        }
    }
}
</script>

<style lang="stylus" scoped>
.pay_faild
    font-size .38rem
    color #666
    text-align center
button 
    width 90%
    margin .5rem
.pay_choose
    width 100%
    padding .2rem
    box-sizing border-box
    display flex
    align-items center
    border-top 1px solid #eeeeee
    >div
        width 80%
        padding-left .2rem
        >p 
            line-height .5rem
            &:last-child
                font-size .3rem
                color #666
    img
        &:first-child
            width .68rem
            height .68rem
        &:last-child
            width .64rem
            height .64rem
.member_content,.member_pay
    width 100%
    padding .3rem .2rem
    box-sizing border-box
    >p
        padding-left:.3rem
        font-size .4rem
        padding-bottom .2rem
    .content_box
        width 94%
        border 1px solid #eeeeee
        text-align center
        margin .2rem auto
        padding .1rem 0
        box-sizing border-box
        p 
            line-height .5rem
            &:first-child
                color #009AF3
                font-size .38rem
            &:last-child
                font-size .3rem
        &.active
            color red
            border 1px solid red
            p
                color red
.member_title
    width 100%
    padding .3rem .2rem
    box-sizing border-box
    p
        line-height .5rem
        &:last-child
            font-size .3rem
            color #666
</style>
