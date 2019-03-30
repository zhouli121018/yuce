<template>
    <div class="container">
        <title-bar :title_name="title_name" />
        <div>
            <h3 style="font-size:22px;text-align:center;padding:16px 0">{{notice_details.title}}</h3>
            <div style="text-indent:2em;line-height:24px;padding:0 10px;font-size:16px;">
                {{notice_details.content}}
            </div>
        </div>
    </div>
</template>

<script>
import {notice } from '@/api/home'
export default {
    data(){
        return {
            title_name: 'jkdsaof',
            notice_details:{
                title:'',
                content:''
            }
        }
    },
    methods:{
        async notice () {
          const { data }    = await notice({
              id:this.$route.query.id
          });
          this.notice_details.title = data.title;
          this.notice_details.content = data.content;
        },
    },
    created(){
        this.title_name = this.$route.query.title
        this.notice();
    }
}
</script>

<style>

</style>
