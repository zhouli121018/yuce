<template>
    <div class="container">
        <textarea class="textarea" placeholder="请输入反馈内容"></textarea>
        <van-button type="danger" size="large">提交反馈</van-button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.container
    background #f8f8f8
    text-align center
.textarea
    width 94%
    height 3rem
    margin .5rem auto 
    background #ffffff
    border-color #eee
button 
    width 90%
</style>
