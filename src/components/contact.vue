<template>
  <div class="hello frame">
      <div class="id">
          <h3 id="ID1">{{ ID.username }}</h3>
      </div>
      <div class="fra frame"> </div>
      <div>
          <van-cell title="个人信息" is-link @click="personal" />
          <van-cell title="修改密码" is-link @click="modify" />
          <div class="fra"> </div>
          <van-cell title="评分记录" is-link @click="record" />
          <div class="fra"> </div>
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
          node:0
      }
  },
  methods:{
      onClick(){
          this.$emit('Click');
      },
      personal(){
          this.$emit('Personal');
      },
      modify(){
          this.$emit('Modify');
      },
      record(){
          this.$emit('Record');
      },
  },
  computed:{
        
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .id{
        width: 100%;
        height: 18%;
        background-color: #fff;
    }
    #ID1{
        position:fixed;
        margin-top: 0.8rem; 
        margin-left: 0.32rem;
        margin-bottom: 0.8rem;
    }
    .frame {
       background-color: #f9f9f9;
    }    
    .fra{
       padding: 0.15rem;
       position:relative;
    }
    .hello{
        position: fixed;
        height: 100%;
        width: 100%;
    }   
</style>
