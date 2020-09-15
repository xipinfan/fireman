<template>
  <div class="record">
      <van-nav-bar
        class="frame"
        title="评分记录"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
  </div>
</template>

<script>
export default {
  name: 'Record',
  props: [
      
  ],
  data(){
      return{
          
      }
  },
  methods:{
      onClickLeft(){
           this.$emit('onClick1');
      }
  },
}
</script>

<style scoped>
    .frame {
        background-color: #f9f9f9!important;
    }
</style>
