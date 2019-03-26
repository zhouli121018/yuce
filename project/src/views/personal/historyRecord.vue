<template>
    <div class="container">
        <div class="history_box">
            <div class="box_top">
                <span>第2019058期</span>
                <span>2019年03月09日</span>
                <span>星期六</span>
            </div>
            <p><span class="red red_round">01</span><span class="red_round">01</span></p>
        </div>
        <div class="history_box">
            <div class="box_top">
                <span>第2019058期</span>
                <span>2019年03月09日</span>
                <span>星期六</span>
            </div>
            <p><span class="red red_round">01</span><span class="red_round">01</span></p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.history_box
    width 100%
    padding .2rem
    box-sizing border-box
    border-bottom 1px solid #eee
    .box_top
        min-width 80%
        display flex
        align-items center
        padding .2rem 0
        span 
            color #666
            padding-right .8rem
            &:not(:first-child)
                font-size .36rem
            
.red_round
  border-radius 50%
  width .8rem
  height .8rem
  display inline-block
  line-height .8rem
  text-align center
  margin-right .2rem
  border 1px solid red
  color red
  &.red
    background red
    color #ffffff
</style>
