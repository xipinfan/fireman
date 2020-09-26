<template>
  <div id="app">
    <Sign @again="again" @begin="begin" v-if="node == 0"></Sign>
    <div v-else-if="node == 1">
        <van-nav-bar
         style="background-color: #fbfbfb;"
         title="日常评分"
         /> 
        <router-view></router-view>
        <Contact 
            @Click="onClickRight"
            @Personal="personal"
            @Record="record"
            @Modify="modify"
            :ID="ID"
            v-if="active=='contact'"></Contact>
        <van-tabbar v-model="active" @change="onChange">
          <van-tabbar-item v-if="ID.is_admin==1" name="medal" icon="medal-o">排名</van-tabbar-item>
          <van-tabbar-item v-if="ID.is_admin==1" name="chart" icon="chart-trending-o">图表</van-tabbar-item>
          <van-tabbar-item name="records" icon="records">评分</van-tabbar-item>
          <van-tabbar-item name="contact" icon="contact">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
    <div v-else>
        <Person v-if="node == 2" :ID="ID" @Change="Change" @onClick1="onClick1"></Person>
        <Modify v-if="node == 3" :ID="ID" @Change="Change" @onClick1="onClick1"></Modify>
        <Record v-if="node == 4" @onClick1="onClick1"></Record>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Sign from './components/Signin.vue'
import Contact from './components/Contact.vue'
import Person from './components/admin/Personal.vue'
import Record from './components/admin/Record.vue'
import Modify from './components/admin/Modify.vue'

export default {
  name: 'App',
  components: {
      Sign,
      Contact,
      Person,
      Record,
      Modify,
  },
  data(){
      return{
          nb:'',
          zsbd:'',
          active: 'contact',
          active1:'contact',
          node:0,
          N1:0,
          ID:{  
          },
      }
  },
  mounted: function () {
    localStorage.setItem('zsbd',"");
    localStorage.setItem('cmts',"");
    window.setInterval(() => {
        this.nb=localStorage.getItem('cmts');
        this.zsbd=localStorage.getItem('zsbd');
        if(this.nb=="1"){
            localStorage.setItem('cmts',"0");
            if(this.node==2||this.node==3||this.node==4){
                this.node=1;
            }
            else if(this.zsbd!="1"){
                //plus.runtime.quit(); 
            }
        }
    }, 10)
  },
  methods:{
      begin(user){
          console.log("?");
          if(this.N1==0){
              console.log(user);
              this.active="contact";
              //this.ID=user.data.extend;
              this.N1=1;
              this.node=1;
              this.$router.push('/contact');
          }  
      },
      Change(ID){
          this.ID=ID;
          var IDEA=this.ID;
          localStorage.setItem('IDEA',JSON.stringify(IDEA));
      },
      onClick1() {
           this.node=1;
      },
      again(){
          this.N1=0;
      },
      onChange(index) {
          var that=this;
          if(that.zsbd=="1"){
              that.active=that.active1;
              that.$dialog.alert({
                    message: '当前评价表未完成',
              });
              localStorage.setItem('zsbd',"");
          }
          else{
              that.active1=that.active;
              this.$router.push({
                  path:'/'+index,
                  query:{
                      ID:that.ID,
                  }
              });  
          }
      },
      onClickRight() {
          this.node=0;this.N1=1;
      },
      personal(){
          this.node=2;
      },
      modify(){
          this.node=3;
      },
      record(){
          this.node=4;
      },
  }
}
</script>

<style>
   .top{
       padding: 0.7rem;
   }
   .frame {
       background-color: #f9f9f9!important;
   }
</style>
