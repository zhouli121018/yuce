<template>
  <div id="app">
    <router-view />
    <div class='full_sc' v-show="loading">
      <rise-loader class="custom-class" color="#8adff4" :loading="loading" :size="15" sizeUnit="px"></rise-loader>
    </div>
  </div>
</template>

<script>
import {getproperty} from '@/api/home'
export default {
  methods:{
    async getproperty () {
        const { data }    = await getproperty();
        this.$store.dispatch('set_lottypes',data.lottypes)
    },
  },
  created(){
    this.getproperty();
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  watch: {
    loading (nv, ov) {
      const root = document.documentElement
      if (nv) {
        root.classList.add('_fc')
      } else {
        root.classList.remove('_fc')
      }

    }
  }
};
</script>

<style lang='stylus'>
.full_sc
  background-color: rgba(25, 25, 25, .6);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0
  z-index: 99999
.custom-class
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
.max_width_100
    max-width:100%;
.van-ellipsis
  overflow:visible;
.no_border_btn
    border: none;
    color: #438CEB;
    text-decoration: underline;
  
</style>
