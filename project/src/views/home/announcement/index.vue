<template>
    <div class="container">
        <title-bar title_name="公告" />
        <div class="message_box ellipsis_box" v-for="(l,index) in list" :key="index">
            <van-cell :title="l.title" is-link :value="l.date" @click="goDetail(l)"/>
        </div>
    </div>
</template>

<script>
import {getnotices } from '@/api/home'
export default {
    data (){
        return {
            list:[]
        }
    },
    methods:{
        async getnotices () {
          const { data }    = await getnotices();
          this.list = data.list;
        },
        goDetail(data){
            this.$router.push({
                path: '/home/announcement/detail', 
                query: {
                    title: data.title, 
                    noticeId: data.id
                }
            })
        }
    },
    created(){
        this.getnotices()
    }
}
</script>

<style scoped lang="stylus">
.message_box
    border-bottom 1px solid #cccccc
    
</style>
