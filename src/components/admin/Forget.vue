<template>
  <div id="forget">
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
    />
    
  </div>
</template>

<script>

import { Dialog } from 'vant';

export default {
  name: 'Forget',
  data(){
      return{
          
      }
  },
  mounted: function(){
    Dialog.alert({
      title: '标题',
      message: '弹窗内容',
      theme: 'round-button',
    }).then(() => {
        
    });
  },
  methods:{
      onClickLeft(){
          this.$emit('change');
      }
  },
}
</script>

<style>
   
</style>
