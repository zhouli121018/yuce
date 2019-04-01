<template>
    <div class="container">
        <title-bar title_name="用户中心" />
        <div class="my_title" v-if="info != null">
            <img class="my_title_photo" :src="$https_img+info.img" alt="">
            <div class="my_title_center">
                <div>
                    <span>{{info.uname}}</span>
                    <!-- $isvip='1';//是否VIP 1是vip，0不是vip -->
                    <img v-if="info.isvip == 1" class="my_title_center_img" src="~@/assets/vip.png" alt="">
                    <span v-if="info.isvip == 1" class="red">({{info.vipdate}}天)</span>
                </div>
                <div class="goldcoins_fans">
                    <p><span>金币: </span><span class="red">{{info.coin}}</span></p>
                    <p><span>粉丝: </span><span class="red">{{info.fans}}</span></p>
                </div>
            </div>
            <van-button v-if="info.isvip == 0" class="orange_btn" round @click="jumpTo('/home/openingMember')">开通特权会员</van-button>
        </div>
        <div class="my_title">
            <img class="my_title_photo title_photo" src="~@/assets/icon.png" alt="">
            <div class="my_title_center my_centers">
                <p>
                    金币充值
                </p>
                <p class="goldcoins_fans">
                    可看预测推荐文章详情
                </p>
            </div>
            <van-button type="danger" size="small" @click="jumpTo('/home/topUp')">前往充值</van-button>
        </div>
        <div class="xian"></div>        
        <div>
            <van-cell title="我的关注" is-link icon="shop" url="/personal/myFocus"/>
            <van-cell title="我的查看" is-link icon="look"  url="/personal/myLook"/>
            <van-cell title="我的消息" is-link icon="message" url="/personal/message/index"/>
            
        </div>
        <div class="xian"></div>
        <div>
            <van-cell title="意见反馈" is-link icon="feedback" url="/home/feedback"/>
            <van-cell title="关于彩票预测大师"  icon="feedback" @click="getabout"/>
        </div>
    </div>
</template>

<script>
import { getaccount, getabout } from '@/api'
import { Dialog } from 'vant'
export default {
    data() {
        return {
            info: null
        }
    },
    methods:{
        jumpTo(path){
            this.$router.push(path);
        },
        async getaccount() {
            const { data } = await getaccount({
                sid: localStorage.getItem('sid'),
                uid: localStorage.getItem('uid')
            })
            console.log(data)
            this.info = data
            console.log(this.info)
        },
        async getabout() {
            const { data } = await getabout();
            if(data.errorcode == 0 && data.content){
                Dialog.alert({
                    message: data.content
                }).then(() => {
                // on close
                });
            }
        }
    },
    created() {
        this.getaccount()
    }
}
</script>

<style scoped lang="stylus">
.my_centers
    width 60%!important
    p 
        line-height .6rem
        &:last-child
            color #666
/deep/ .van-cell
    line-height .88rem
    border-bottom 1px solid #eee
/deep/ .van-icon-shop::before
    content ''
    width .88rem
    height .88rem
    background url('~@/assets/myFocus.png') no-repeat
    background-size contain
/deep/ .van-icon-look::before
    content ''
    width .88rem
    height .88rem
    background url('~@/assets/look.png') no-repeat
    background-size contain
/deep/ .van-icon-message::before
    content ''
    width .88rem
    height .88rem
    background url('~@/assets/message.png') no-repeat
    background-size contain
/deep/ .van-icon-feedback::before
    content ''
    width .88rem
    height .88rem
    background url('~@/assets/feedback.png') no-repeat
    background-size contain
.my_title
    width: 100%
    padding .2rem 
    box-sizing border-box 
    display flex
    align-items center
    border-bottom 1px solid #eeeeee
    .my_title_center
        width 53%
        span 
            line-height .5rem
            padding-right .1rem
    .my_title_photo
        width 1.5rem
        height 1.5rem
        border-radius 50%
        margin-right .3rem
    .goldcoins_fans
        display flex
        p
            padding-right .3rem
    .my_title_center_img
        width .5rem
        height .5rem
        margin 0 .2rem
.orange_btn
    border-radius .6rem
    background orange
    color #ffffff
    height 1rem
    line-height 1rem
    padding 0 .2rem
.title_photo
    width .88rem!important
    height .88rem!important
</style>
