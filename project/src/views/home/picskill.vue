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
        <div class="message_box">
            <van-cell title="双色球投注技巧: 排除红色选号法" is-link />
        </div>
        <div class="message_box">
            <van-cell title="双色球投注技巧: 排除红色选号法" is-link />
        </div>
        <div class="message_box">
            <van-cell title="双色球投注技巧: 排除红色选号法" is-link />
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
.message_box
    margin .2rem 
    border-bottom 1px solid #eee
</style>
