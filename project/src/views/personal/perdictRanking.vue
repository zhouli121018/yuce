<template>
    <div class="container">
        <title-bar title_name="专家预测"></title-bar>
        <div class="perdict_title">
            <div class="title_content">
                <img class="title_photo" :src="this.$https_img+img" alt="">
                <div>
                    <div>
                        <span>{{uname}}</span>
                        <img src="~@/assets/zhuan@2x.png" alt="" v-if="isexp">
                        <img src="~@/assets/vip.png" alt="" v-if="isvip">
                    </div>
                    <p>粉丝: <span class="red">{{fans}}</span></p>
                </div>
            </div>
            <van-button type="danger" size="small" v-if="isfollow==0" @click="follow">关注</van-button>
            <van-button type="primary" size="small" v-if="isfollow==1">已关注</van-button>
        </div>
        <textarea placeholder="个人简介" id="textarea" v-model="jianjie" style="line-height:1.4" disabled></textarea>
        <div class="xian"></div>
        
        <lottypes @change_lottypes="getexpert" ref="rankChild"/>

        <div class="period_time">
            <span>期次</span>
            <span>开奖码</span>
            <span>预测内容</span>
            <span>状态</span>
        </div>
        <div class="period_content" v-for="(l,index) in list" :key="index">
            <span>{{l.issue}} {{l.cid}}</span>
            <span class="red red_num">{{l.kjnum}}</span>
            <span v-if="l.cid == 0" >{{l.pred}}</span>
            <span v-if="l.cid > 0" style="color:#2E8BE8;text-decoration:underline;" @click="showTost(l.cid)"> 查看预测 </span>
            <span class="red">{{l.status}}</span>
        </div>
    </div>
</template> 

<script>
import { getexpert, viewpred, follow } from '@/api/personal'
import { Dialog } from 'vant'
export default {
    data(){
        return {
            uname:'',
            img:'',
            fans:'',
            costcoin:'',
            isexp:0,  //1专家   0不是专家
            isvip:0,  //1是vip   0不是vip
            isfollow:0, //0为关注  1已关注
            jianjie:'', //简介
            list:[]
        }
    },
    methods:{
        showTost(cid){
            Dialog.confirm({
                title: '',
                message: '查看该预测需花费你'+this.costcoin+'金币，专家不保证100%准确，确定查看吗？'
            }).then(() => {
                // on confirm
                this.viewpred(cid)
            }).catch(() => {
                // on cancel
            });
        },
        async viewpred (cid) {
          const { data }    = await viewpred({
                sid: localStorage['sid'], //localStorage['sid']
                uid: localStorage['uid'],  //localStorage['uid']
                cid: cid,
          });
          if(data.content){
            Dialog.alert({
                message: data.content
            }).then(() => {
            // on close
            });
          }
            
        },
        async getexpert () {
            const { data }    = await getexpert({
                    sid: '"4b3eb3d62a674d2ac8fc1eb10aab3562', //localStorage['sid']
                    uid: '921717',  //localStorage['uid']
                    expid: this.$route.query.expid ,//专家id
                    ishead: 1,
                    lottype: this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].lottype,
                    postype: this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].type,
                    ycplaytype: this.$store.getters.lottypes[this.$refs.rankChild.tabs_active].poslist[this.$refs.rankChild.num_active].ycplaytypes[this.$refs.rankChild.yc_active].ycplaytype,
            });
            this.uname = data.uname;
            this.img = data.img;
            this.fans = data.fans;
            this.isfollow = data.isfollow;
            this.isexp = data.isexp;
            this.isvip = data.isvip;
            this.jianjie = data.jianjie;
            this.costcoin = data.costcoin;
            this.list = data.list;
        },
        async follow () {
            const { data }    = await follow({
                    sid: '"4b3eb3d62a674d2ac8fc1eb10aab3562', //localStorage['sid']
                    uid: '921717',  //localStorage['uid']
                    expid: this.$route.query.expid ,//专家id
            });
            if(data.errorcode == 0){
                this.isfollow = 1;
            }
        },
    }
}
</script>

<style scoped lang="stylus">
.period_time,.period_content
    width 100%
    background #f8f8f8
    padding .2rem 0
    display flex
    align-items center
    margin .2rem 0
    span 
        width 22%
        text-align center
        border-right 1px solid #cccccc
        color #666
        padding .2rem 0
        &:nth-child(1)
            width 50px !important
        &:nth-child(2)
            flex-grow 1
        &:nth-child(3)
            flex-grow 1
        &:last-child
            width 60px
            border-right none
.period_content
    span
        font-size .35rem 
        border-right none
        &.red
            color red
.text_center,.btn_group button
    margin-top .1rem
    text-align center
#textarea
    width 94%
    min-height 2rem
    margin .2rem auto 
    display block
    font-size .38rem
    border 1px solid #cccccc
    padding .2rem 
    box-sizing border-box
.perdict_title
    width 100%
    padding .2rem
    box-sizing border-box
    display flex
    justify-content space-between
    align-items center
    border-bottom 1px solid #cccccc
    button 
        border-radius .2rem
.title_photo
    width 1.5rem
    height 1.5rem
    border-radius 50%
    display inline-block
    margin-right .3rem
.title_content
    width 100%
    display flex
    align-items center
    div
        line-height .65rem
    img:nth-child(2)
        width .4rem
        height .4rem
        margin 0 4px
    img:last-child
        width .4rem
        height .4rem
</style>
