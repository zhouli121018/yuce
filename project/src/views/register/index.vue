<template>
    <div class="container">
        <title-bar title_name="新用户注册" />
        <div class="van_box">
            <van-field label="手机号" maxlength="11" type="number" clearable v-model="phone" placeholder="请输入手机号" />
        </div>
        <div class="van_box">
            <van-field label="密码" type="number" maxlength="11" clearable v-model="password" placeholder="请输入密码" />
        </div>
        <div class="van_box">
            <van-field label="验证码" maxlength="11" type="number" class="van_field" clearable v-model="code" placeholder="请输入验证码" />
            <CutDown @click="codeVerify" :disabled="disabled" :mobile="phone"></CutDown>
        </div>
        <div class="van_box">
            <van-field label="邀请码" maxlength="11" type="number" class="van_field_code" clearable v-model="vcode" placeholder="输入邀请码双方可得10金币" />
        </div>
        <van-button type="danger" @click="regist">注册</van-button>
    </div>
</template>

<script>
import { validatePhone } from '@/utils/validate'
import CutDown from '@/components/CutDown'
import { getvcode, regist } from '@/api'
export default {
    components: {
        CutDown
    },
    data() {
        return {
            phone: '',
            code: '', //验证码
            password: '',
            vcode: '', //邀请码
            device: 0  //手机类型
        }
    },
    methods: {
        async codeVerify() {
            const { data } = await getvcode({
                phone: this.phone,
                // pass: this.password,
                // vcode: this.vcode,
                // icode: this.code,
                // device: this.device
            })
            this.$toast(data.message)
        },
        async regist() {
            let obj = {
                phone: this.phone,
                pass: this.password,
                vcode: this.vcode,
                icode: this.code,
                device: this.device
            };
            if(sessionStorage.getItem('cid')){ //渠道号
                obj.cid = sessionStorage.getItem('cid')
            }
            if(sessionStorage.getItem('pid')){ //推荐码
                obj.pid = sessionStorage.getItem('pid')
            }
            const { data } = await regist(obj)
            if(data.errorcode == 0) {
                window.localStorage['uid'] = data.uid
                window.localStorage['sid'] = data.sid
                this.$router.replace('/home/index')
            }
        }
    },
    computed: {
        disabled() {
            return !validatePhone(this.phone)
        },
        submitValidate() {
            if(!this.phone || !this.code) {
                return {
                    ok: false,
                    msg: '请填写完整信息'
                }
            }
            if(!validatePhone(this.phone)) {
                return {
                    ok: false,
                    msg: '请输入正确手机号'
                }
            }
            return {
                ok: true,msg: 'ok'
            }
        }
    },
    created(){
        let u = navigator.userAgent, app = navigator.appVersion;
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
        let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isAndroid) {
            this.device = 0
        }
        if (isIOS) {
            this.device = 1
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
.van_field
    width 76%
.van_field_code
    /deep/ .van-field__control::-webkit-input-placeholder {
        color: orange
    }
button 
    width 90%
    margin-top 1rem
.van_box
    border 1px solid #cccccc
    width 94%
    margin .3rem auto
    display flex
    align-items center
.container
    text-align center
</style>
