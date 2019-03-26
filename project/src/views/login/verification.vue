<template>
    <div class="container">
        <div class="van_box">
            <van-field label="手机号" maxlength="11" clearable v-model="mobile" placeholder="请输入手机号" />
        </div>
        <div class="van_box">
            <van-field label="验证码" maxlength="11" class="van_field" clearable v-model="code" placeholder="请输入验证码" />
            <CutDown @click="codeVerify" :disabled="disabled" :mobile="mobile"></CutDown>
        </div>
        <van-button type="danger">登录</van-button>
    </div>
</template>

<script>
import { validatePhone } from '@/utils/validate'
import CutDown from '@/components/CutDown'
export default {
    components: {
        CutDown
    },
    data() {
        return {
            mobile: '',
            code: ''
        }
    },
    methods: {
        codeVerify() {

        }
    },
    computed: {
        disabled() {
            return !validatePhone(this.mobile)
        },
        submitValidate() {
            if(!this.mobile || !this.code) {
                return {
                    ok: false,
                    msg: '请填写完整信息'
                }
            }
            if(!validatePhone(this.mobile)) {
                return {
                    ok: false,
                    msg: '请输入正确手机号'
                }
            }
            return {
                ok: true,msg: 'ok'
            }
        }
    }
}
</script>

<style scoped lang="stylus">
/deep/ .van-field .van-cell__title
    max-width 1.6rem
    text-align left
.van_field
    width 76%
button 
    width 90%
    margin-top 1rem
.van_box
    border 1px solid #eee
    width 94%
    margin .3rem auto
    display flex
    align-items center
.container
    text-align center
</style>
