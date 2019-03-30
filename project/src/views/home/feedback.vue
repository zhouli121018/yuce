<template>
    <div class="container">
        <title-bar title_name="反馈" />
        <input type="text" placeholder="QQ或者微信号">
        <textarea class="textarea" placeholder="请输入反馈内容"></textarea>
        <van-button type="danger" size="large">提交反馈</van-button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
input 
    border 1px solid #eeeeee
    margin-top .4rem 
    background #ffffff
    height 1rem
    line-height 1rem
    padding .2rem
    box-sizing border-box
    width 94%
    border-radius .2rem
::-webkit-input-placeholder { /* WebKit browsers */
    font-size .36rem;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size .36rem;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size .36rem;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size .36rem;
}
.container
    background #f8f8f8
    text-align center
.textarea
    width 94%
    height 3rem
    margin .5rem auto 
    background #ffffff
    border-color #eee
    padding .2rem
    box-sizing border-box
    border-radius .2rem
button 
    width 90%
input,textarea
     font-size .36rem;
</style>
