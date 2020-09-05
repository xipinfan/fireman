<template>
  <div id="app">
    <Sign @again="again" @begin="begin" v-if="node == 0"></Sign>
    <div v-if="node == 1">
        <van-nav-bar
         title="日常评分"
         /> 
        <router-view></router-view>
        <Contact @Click="onClickRight" :ID="ID" v-if="active=='contact'"></Contact>
        <van-tabbar v-model="active" @change="onChange">
          <van-tabbar-item name="medal" icon="medal-o">排名</van-tabbar-item>
          <van-tabbar-item name="chart" icon="chart-trending-o">图表</van-tabbar-item>
          <van-tabbar-item name="records" icon="records">评分</van-tabbar-item>
          <van-tabbar-item name="contact" icon="contact">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
  </div>
</template>

<script>

import Sign from './components/Signin.vue'
import Contact from './components/contact.vue'

export default {
  name: 'App',
  components: {
      Sign,
      Contact,
  },
  data(){
      return{
          active: 'medal',
          node:0,
          N1:0,
          ID:{
              username:"",
              passowrd:"",
          },
      }
  },
  methods:{
      begin(username,passowrd){
          if(this.N1==0){
              this.active="medal";
              this.ID.username=username;
              this.ID.passowrd=passowrd;
              this.node=1;
              this.$router.push('/medal');
          }  
      },
      again(){
          this.N1=0;
      },
      onChange(index) {
          this.$router.push('/'+index);
      },
      onClickRight() {
          this.node=0;this.N1=1;
      },
  }
}
</script>

<style>
   
</style>
