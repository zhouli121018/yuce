<template>
    <div class="container">
        <title-bar title_name="我的金币"></title-bar>
        <div class="message_box" style="padding:0 .2rem .4rem">
           <table style="width:100%" v-if="list.length>0">
               <tr>
                   <th>日期</th>
                   <th>获取方式</th>
                   <th>数量</th>
               </tr>
               <tr v-for="(l,index) in list" :key="index">
                   <td>{{l.createtime}}</td>
                   <td>{{l.type}}</td>
                   <td>{{l.coin}}</td>
               </tr>
           </table>
        </div>
        
    </div>
</template>

<script>
import {getmycoinlist } from '@/api/home'
export default {
    data() {
        return {
            list:[],
        }
    },
    methods:{
        async getmycoinlist () {
            let obj = {};
            if(localStorage.getItem('uid')){
                obj.uid = localStorage.getItem('uid')
            }
            if(localStorage.getItem('sid')){
                obj.sid = localStorage.getItem('sid')
            }
          const { data }    = await getmycoinlist(obj);
          this.list = data.list;
        },
    },
    created(){
        this.getmycoinlist();
    },
}
</script>

<style lang="stylus" scoped>
table th
    font-weight bold
    text-align left
    background #dddddd
    padding .2rem .1rem
table td
    padding .3rem .1rem
    border-bottom 1px solid #ddd
</style>
