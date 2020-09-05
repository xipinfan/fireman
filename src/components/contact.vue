<template>
  <div class="hello">
      <div class="id">
          <h1 id="ID1">{{ ID.username }}</h1>
      </div>
      <div>
          <van-cell title="个人信息" is-link to="index" />
          <van-cell title="修改密码" is-link url="/vant/mobile.html" />
          <van-cell title="评分记录" is-link to="index" />
          <van-cell is-link title="退出登录" @click="onClick"/>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Contcat',
  props: [
      'ID',
  ],
  data(){
      return{
          
      }
  },
  methods:{
      onClick(){
          this.$emit('Click');
      }
  },
  computed:{
        
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .id{
        width: 100%;
        height: 25%;
        position:relative;
    }
    #ID1{
        position:relative;
        margin-top: 10%;
        margin-left: 4%;
        margin-bottom: 10%;
    }
</style>
