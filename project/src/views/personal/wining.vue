<template>
    <div class="container">
        <h4>福彩3D09025期大奖专家组合</h4>
        <div class="xian"></div>
        <div class="wining_box">
            <img class="wining_photo" src="~@/assets/skill.png" alt="">
            <div class="wining_content">
                <div class="wining_top">
                    <span>杀灭大王</span>
                    <span class="wining_span">个位</span>
                    <span class="wining_span">杀5位</span>
                </div>
                <p><span class="red red_round">01</span></p>
            </div>
            <img class="wining_right" src="~@/assets/right@2x.png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.wining_box
    width 100%
    padding .3rem
    box-sizing border-box
    display flex
    align-items center
    border-bottom 1px solid #eee
    .wining_photo
        width 1.5rem
        height 1.5rem
        border-radius 50%
        margin-right .3rem
    .wining_right
        width .12rem
        height .22rem
    .wining_content
        width 73%
        .wining_top
            .wining_span 
                display inline-block
                padding .1rem
                font-size .34rem
                color #999
                border 1px solid #eee
                margin-left .2rem
                border-radius .1rem
h4
    width 100%
    text-align center
    padding .2rem 0
    font-size .4rem
.red_round
  border-radius 50%
  background red
  width .8rem
  height .8rem
  color #ffffff
  display inline-block
  line-height .8rem
  text-align center
  margin-right .2rem
</style>
