<template>
    <div class="container">
        <div class="pay_title">
            <img src="~@/assets/wechat@2x.png" alt="">
            <div>
                <p>微信二维码支付</p>
                <p>微信安全支付</p>
            </div>
        </div>
        <h4>付款备注: 34444</h4>
        <div class="red pay_prompt">
            重要: 微信二维码支付只能从这里进入支付,不能使用已有保存的二维码支付。每次进来备注会变换!
        </div>
        <div class="pay_code">
            <div class="qrcode"></div>
            <p>充值失败联系微信:73737737737</p>
        </div>
        <div class="xian"></div>
        <div class="simulate_rules">
            <h4 class="rules_h">步骤:</h4>
            <p>1.截屏保存图片或长按保存二维码图片</p>
            <p>2.打开微信扫一扫选择相册</p>
            <p>3.选择刚刚保存的二维码</p>
            <p>4.付款的时候添加备注</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.simulate_rules
    width 100%
    padding .2rem
    box-sizing border-box
    text-align left 
    p
        line-height .6rem
        font-size .34rem
        color #666
.pay_code 
    width 100%
    text-align center
    margin-top .3rem
    .qrcode
        width 4rem
        height 4rem
        background red
        margin .3rem auto
    p
        font-size .32rem
        color #666
.pay_prompt
    padding .2rem
    box-sizing border-box
    font-size .38rem
    line-height .5rem
h4
    width 100%
    // text-align center
    padding .2rem 0
    font-size .4rem
.pay_title
    width 100%
    padding .2rem .3rem
    box-sizing border-box
    border-bottom 1px solid #eee
    display flex
    align-items center
    img 
        width .47rem 
        height .47rem
        margin-right .4rem
        display inline-block
    p
        line-height .5rem
        &:last-child
            font-size .36rem
            color #666
</style>
