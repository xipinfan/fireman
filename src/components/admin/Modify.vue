<template>
  <div class="modify">
      <van-nav-bar
        title="修改密码"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
  </div>
</template>

<script>
export default {
  name: 'Modify',
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
  computed:{
        
  },
}
</script>

<style scoped>
    
</style>
