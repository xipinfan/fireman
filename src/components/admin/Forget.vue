<template>
  <div id="forget">
    <div v-if="node==0">
        <van-nav-bar
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
          :border="false"
        />
        <div style="margin-left: 0.5rem;margin-right: 0.5rem;margin-top: 0.4rem;">
            <div style="border-bottom: 0.001rem solid #dddddd;margin-bottom: 0.8rem;">
                <div style="font-size: 0.8rem;margin-bottom: 0.5rem;">请输入手机号：</div>
                <van-field center style="font-size: 0.45rem;" label-width="1.5rem" v-model="value">
                  <template #label>
                      <div style="color: #000000;font-size: 0.45rem;margin-right: 0rem;">
                          +86
                          <van-icon style="margin-top: 0.15rem;" name="arrow-down" />
                      </div>
                  </template>
                </van-field>
            </div>
            <div style="margin-top: 2rem;"></div>
            <van-button @click="node=1" type="info" size="large" color="#20A0FF" round style="font-size: 0.4rem;">下一步</van-button>
        </div> 
    </div>
    <div v-else-if="node==1"> 
        <van-nav-bar
          left-text="返回"
          left-arrow
          @click-left="node=0"
          :border="false"
        />
        <div style="margin-top: 0.6rem;"></div>
        <van-field v-model="problem" label="问题" readonly />
        <div style="margin-top: 0.6rem;"></div>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="答案"
          type="textarea"
          placeholder="请输入密保答案"
        />
        <div style="margin-left: 0.5rem;margin-right: 0.5rem;margin-top: 1.5rem;">
            <van-button @click="mes" type="info" size="large" color="#20A0FF" round style="font-size: 0.4rem;">确认提交</van-button>
        </div>
    </div>
    <div v-else>
        <van-nav-bar
          left-text="返回"
          left-arrow
          @click-left="node=1"
          :border="false"
        />
        <div style="margin-top: 0.6rem;"></div>
        <van-field v-model="password" label="新密码" placeholder="请输入新密码"/>
        <div style="margin-top: 0.6rem;"></div>
        <van-field v-model="password1" label="确认密码"  placeholder="请重复输入"/>
        <div style="margin-top: 1.5rem;margin-left: 0.5rem;margin-right: 0.5rem;">
            <van-button @click="pass" type="info" size="large" color="#20A0FF" round style="font-size: 0.4rem;">确认修改</van-button>
        </div>
    </div>
  </div>
</template>

<script>

import { Toast } from 'vant';

export default {
  name: 'Forget',
  data(){
      return{
          value:'',
          node:0,
          problem:"你爸爸！",
          password:"",
          password1:"",
          message:"",
          text1:"666",
      }
  },
  mounted: function(){
    
  },
  methods:{
      onClickLeft(){
          this.$emit('change');
      },
      mes(){
          if(this.message==this.text1){
              this.node=2;
          }
          else{
              Toast('答案错误');
          }
      },
      pass(){
          if(this.password.length>=6&&this.password.length<=16){
              if(this.password!=this.password1){
                  Toast('两次输入的密码不一致'); 
              }
              else{
                  Toast('密码修改成功'); 
                  this.$emit('change');
              }
          }
          else{
             Toast('新密码长度需要在6-16个字符之间'); 
          }
      }
  },
}
</script>

<style>
   
</style>
