<template>
  <div class="hello">
      <div class="id">
          <h1 id="ID1">{{ ID.username }}</h1>
      </div>
      <div>
          <van-cell title="个人信息" is-link @click="personal" />
          <van-cell title="修改密码" is-link @click="modify" />
          <van-cell title="评分记录" is-link @click="record" />
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
