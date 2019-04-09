<template>
    <div class="container">
        <title-bar title_name="添加到主屏幕" />
        <img src="../../assets/down_iphone.png" alt="" style="width:100%">
    </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
    data() {
        return {
            
        }
    },
    mounted(){
    Dialog.confirm({
        title: '温馨提示',
        confirmButtonText:'已添加',
        cancelButtonText:'忽略',
        message: '请务必添加本页面到主屏幕，以便下次访问，点击 ‘已添加’ 不再提醒'
    }).then(() => {
    // on confirm
        localStorage['isadd'] = true;
        this.$router.push('/')
    }).catch(() => {
    // on cancel
    });
    }
}
</script>

<style lang="stylus" scoped>

</style>
