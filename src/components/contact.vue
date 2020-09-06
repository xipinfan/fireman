<template>
  <div class="hello">
      <div class="id">
          <h1 id="ID1">{{ ID.username }}</h1>
      </div>
      <div class="fra frame"> </div>
      <div>
          <van-cell title="个人信息" is-link @click="personal" />
          <van-cell title="修改密码" is-link @click="modify" />
          <div class="fra frame"> </div>
          <van-cell title="评分记录" is-link @click="record" />
          <div class="fra frame"> </div>
          <van-cell is-link title="退出登录" @click="onClick"/>
          <div class="frame1 frame"></div>
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
        height: 25%;
        position:relative;
    }
    #ID1{
        position:relative;
        margin-top: 10%; 
        margin-left: 4%;
        margin-bottom: 10%;
    }
    .frame {
       background-color: #e6e6e6;
    }    
    .fra{
       padding: 1.5%;
       position:relative;
    }
    .hello{
        height: 100%;
        width: 100%;
    }
    .frame1{
        padding: 38.5%;
    }
</style>
