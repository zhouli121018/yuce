<template>
    <div class="container" v-if="info != null">
        <title-bar title_name="指标说明" />
        <div>
            <h3 style="font-size:22px;text-align:center;padding:16px 0">{{info.title}}</h3>
            <div style="text-indent:2em;line-height:24px;padding:0 10px;font-size:16px;">
                {{info.content}}
            </div>
        </div>
    </div>
</template>

<script>
import { getzhibiaodesc } from '@/api'
export default {
    data(){
        return {
          info: null
        }
    },
    methods:{
        async notice () {
          const { data }    = await getzhibiaodesc({
              lottype: this.$route.query.lottype
          })
         this.info = data
        },
    },
    created(){
        this.notice();
    }
}
</script>

<style>

</style>
