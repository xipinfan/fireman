<template>
  <div class="personal">
      <van-nav-bar
        title="个人信息"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
  </div>
</template>

<script>
export default {
  name: 'Personal',
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
